import requests
import json

url = 'http://127.0.0.1:8000/register/'

body = {
        'username': 'dltlehfld0324~',
        'email': 'dltlehfld0324@naver.com',
        'password': 'tlgus0919!',
        'company_name': '해송유통징',
        'company_phone_number': '010-2353-6323',
        'fax_number': '211315321',
        'company_address': '어디일까'
        }

params = {}

headers = {
        'Content-type': 'application/json',
        'Accept' : 'text/html',
        'charset': 'UTF-8'
        }

response = requests.post(url, data=json.dumps(body), headers=headers)
print(response.status_code)