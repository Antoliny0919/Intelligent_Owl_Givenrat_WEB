from collections.abc import MutableSequence
from object.products_data import product_data_set
from object.sheet import Sheet


def extraction_product_data(sheet: Sheet):
  product_data_set["brand"] = sheet._main_brand
  
  for row in sheet.valid_range():
    product_data = product_data_set
    for i in sheet.valid_price_col:
      print(sheet.search_cell_value(i, row))
    # sheet[sheet.valid_name_col+str(cell)]
    # for key, value in sheet.valid_keywords().items():
    #   if (isinstance(value, MutableSequence)):
    #     for item in value:
    #       print(sheet.search_cell_value(item, row))
    #       product_data[key] = str(sheet.search_cell_value(item, row))
    #   product_data[key] = sheet.search_cell_value(value, row)

  return 




def get_product_data(sheets_data: MutableSequence):
  """
  키워드와 매치되는 각 시트당 유효한 셀들의 위치를 담은 sheets_data를 매개변수로 받음
  sheets_data를 순회하며 각 시트에 접근
  """
  products = []
  
  for sheet in sheets_data:
    extraction_product_data(sheet)