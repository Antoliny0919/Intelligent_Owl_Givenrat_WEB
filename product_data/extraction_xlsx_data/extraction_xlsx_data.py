import wget
import os
import function.find_requirement_post_url as find_urls
import function.find_xlsx as find_xlsx
import function.download_xlsx_file as download_xlsx


MOUNTH = '11월'
PARSE_XLSX_SELECTOR = 'section#bo_v_file'
PARSE_NAME_SELECTOR = 'section#bo_v_info'
PAGE = ['1', '2', '3']
# 광주학교급식청렴홍보협의회 공산품 검색어 총이라고 검색했을시 url
url_total = "http://school062.com/bbs/board.php?bo_table=product_01&sfl=wr_subject&stx=%EC%B4%9D&sop=and&page={}"

# < '총'(총단가표) 이라는 키워드에 나오진 않지만 꼭 필요한 메인브랜드 데이터들 > --> 임의로 추가
# 메인브랜드만 가져오는 것은 페이지네이션 필요 x

# 청정원 추가 --> 키워드 : 청정원
url_daesang = "http://school062.com/bbs/board.php?bo_table=product_01&sca=&sop=and&sfl=wr_subject&stx=%EC%B2%AD%EC%A0%95%EC%9B%90"
# 오뚜기 추가 --> 키워드 : 오뚜기
url_ottogi = "http://school062.com/bbs/board.php?bo_table=product_01&sca=&sop=and&sfl=wr_subject&stx=%EC%98%A4%EB%9A%9C%EA%B8%B0"

parse_url_list = [url_total, url_daesang, url_ottogi]

DOWNLOAD_PATH = '/Users/antoliny/intelligent_owl_givenrat/product_data/excel_files'



if __name__ == "__main__":

  # 특정 월에 해당하는 공산품 엑셀파일이 담긴 포스트 주소 가져오기
  user_set_mounth_urls = find_urls.rounds_post(parse_url_list, MOUNTH, PAGE)
  # 포스트에 있는 엑셀파일 주소들을 가져오기
  xlsx_data = find_xlsx.make_xlsx_files_list()
  xlsx_files = xlsx_data(user_set_mounth_urls, PARSE_XLSX_SELECTOR)
  xlsx_names = xlsx_data(user_set_mounth_urls, PARSE_NAME_SELECTOR)
  
  # xlsx_names 수정이 필요함
  data = list(zip(xlsx_files, xlsx_names))

  os.chdir(DOWNLOAD_PATH)
  # 리스트에 들어있는 엑셀파일들을 내 디렉터리에 추가 하기
  
  for xlsx_url, name in data:
    wget.download(xlsx_url, f'{name} {MOUNTH} 공산품 데이터.xlsx', bar=download_xlsx.bar_custom)
  









