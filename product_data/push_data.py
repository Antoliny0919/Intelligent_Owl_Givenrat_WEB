import requests
import json

url = 'http://127.0.0.1:8000/products/'

data = {'name': '우리콩두부부침용',
        'attribute': '대두(국산,경북안동)100%, 천영응고제',
        'brand': '도래샘푸드/천년풍미',
        'price': '21,000'}

headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        }

# 400 발생
# response = requests.post(url, data=json.dumps(data), headers=headers)
# print(response.status_code)