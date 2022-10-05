import requests
from bs4 import BeautifulSoup as soup
from collections.abc import MutableSequence


def parse(posts: MutableSequence) -> MutableSequence:
  xlsx_count = []
  
  def parse_data(selector: str):
    data_list = []
    index = 0

    for post in posts:
      # post_xlsx_cnt --> 해당 포스트에 xlsx데이터 링크 갯수
      post_xlsx_cnt = 0
      response = requests.get(post)
      target_page = response.text
      parse = soup(target_page, 'html.parser')
      parse_range = parse.select(selector)
      
      # xlsx파일이 여러개인 포스트가 존재
      if (selector == 'section#bo_v_file'):
        
        for file_area in parse_range:
          atag_file = file_area.find_all('a')
          post_xlsx_cnt += len(atag_file)
          
          # a태그 속성값(다운로드url)에 접근해서 배열에 추가
          for file in atag_file:
            xlsx_file_name = file.find('strong').get_text()
            # 파일 확장자가 pdf인 경우에는 xlsx데이터 갯수 차감
            # 유림에프에스 xlsb확장자 사용하지만 총 데이터는 xlsx를 사용하기 때문에 가져올 필요가 없음
            if(xlsx_file_name.endswith('pdf') or xlsx_file_name.endswith('xlsb')):
              post_xlsx_cnt -= 1
              continue
            data_list.append(file['href'])
        xlsx_count.append(post_xlsx_cnt)
            
            
      # 해당 포스트의 작성자 부분
      elif (selector == 'section#bo_v_info'):
        
        for file_name in parse_range:

          span_name = file_name.find('span', attrs={'class': 'sv_member'})
          data_list.extend([span_name.get_text()] * xlsx_count[index])
          index += 1
          
    return data_list
  
  return parse_data


# 중첩 시퀀스를 단일 시퀀스로 만들기
def flatten(items, ignore_types=str):
  for item in items:
    if not isinstance(item, ignore_types):
      yield from flatten(item)
    else:
      yield item


def make_xlsx_files_list():
  download_xlsx_urls = []
  parser_object = object()
  # url들(포스트)을 파싱해서 각 포스트에 있는 url에 있는 엑셀파일 추출
  
  def get_xlsx_files(urls_posts, selector):
    nonlocal parser_object
    
    # flatten함수를 통해 url들을 한 배열에 모으기
    if (not download_xlsx_urls):
      
      for post in flatten(urls_posts):
        download_xlsx_urls.append(post)
      parser_object = parse(download_xlsx_urls)
      
      return parser_object(selector)
    
    return parser_object(selector)
    
  return get_xlsx_files