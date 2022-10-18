from collections.abc import MutableSequence
import get_product_data.selector.selector as selector_data

def selector_cell(row_data: MutableSequence, name: str):
  """
  유효한 행 데이터를 받아 순회하여
  선택자에 맞는 셀 데이터의 위치를 파악
  """
  valid_cell_position = {
    "코드번호": "",
    "품명": "",
    "메인브랜드": "",
    "서브브랜드": "",
    "규격": "",
    "가격": "",
    "속성":"",
  }
  # big_brand --> 씨제이, 청정원, 오뚜기는 서브브랜드 X

  valid_cell_position["메인브랜드"] = name
    
  for data in row_data:
    if (str(data.value) in selector_data.name_selector):
      print(data, data.value)