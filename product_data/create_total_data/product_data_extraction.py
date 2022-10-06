# 찾아야할 데이터 --> 상품명, 규격, 가격, 상품정보(속성)
import os
import openpyxl
import xlrd
import zipfile
from get_product_data.test import get_sheet_data
from get_product_data.monkey_patch import monkey_patch_openpyxl


# 엑셀 파일들이 들어있는 디렉토리의 이름 / 경로
EXCELS_DIR_NAME = 'excel_files'

EXCELS_DIR_PATH = f"{os.getcwd()}/{EXCELS_DIR_NAME}/"

excel_files_name = os.listdir(EXCELS_DIR_NAME)

excel_files_name.remove('.DS_Store')


if __name__ == "__main__":
  
  monkey_patch_openpyxl()
  
  for index, name in enumerate(excel_files_name):
  
    excel_file_path = f"{EXCELS_DIR_PATH}{name}"
    print(excel_file_path)
    try:
      load_wb = openpyxl.load_workbook(excel_file_path, data_only=True)
      if (index == 0):
        xlsx_object = get_sheet_data()
      xlsx_object(load_wb)
    
    
    # xls 확장자인 경우 오류 --> xlrd 모듈사용
    # list index out of range --> 오성파일
    except (OSError, zipfile.BadZipFile):
      load_wb = xlrd.open_workbook(excel_file_path)
    