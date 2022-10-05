import os
import openpyxl
import xlrd

try:
  load_wb = openpyxl.load_workbook('/Users/antoliny/intelligent_owl_givenrat/product_data/excel_files/호남푸드 10월 공산품 데이터.xlsx')
except OSError:
  load_wb = xlrd.open_workbook('/Users/antoliny/intelligent_owl_givenrat/product_data/excel_files/호남푸드 10월 공산품 데이터.xlsx')
  print(load_wb)

