import requests
from bs4 import BeautifulSoup as soup
from collections.abc import MutableSequence

def parse(posts: MutableSequence) -> MutableSequence:
  xlsx_links = []
  for post in posts:
  
    response = requests.get(post)
    target_page = response.text
    parse= soup(target_page, 'html.parser')
    post_xlsx_link_area = parse.select('section#bo_v_file')
  
    # xlsx파일이 여러개인 포스트가 존재
    for file_area in post_xlsx_link_area:
      # !파일확장자 체크 가능!
      atag_file = file_area.find_all('a')
      # a태그 속성값(다운로드url)에 접근해서 배열에 추가
      for file in atag_file:
        xlsx_links.append(file['href'])
  
  return xlsx_links
    
  # return xlsx_links
