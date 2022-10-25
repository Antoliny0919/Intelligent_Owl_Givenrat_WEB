import re
import openpyxl
from collections.abc import MutableSequence
from .selector import selectors
from object.sheet import Sheet


def set_data(data: openpyxl) -> str:
  
  """
    셀 데이터의 __str__값에서 엑셀 행열위치를 추출
    해당 행열위치 데이터만 리턴
  """
  
  cell_data = str(data)
  find_position = cell_data.find(".")
  row_column_position = cell_data[find_position+1:-1]
  return row_column_position


def selector_match_cell(obj:openpyxl.Workbook, row_data: MutableSequence, main_brand_name: str, max_row: str) -> Sheet:
  
  """
  유효한 행 데이터를 받아 순회하여
  선택자에 맞는 셀 데이터의 위치를 파악
  """
  
  find_max_row = re.compile(r'[\w]')
  find_start_row = re.compile(r'[\d]')
  
  sheet_data = Sheet(obj, main_brand_name, int(max_row))
  
  # 셀 데이터와 사용자가 설정한 데이터가(selectors)맞으면 해당 셀의 위치를 valid_cell_position에 저장
  for data in row_data:
    str_data = str(data.value).replace(" ","").replace("\n","")

    for key, value in selectors.items():
      if (str_data in value):
        key_access = key.replace("selector", "col")
        if (key == "valid_name_selector" or key == "valid_price_selector"):
          sheet_data.__dict__[key_access].append(set_data(data))
          break
        sheet_data.__dict__[key_access] = set_data(data)
        break
      
      # 품명같은 경우 합쳐진 셀들또한 유효한 값이 될 수 있음
      elif (data.__class__.__name__ == "MergedCell"):
        sheet_data.__dict__["valid_name_col"].append(set_data(data))
        break

  # 유효한 행 데이터가 아닐시(valid_cell_position데이터가 불충분)
  if (sheet_data.valid_price_col == []):
    return False
  
  # cj, 오뚜기, 청정원 --> 상품코드가 존재(품명 왼쪽셀)
  if (main_brand_name == 'cjfreshway' or main_brand_name == '오뚜기' or main_brand_name == 'daesang'):
    col, row = find_max_row.findall(sheet_data.valid_name_col[0])
    codenum_column = chr(ord(col) - 1)
    sheet_data.valid_codenum_col = codenum_column + row
  
  # start row값 파악 모든 값의 유효한 셀의 행위치는 동일 --> 단일 데이터인 attr의 행+1값 추출
  attr_position = find_start_row.findall(sheet_data.valid_attr_col)
  start_row = int("".join(attr_position)) + 1
  sheet_data._start_row = start_row
  
  
  return sheet_data
  
