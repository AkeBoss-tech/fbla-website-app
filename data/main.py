import requests
from bs4 import BeautifulSoup

# set the url to scrape from
url = "https://business.suburbanchambers.org/list/"

# copy all the links in the div that has id "gz-ql"
page = requests.get(url)
soup = BeautifulSoup(page.content, "html.parser")
# get the main content div
div = soup.find("div", {"id": "gz-ql"})
# find all the links on the page
links = div.find_all("a")

# get the href attribute from each link
links = [link.get("href") for link in links]
print(links)

# download the page for each link and save the html to a file in the pages directory
for link in links:
    page = requests.get(link)
    filename = link.split("/")[-1] + ".html"
    print(f"Saving {filename}")
    with open(f"data/pages/{filename}", "w") as f:
        f.write(page.text)