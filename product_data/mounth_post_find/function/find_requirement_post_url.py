import requests
from bs4 import BeautifulSoup as soup
from collections.abc import MutableSequence


def filtering(post: soup, mounth: str) -> bool or str:
  
  post_name = post.get_text()
  # 필터링 조건(매개변수로 들어온 텍스트가 해당 포스트 제목에 포함되어 있어야함)
  # 매개변수로 들어온 텍스트 --> EX) '10월' 해당 월에관련된 포스트만 가져오기
  if (mounth in post_name):
    select = post.find('a')['href']
    return select

  return False


def parse(url: str, mounth: str) -> MutableSequence:
  # 각 페이지마다 파싱
  requirement_satisfy_post_url = []
  response = requests.get(url)
  target_page = response.text
  parse= soup(target_page, 'html.parser')
  posts = parse.select('td.td_subject')
  
  # 페이지에 있는 포스트를 순회하며 필터링
  for post in posts:
    value = filtering(post, mounth)
    # 필터링에서 걸러진 값들은 제외
    if(not value):
      continue
    requirement_satisfy_post_url.append(value)
    
    
  return requirement_satisfy_post_url


# 매개변수로 들어온 세개의 페이지를 순회
def rounds_post(url: str, mounth: str, page_num: MutableSequence) -> MutableSequence:
  collection = []
  for page in page_num:
    request_url = url.format(page)
    collection.append(parse(request_url, mounth))
  return collection
  