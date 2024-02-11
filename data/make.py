from bs4 import BeautifulSoup
import os
import json

# read the html from the folder pages
fields = set()
for page in os.listdir("data/pages"):
    with open(f"data/pages/{page}") as f:
        print(f"Reading {page}")
        html = f.read()
        soup = BeautifulSoup(html, "html.parser")
        industry = soup.find_all("h1")[1].text.strip()
        fields.add(industry)
        # get the cards
        cards = soup.find_all("div", {"class": "card"})
        for card in cards:
            # search for the tooltiptext class and get the text in it
            tooltips = card.find("span", {"class": "tooltiptext"})
            if tooltips is not None:
                print(tooltips.text)

            title = card.find("h5").text

            image = card.find("img")
            if image is not None:
                image = image.get("src")

            address = card.find("li", {"class": "gz-card-address"})
            if address is not None:
                address = address.text.strip()
            
            phone = card.find("li", {"class": "gz-card-phone"})
            if phone is not None:
                phone = phone.text.strip()

            website = card.find("li", {"class": "gz-card-website"})
            if website is not None:
                # get the a tag and then the href attribute
                website = website.find("a").get("href")
            
            print(image, title, industry)
            print(address, phone, website)
            print("-" * 50)
print(fields)