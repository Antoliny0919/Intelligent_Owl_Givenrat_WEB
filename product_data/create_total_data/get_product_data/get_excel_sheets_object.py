from collections.abc import MutableSequence
from pyclbr import Function
import openpyxl


def get_sheet_data() -> Function:
  sheets_data = []
  
  def sheet_max_row_col(workbook: openpyxl, name: str) -> MutableSequence:
    sheets = workbook.sheetnames
    company_name = name.split(' ')[0]
    for sheet in sheets:
      # 해당 엑셀파일의 시트들을 반복 접근
      sheet_object = workbook[sheet]
      try:
        sheet_range = ''.join(sheet_object.print_area)
        range = sheet_range.replace('$', '')
        
        # 파싱한 객체, 해당 객체의 행,열 범위, 회사이름
        sheets_data.append((sheet_object, range, company_name))
        
      # 해당 시트데이터가 없는 경우(빈 시트)
      except TypeError:
        continue
    
    return sheets_data
  
  return sheet_max_row_col