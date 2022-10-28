import re
import openpyxl
from collections.abc import MutableSequence
from .selector import selectors, big_brand
from object.sheet import Sheet


def set_data(data: openpyxl) -> str:
  """
    셀 데이터의 __str__값에서 엑셀 행열위치를 추출
    해당 행열위치 데이터만 리턴
  """
  
  find_upper_letter = re.compile(r'[\D]')
  cell_data = str(data)
  find_position = cell_data.find(".")
  row_col_position = find_upper_letter.findall(cell_data[find_position+1:-1])

  return "".join(row_col_position)


def selector_match_cell(obj:openpyxl.Workbook, row_data: MutableSequence, main_brand_name: str, max_row: str) -> Sheet:
  
  """
  유효한 행 데이터를 받아 순회하여
  선택자에 맞는 셀 데이터의 위치를 파악
  """
  find_start_row = re.compile(r'[\d]')
  
  sheet_data = Sheet(obj, main_brand_name, int(max_row))
  
  # start_row값 --> 받아온 row_data의 행값을 파악하고 해당 값에 1을 더한 값(데이터를 추출시작할 행 위치)
  row_data_value = str(row_data[0])
  find_position = row_data_value.find(".")
  sheet_data._start_row = int("".join(find_start_row.findall(row_data_value[find_position+1:-1]))) + 1
  
  # 셀 데이터와 사용자가 설정한 데이터가(selectors)맞으면 해당 셀의 위치를 valid_cell_position에 저장
  for data in row_data:
    str_data = str(data.value).replace(" ","").replace("\n","")

    for key, value in selectors.items():
      
      if (str_data in value):
        key_access = key.replace("selector", "col")
        sheet_data.merged_cell_checker = key_access
        if (key == "valid_price_selector"):
          sheet_data.__dict__[key_access].append((str_data, set_data(data)))
          break
        
        sheet_data.__dict__[key_access] = set_data(data)
        break
      
      # 품명같은 경우 합쳐진 셀들또한 유효한 값이 될 수 있음
      elif (data.__class__.__name__ == "MergedCell"):
        if (sheet_data.valid_name_col is not None):
          sheet_data.__dict__[sheet_data.merged_cell_checker] = set_data(data)
        break
        
      else:
        sheet_data.merged_cell_checker = None

  # 유효한 행 데이터가 아닐시(valid_cell_position데이터가 불충분)
  if (sheet_data.valid_price_col == []):
    return False
  
  # cj, 오뚜기, 청정원 --> 상품코드가 존재(품명 왼쪽셀)
  if (main_brand_name in big_brand):
    col = sheet_data.valid_name_col[0]
    codenum_col = chr(ord(col) - 1)
    sheet_data.valid_codenum_col = codenum_col
  
  return sheet_data
  
