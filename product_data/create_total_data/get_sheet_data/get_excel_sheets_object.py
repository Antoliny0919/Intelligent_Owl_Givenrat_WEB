from collections.abc import MutableSequence
from pyclbr import Function
import openpyxl


def get_sheet_data() -> Function:
  sheets_data = []
  
  def sheet_max_row_col(workbook: openpyxl, name: str) -> MutableSequence:
    sheets = workbook.sheetnames
    company_name = name.split(' ')[0]
    
    # 해당 엑셀파일의 시트들을 반복 접근
    for sheet in sheets:
      sheet_object = workbook[sheet]
      
      # 시트들의 유효범위를 파악(데이터가 있는 행열)
      try:
        sheet_range = ''.join(sheet_object.print_area)
        range = sheet_range.replace('$', '')
        
        # 파싱한 객체, 해당 객체의 데이터 행,열 범위, 회사이름
        sheets_data.append((sheet_object, range, company_name))

      # 해당 시트데이터가 없는 경우(빈 시트) -> TypeError
      except TypeError:
        continue
    
    return sheets_data
  
  return sheet_max_row_col