import requests
from bs4 import BeautifulSoup as soup
from collections.abc import MutableSequence


def filtering(post: soup, mounth: str) -> bool or str:
  
  post_name = post.get_text()
  # 필터링 조건(매개변수로 들어온 텍스트가 해당 포스트 제목에 포함되어 있어야함)

  if (mounth in post_name):
    # 조건에 해당된다면 해당 포스트에 있는 <a>태그 href속성값만 리턴 --> (xlsx파일 링크)
    select = post.find('a')['href']
    return select

  return False


def url_parse(url: str, mounth: str) -> MutableSequence:
  # 사용자가 요청한 url만 파싱(키워드: 월) --> 사용자가 설정한 월에 해당하는 글만 파싱
  requirement_satisfy_post_url = []
  response = requests.get(url)
  target_page = response.text
  parse= soup(target_page, 'html.parser')
  post = parse.select('td.td_subject')
  
  # 포스트를 순회하며 필터링
  for is_keyword_post in post:
    value = filtering(is_keyword_post, mounth)
    # 필터링에서 걸러진 값들은 제외
    if(not value):
      continue
    requirement_satisfy_post_url.append(value)
    
    
  return requirement_satisfy_post_url


# 매개변수로 들어온 url들을 순회
def rounds_post(url_list: MutableSequence, mounth: str, page_num: MutableSequence) -> MutableSequence:
  collection = []
  for url in url_list:
    # page query값이 존재하는 url --> 총데이터
    if 'page' in url:
      for page in page_num:
        
        # 해당 url page쿼리에 값 추가해서 파싱
        request_url = url.format(page)
        collection.append(url_parse(request_url, mounth))
      continue

    # page query값이 존재하지 않는 url
    collection.append(url_parse(url, mounth))
  return collection


  