import wget
import os
import function.find_requirement_post_url as find_urls
import function.find_xlsx as find_xlsx
import function.download_xlsx_file as download_xlsx


MOUNTH = '11월'
PARSE_XLSX_SELECTOR = 'section#bo_v_file'
PARSE_NAME_SELECTOR = 'section#bo_v_info'
PAGE = ['1', '2', '3']
url = "http://school062.com/bbs/board.php?bo_table=product_01&sfl=wr_subject&stx=%EC%B4%9D&sop=and&page={}"
DOWNLOAD_PATH = '/Users/antoliny/intelligent_owl_givenrat/product_data/excel_files'



if __name__ == "__main__":

  # 특정 월에 해당하는 공산품 엑셀파일이 담긴 포스트 주소 가져오기
  user_set_mounth_urls = find_urls.rounds_post(url, MOUNTH, PAGE)

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
  









