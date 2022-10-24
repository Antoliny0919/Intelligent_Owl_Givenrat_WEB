import openpyxl
import re
from collections.abc import MutableSequence, MutableMapping
from .cell_selector.selector_cell_position import selector_match_cell
from .cell_selector.selector import name_selector


def valid_cell_extraction(sheets_data: MutableSequence) -> MutableSequence:
  """
  parameter: sheets_data --> (sheet_object, sheet_range, company_name)
  sheets_data를 언패킹하여 해당 시트객체의 범위에서 유효한 셀 위치를 찾기 위해
  find_valid_range함수 매개변수로 전달
  """
  total_data_cell = []
  
  for data in sheets_data:
    sheet_object, sheet_range, company_name = data
    total_data_cell.append(find_valid_range(sheet_object, sheet_range, company_name))
    
  return total_data_cell




  
def find_valid_range(obj: openpyxl.Workbook, range: str, name: str) -> MutableMapping:
  """
  유효한 셀 위치를 파악하는 함수
  유효범위를 순회하면서 사용자가 원하는 키워드에 맞는 셀 위치를 파악
  """
  find_max_row = re.compile(r'[\d]')
  for row_data in obj[range]:  # tuple 객체안에 A1 ~ Z1 행 데이터가 담김
    
    for data in row_data:
      # "제  품  명"처럼 글자 사이사이에 공백문자가 들어간 case가 많아서 공백정리
      cell_data = str(data.value).replace(" ", "")
      
      # 시트값들을 순회하며 제품명이 담긴 행 데이터 selector_cell 인자로 전달
      if (cell_data in name_selector):        
        max_row = "".join(find_max_row.findall(range)[1:])
        valid_range = selector_match_cell(row_data, name, max_row)
        
        if(valid_range == False):
          break
        return valid_range


