from bs4 import BeautifulSoup
import requests
import json

html = requests.get("https://www.ssa.gov/oact/babynames/decades/century.html")
soup = BeautifulSoup(html.text, "html.parser")
l_tr = soup.find_all("tr")

l_name = []
for elem in l_tr:
    l_td = elem.find_all("td")
    if len(l_td) == 5:
        l_name.append(l_td[1].text)
        l_name.append(l_td[3].text)

with open("name.json", "w") as f:
    json.dump(l_name, f)