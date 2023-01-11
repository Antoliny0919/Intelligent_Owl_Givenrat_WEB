import requests
import json

url = 'http://127.0.0.1:8000/products/'

body = {
        'name': '우리콩두부부침용',
        'attribute': '대두(국산,경북안동)100%, 천영응고제',
        'brand': '도래샘푸드/천년풍미',
        'price': 20000,
        'code_number': '23000'
        }

params = {}

headers = {
        'Content-type': 'application/json',
        'Accept' : 'text/html',
        'charset': 'UTF-8'
        }

response = requests.post(url, data=json.dumps(body), headers=headers)
print(response.status_code)