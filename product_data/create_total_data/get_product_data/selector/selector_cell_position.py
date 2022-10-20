from collections.abc import MutableSequence
import openpyxl
import get_product_data.selector.selector as selectors
import re


def set_data(data: openpyxl):
  
  """
    셀 데이터의 __str__값에서 엑셀 행열위치를 추출
    해당 행열위치 데이터만 리턴
  """
  
  cell_data = str(data)
  find_position = cell_data.find(".")
  row_column_position = cell_data[find_position+1:-1]
  return row_column_position


def selector_cell(row_data: MutableSequence, name: str):
  
  """
  유효한 행 데이터를 받아 순회하여
  선택자에 맞는 셀 데이터의 위치를 파악
  """
  
  expressions = re.compile(r'[\w]')
  valid_cell_position = {
    "코드번호": "",
    "품명": "",
    "메인브랜드": "",
    "서브브랜드": "",
    "규격": "",
    "가격": [],
    "속성":"",
  }
  # big_brand --> 씨제이, 청정원, 오뚜기는 서브브랜드 X
  valid_cell_position["메인브랜드"] = name
  
  # 셀 데이터와 사용자가 설정한 데이터가(selectors)맞으면 해당 셀의 위치를 valid_cell_position에 저장
  for data in row_data:
    str_data = str(data.value).replace(" ","").replace("\n","")
    for key, value in selectors.selectors.items():
      if (str_data in value):
        if (key == "가격"):
          valid_cell_position[key].append(set_data(data))
          break
        valid_cell_position[key] = set_data(data)
        break

  # 유효한 행 데이터가 아닐시(valid_cell_position데이터가 불충분)
  if (valid_cell_position["가격"] == []):
    return False
  
  # cj, 오뚜기, 청정원 --> 상품코드가 존재(품명 왼쪽셀)
  if (name == 'cjfreshway' or name == '오뚜기' or name == 'daesang'):
    column, row = expressions.findall(valid_cell_position["품명"])
    codenum_column = chr(ord(column) - 1)
    valid_cell_position["코드번호"] = codenum_column + row
    
    
  
  return valid_cell_position
  
