import re

class Sheet():
  """
  엑셀 시트에서 공산품 데이터를 추출하기 위한 셀들 위치의 집합
  """
  find_sheet_name = re.compile(r'[\w]+[\w]')
  
  def __init__(self, sheet_obj, main_brand, max_row):
    self._sheet_obj = sheet_obj
    self._main_brand = main_brand
    self._max_row = max_row
    self._start_row = None
    self._sub_brand = None
    self.valid_name_col = []
    self.valid_price_col = []
    self.valid_attr_col = None
    self.valid_codenum_col = None


  def __str__(self) -> str:
    sheet_name = self.__class__.find_sheet_name.findall(str(self._sheet_obj))
    return f'<Sheet : {"".join(sheet_name[1:])}({self._main_brand})>'
  
  
  def __repr__(self) -> str:
    return f'sheet_obj : {self._sheet_obj}\nmain_brand : {self._main_brand}\nsub_brand : {self._sub_brand}\n\
start_row : {self._start_row}\nmax_row : {self._max_row}\nname_col : {self.valid_name_col}\n\
price_col : {self.valid_price_col}\nattr_col : {self.valid_attr_col}\ncodenum_col : {self.valid_codenum_col}\n\n'
  
  
  