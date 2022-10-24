from collections.abc import MutableSequence, MutableMapping
import openpyxl
from .selector import selectors
import re


def set_data(data: openpyxl) -> str:
  
  """
    셀 데이터의 __str__값에서 엑셀 행열위치를 추출
    해당 행열위치 데이터만 리턴
  """
  
  cell_data = str(data)
  find_position = cell_data.find(".")
  row_column_position = cell_data[find_position+1:-1]
  return row_column_position


def selector_match_cell(row_data: MutableSequence, name: str, max_row: str) -> MutableMapping:
  
  """
  유효한 행 데이터를 받아 순회하여
  선택자에 맞는 셀 데이터의 위치를 파악
  """
  
  expressions = re.compile(r'[\w]')
  
  # 데이터 형식
  valid_cell_position = {
    "code_num": "",
    "name": [],
    "main_brand": "",
    "sub_brand": "",
    "size": "",
    "price": [],
    "attribute":"",
    "max_row": "",
  }
  
  # big_brand --> 씨제이, 청정원, 오뚜기는 서브브랜드 X
  valid_cell_position["main_brand"] = name
  valid_cell_position["max_row"] = max_row
  
  # 셀 데이터와 사용자가 설정한 데이터가(selectors)맞으면 해당 셀의 위치를 valid_cell_position에 저장
  for data in row_data:
    str_data = str(data.value).replace(" ","").replace("\n","")

    for key, value in selectors.items():
      if (str_data in value):
        if (key == "name" or key == "price"):
          valid_cell_position[key].append(set_data(data))
          break
        valid_cell_position[key] = set_data(data)
        break
      
      # 품명같은 경우 합쳐진 셀들또한 유효한 값이 될 수 있음
      elif (data.__class__.__name__ == "MergedCell"):
        valid_cell_position["name"].append(set_data(data))
        break

  # 유효한 행 데이터가 아닐시(valid_cell_position데이터가 불충분)
  if (valid_cell_position["price"] == []):
    return False
  
  # cj, 오뚜기, 청정원 --> 상품코드가 존재(품명 왼쪽셀)
  if (name == 'cjfreshway' or name == '오뚜기' or name == 'daesang'):
    col, row = expressions.findall(valid_cell_position["name"][0])
    codenum_column = chr(ord(col) - 1)
    valid_cell_position["code_num"] = codenum_column + row
    
    
  
  return valid_cell_position
  
