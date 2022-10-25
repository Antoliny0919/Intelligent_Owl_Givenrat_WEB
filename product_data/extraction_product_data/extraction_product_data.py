from collections.abc import MutableSequence, MutableMapping


def extraction_product_data(sheet: MutableMapping):
  obj = sheet["sheet_obj"]
  for i in range(sheet["start_row"], sheet["max_row"]+1):
    obj[sheet["code_num"]]
  
  return 




def get_product_data(sheets_data: MutableSequence):
  """
  키워드와 매치되는 각 시트당 유효한 셀들의 위치를 담은 sheets_data를 매개변수로 받음
  sheets_data를 순회하며 각 시트에 접근
  """
  products = []
  
  for sheet in sheets_data:
    extraction_product_data(sheet)