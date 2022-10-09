import os
import openpyxl
import xlrd
import zipfile
from .get_excel_sheets_object import get_sheet_data
from collections.abc import MutableSequence


def sheet_parsing(files_list: MutableSequence, path: str) -> MutableSequence:
  for index, name in enumerate(files_list):
    
    # 엑셀파일 경로
    excel_file_path = f"{path}{name}"

    try:
      load_wb = openpyxl.load_workbook(excel_file_path, data_only=True)
      
      if (index == 0):
        xlsx_object = get_sheet_data()
        
      parse_excel_data = xlsx_object(load_wb, name)
      
    # xls 확장자인 경우 오류 --> xlrd 모듈사용
    except (OSError, zipfile.BadZipFile):
      load_wb = xlrd.open_workbook(excel_file_path)
  
  return parse_excel_data
