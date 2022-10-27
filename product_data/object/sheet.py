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
    self.valid_name_col = None
    self.valid_price_col = []
    self.valid_attr_col = None
    self.valid_size_col = None
    self.valid_codenum_col = None
    self.merged_cell_checker = None


  def __str__(self) -> str:
    sheet_name = self.__class__.find_sheet_name.findall(str(self._sheet_obj))
    return f'<Sheet : {"".join(sheet_name[1:])}({self._main_brand})>'
  
  
  def __repr__(self) -> str:
    return f'sheet_obj : {self._sheet_obj}\nmain_brand : {self._main_brand}\nsub_brand : {self._sub_brand}\n\
start_row : {self._start_row}\nmax_row : {self._max_row}\nname_col : {self.valid_name_col}\nsize_col : {self.valid_size_col}\n\
price_col : {self.valid_price_col}\nattr_col : {self.valid_attr_col}\ncodenum_col : {self.valid_codenum_col}\n\n'
  
    
  def __getitem__(self, index):
    return self._sheet_obj[index]
  
  
  def valid_range(self) -> range:
    """
    시트 객체 데이터 검색시 유효한 셀들의 범위
    """
    return range(self._start_row, self._max_row + 1)
  
  
  def search_cell_value(self, col, row):
    """
    행, 열 값을 매개변수로 받아 해당 엑셀 시트의 셀값을 반환
    """
    try:
      data = self[col+str(row)].value
    except AttributeError:
      return
    return data
  
  
  def valid_keywords(self):
    """
    유효한 키워드들의 묶음을 리턴
    """
    
    return {
      "name": self.valid_name_col,
      "attribute": self.valid_attr_col,
      "price": self.valid_price_col,
      "code_number": self.valid_codenum_col
    }