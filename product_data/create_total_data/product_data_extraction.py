# 찾아야할 데이터 --> 상품명, 규격, 가격, 상품정보(속성)
import os

from get_product_data.excel_parsing import sheet_parsing
from get_product_data.monkey_patch import monkey_patch_openpyxl
from get_product_data.product_parsing import product_parsing


# 엑셀 파일들이 들어있는 디렉토리의 이름 / 경로
EXCELS_DIR_NAME = 'excel_files'

EXCELS_DIR_PATH = f"{os.getcwd()}/{EXCELS_DIR_NAME}/"

excel_files_list = os.listdir(EXCELS_DIR_NAME)

excel_files_list.remove('.DS_Store')


if __name__ == "__main__":
  
  monkey_patch_openpyxl()
  
  # 모든 엑셀 파일에 있는 각 시트들을 파싱
  parse_sheet_data = sheet_parsing(excel_files_list, EXCELS_DIR_PATH)
  
  parse_product_data = product_parsing(parse_sheet_data)
  
  