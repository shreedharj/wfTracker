import requests
r = requests.get("https://eonet.gsfc.nasa.gov/api/v2.1/events")
events = r.json()["events"]
#print(events)
for i in events:
    if i[0].id == 8:
        print(i)
