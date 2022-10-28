import math
from collections.abc import MutableSequence
from object.sheet import Sheet


def extraction_product_data(sheet: Sheet) -> MutableSequence:
  """
  시트객체가 가진 특성들을 통해
  해당 시트에서 필요한 공산품 데이터를(셀값) MutableMapping형에 저장해서 each_sheet_products에 추가한뒤
  최종적으로 한 시트에 있는 모든 공산품 데이터가 담긴 each_sheet_products를 리턴
  """
  each_sheet_products = []
  
  for row in sheet.valid_range():
    product_data = {
    "name": "",
    "attribute": "",
    "brand": "",
    "price": "",
    "code_number": ""
    }
    product_data["brand"] = sheet._main_brand

    for key, value in sheet.valid_keywords().items():
      
      if (isinstance(value, MutableSequence)):
        for item in value:
          name, price_col = item
          try:
            price_value = int(sheet.search_cell_value(price_col, row))
            product_data[key] += f"{name} : {price_value:.0f}, "
          # price_value값이 None이거나 문자가 들어간 문자열일경우 int형 변환 실패
          except (ValueError, TypeError):
            product_data[key] += f"{name} : X, "
        continue
      product_data[key] = str(sheet.search_cell_value(value, row)).replace("\n", "")
      
    # no_data 셀일경우 (키워드와 관련이 없는 셀) -> 빈셀(None)
    if (product_data["name"] == "None" or product_data["attribute"] == "None"):
      continue
    each_sheet_products.append(product_data)
  return each_sheet_products




def get_product_data(sheets_data: MutableSequence) -> MutableSequence:
  """
  키워드와 매치되는 각 시트당 유효한 셀들의 위치를 담은 sheets_data를 매개변수로 받음
  sheets_data를 순회하며 각 시트에 접근
  """
  products = []
  
  for sheet in sheets_data:
    products.append(extraction_product_data(sheet))
  
  return products