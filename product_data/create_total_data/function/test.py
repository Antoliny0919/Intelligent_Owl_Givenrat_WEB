import re

def get_sheet_data(workbook):
  sheets_data = []
  sheets = workbook.sheetnames
  
  def sheet_max_row_col():
    for sheet in sheets:
      sheet_object = workbook[sheet]
      try:
        sheet_range = ''.join(sheet_object.print_area)
        range = sheet_range.replace('$', '')
        
        sheets_data.append((sheet_object, range))
      # 해당 시트데이터가 없는 경우(빈 시트)
      except TypeError:
        continue
  
  return sheet_max_row_col