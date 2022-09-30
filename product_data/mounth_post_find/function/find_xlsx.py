import requests
from bs4 import BeautifulSoup as soup
from collections.abc import MutableSequence


def parse(posts: MutableSequence, selector: str) -> MutableSequence:
  data_list = []
  for post in posts:
    
    response = requests.get(post)
    target_page = response.text
    parse = soup(target_page, 'html.parser')
    parse_range = parse.select(selector)

    # xlsx파일이 여러개인 포스트가 존재
    if (selector == 'section#bo_v_file'):
      for file_area in parse_range:
        # !파일확장자 체크 가능!
        atag_file = file_area.find_all('a')
        # a태그 속성값(다운로드url)에 접근해서 배열에 추가
        for file in atag_file:
          data_list.append(file['href'])
          
    #
    elif (selector == 'section#bo_v_info'):
      for file_name in parse_range:
        span_name = file_name.find('span', attrs={'class': 'sv_member'})
        data_list.append(span_name.get_text())
        
    
  
  return data_list


# 중첩 시퀀스를 단일 시퀀스로 만들기
def flatten(items, ignore_types=str):
  for item in items:
    if not isinstance(item, ignore_types):
      yield from flatten(item)
    else:
      yield item


def make_xlsx_files_list():
  download_xlsx_urls = []
  
  # url들(포스트)을 파싱해서 각 포스트에 있는 url에 있는 엑셀파일 추출
  def get_xlsx_files(urls_posts, selector):
    
    # flatten함수를 통해 url들을 한 배열에 모으기
    for post in flatten(urls_posts):
      download_xlsx_urls.append(post)
    
    return parse(download_xlsx_urls, selector)
    
  return get_xlsx_files