from bs4 import BeautifulSoup, os
import json, requests
from bing_image_urls import bing_image_urls

def scrape_links():
    for page in os.listdir("data/pages"):
        with open(f"data/pages/{page}") as f:
            soup = BeautifulSoup(f, "html.parser")
            for card in soup.find_all("div", {"class": "card"}):
                # find the first link and get the href attribute
                link = card.find("a").get("href")
                print(link, file=open("data/links.txt", "a"))

def get_text_if_exists(thing):
    if thing is not None:
        return thing.text
    return None

def get_data():
    with open("data/links.txt") as f:
        links = f.readlines()
    links = [link.strip() for link in links]
    data = []
    for link in links:
        page = requests.get(link)
        soup = BeautifulSoup(page.content, "html.parser")
        name = soup.find("h1").text.strip()
        print(name)
        category = soup.find("div", {"class": "gz-details-categories"}).find('p')
        if category is not None:
            category_string = ""
            for span in category.find_all("span"):
                category_string += span.text + ", "
            category = category_string[:-2]

        address = soup.find("li", {"class": "gz-card-address"})
        if address is not None:
            address = address.text
        phone = soup.find("li", {"class": "gz-card-phone"})
        if phone is not None:
            phone = phone.text
        website = soup.find("li", {"class": "gz-card-website"})
        if website is not None:
            website = website.find("a").get("href")
        about = soup.find("div", {"class": "gz-details-about"})
        if about is not None:
            about = about.find("p").text
        images = soup.find("div", {"class": "gz-details-images"})
        if images is not None:
            images = [img.get("src") for img in images.find_all("img")]
        logo = soup.find("div", {"class": "gz-details-member-logo"})
        if logo is not None:
            logo = logo.find("img").get("src")
        if logo is None:
            header = soup.find("div", {"class": "gz-details-headerimg"})
            if header is not None:
                logo = header.find("img").get("src")

        contact_person = soup.find("div", {"class": "gz-rep-card"})
        contact_info = {
            "name": None,
            "title": None,
            "phone": None
        }
        if contact_person is not None:
            contact_info["name"] = get_text_if_exists(contact_person.find("div", {"class", "gz-member-repname"}))
            contact_info["title"] = get_text_if_exists(contact_person.find("div", {"class", "gz-member-reptitle"}))
            contact_info["phone"] = get_text_if_exists(contact_person.find("span", {"class", "gz-rep-phone-num"}))

        data.append({
            "name": name,
            "category": category,
            "address": address,
            "phone": phone,
            "website": website,
            "about": about,
            "images": images,
            "logo": logo,
            "contact_info": contact_info,
            "link": link,
        })
        
        with open("data/data.json", "w") as f:
            json.dump(data, f)

def get_image_from_google(query):
    query = f"{query} logo"
    print(f"Getting image for {query}", bing_image_urls(query, limit=1)[0])
    return bing_image_urls(query, limit=1)[0]

# eliminate duplicate data
def clean_data():
    with open("data/data.json") as f:
        data = json.load(f)
    cleaned_data = []
    for item in data:
        if item not in cleaned_data:
            cleaned_data.append(item)

    id_num = 0
    for item in cleaned_data:
        if item["address"] is not None: item["address"] = item["address"].strip().replace("\n", ", ")
        if item["phone"] is not None: item["phone"] = item["phone"].strip()
        if item["category"] is not None: item["category"] = item["category"].split(", ")
        if item["logo"] is None: item["logo"] = get_image_from_google(item["name"])
        if item["images"] is not None: 
            # remove duplicate images
            item["images"] = list(set(item["images"]))
        item["id"] = id_num
        id_num += 1
    with open("data/cleaned_data.json", "w") as f:
        json.dump(cleaned_data, f)

# scrape_links()
# get_data()
clean_data()