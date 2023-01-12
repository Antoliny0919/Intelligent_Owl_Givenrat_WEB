import requests
import json

url = 'http://127.0.0.1:8000/register/'

body = {
        'username': 'dltlehfld0325',
        'email': 'dltlehfld0325@naver.com',
        'password': 'tlgus0919!',
        'company_name': '해송유통징오',
        'company_phone_number': '010-2053-6323',
        'fax_number': '2104352321',
        'company_address': '어디일까요'
        }

params = {}

headers = {
        'Content-type': 'application/json',
        'Accept' : 'text/html',
        'charset': 'UTF-8'
        }

response = requests.post(url, data=json.dumps(body), headers=headers)
print(response.status_code)