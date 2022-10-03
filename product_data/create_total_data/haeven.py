# 찾아야할 데이터 --> 상품명, 규격, 가격, 상품정보(속성)
import re
import string
import openpyxl

column = string.ascii_uppercase
pattern = '[B-Z]'
pattern2 = "(\w)"
name = ['상품명', '제품명', '품명', ]  # '품명'이 들어가는지 확인
# pattern = re.findall('[B-Z]', '$A$1:$L$85')




load_wb = openpyxl.load_workbook('/Users/antoliny/intelligent_owl_givenrat/product_data/excel_files/cjfreshway 10월 공산품 데이터.xlsx', data_only=True)
# 해당 엑셀파일에 있는 시트들 가져오기
wb_sheets = list(load_wb._sheets)

# for sheet_name in wb_sheets:
#   print(type(load_wb[sheet_name.title]))

sheet = load_wb['2022년 신상품']
# print_area속성을 통하면 해당 시트의 최대 행/열 값을 알 수 있음
sheet_range = sheet.print_area[0]
max_column = re.findall(pattern, sheet_range)

position = column.find(''.join(max_column))

sheet_column_range = column[:position+1]


#ex [A1:C3]
sheet_range = sheet_range.replace('$', '')
all_data = sheet[sheet_range]
for row in range(1, 10):
  for column in sheet_column_range:
    if(sheet[f'{column}{row}'].value == '상품명' ):
      print(f'{column}{row}')
      break

