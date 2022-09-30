import function.find_requirement_post_url as find_urls
import function.find_xlsx as find_xlsx


MOUNTH = '10월'
page = ['1', '2', '3']
url = "http://school062.com/bbs/board.php?bo_table=product_01&sfl=wr_subject&stx=%EC%B4%9D&sop=and&spt=-7915&page={}"

# 중첩 시퀀스를 단일 시퀀스로 만들기
def flatten(items, ignore_types=str):
  for item in items:
    if not isinstance(item, ignore_types):
      yield from flatten(item)
    else:
      yield item


# xlsx파일이 담길 리스트생성
def make_xlsx_files_list():
  download_xlsx_urls = []
  
  # url들(포스트)을 파싱해서 각 포스트에 있는 url에 있는 엑셀파일 추출
  def get_xlsx_files(urls_posts):
    
    # flatten함수를 통해 url들을 한 배열에 모으기
    for post in flatten(urls_posts):
      download_xlsx_urls.append(post)
    
    return find_xlsx.parse(download_xlsx_urls)
    
  return get_xlsx_files



# 특정 월에 해당하는 공산품 엑셀파일이 담긴 포스트 주소 가져오기
user_set_mounth_urls = find_urls.rounds_post(url, MOUNTH, page)

xlsx_list = make_xlsx_files_list()
xlsx_files = xlsx_list(user_set_mounth_urls)
print(xlsx_files)









