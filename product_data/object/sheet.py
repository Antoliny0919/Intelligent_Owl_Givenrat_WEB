

from pickle import NONE


class Sheet():
  
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
