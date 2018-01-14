import requests, json, csv, time, datetime

url='https://min-api.cryptocompare.com/data/histominute?fsym=ETH&tsym=USD&limit=60&aggregate=3&e=CCCAGG'

url = 'https://min-api.cryptocompare.com/data/histominute?fsym=ETH&tsym=USD&e=CCCAGG'
#fsym ='fsym=ETH'
#tsym = 'tsym=USD'
toTs = '&toTs=1515801867' #Friday, January 12, 2018 4:04:27 PM GMT-08:00
#toTs_1 = '&toTs='
limit = '&limit=2000'
#e=CCCAGG

url += toTs
url += limit

r = requests.get(url)

data = r.json()
# data['Data'][i]['close'/'high'/'low'/'open'/'time'/'volumefrom'/'volumeto']

data = data['Data']

def writeFile(data):
    with open('data.csv', 'w', newline='') as f:
        fields = ['time', 'close', 'high', 'low', 'open', 'volumefrom', 'volumeto']
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        for item in data:
            writer.writerow({fields[0]:item[fields[0]],fields[1]:item[fields[1]],fields[2]:item[fields[2]],fields[3]:item[fields[3]],fields[4]:item[fields[4]],fields[5]:item[fields[5]],fields[6]:item[fields[6]]})
            print(item)
writeFile(data)
