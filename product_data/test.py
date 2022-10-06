import os
import openpyxl
import xlrd
import zipfile

try:
  load_wb = openpyxl.load_workbook('/Users/antoliny/intelligent_owl_givenrat/product_data/excel_files/오성food 10월 공산품 데이터 (2).xlsx')
except (OSError, zipfile.BadZipFile, IndexError):
  load_wb = xlrd.open_workbook('/Users/antoliny/intelligent_owl_givenrat/product_data/excel_files/오성food 10월 공산품 데이터 (2).xlsx')
  print(load_wb)

