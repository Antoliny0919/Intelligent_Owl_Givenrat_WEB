import openpyxl
from collections.abc import MutableSequence, MutableMapping
from pyclbr import Function
import get_product_data.selector.selector_cell_position as find_position
import get_product_data.selector.selector as selector_data


def valid_cell_parsing(sheets_data: MutableSequence) -> MutableSequence:
  """
  parameter: sheets_data --> (sheet_object, sheet_range, company_name)
  sheets_data를 언패킹하여 해당 시트객체의 범위에서 유효한 셀 위치를 찾기 위해
  find_valid_range함수 매개변수로 전달
  """
  total_data_cell = []
  
  for data in sheets_data:
    sheet_object, sheet_range, company_name = data
    total_data_cell.append(find_valid_range(sheet_object, sheet_range, company_name))
    
  return total_data_cell




  
def find_valid_range(obj: openpyxl.Workbook, range: str, name: str) -> MutableMapping:
  """
  유효한 셀 위치를 파악하는 함수
  유효범위를 순회하면서 사용자가 원하는 키워드에 맞는 셀 위치를 파악
  return: MutableMapping형 {키워드: 셀 위치}
  """
  
  for row_data in obj[range]:  # tuple 객체안에 A1 ~ Z1 행 데이터가 담김
    
    for data in row_data:
      # "제  품  명"처럼 글자 사이사이에 공백문자가 들어간 case가 많아서 공백정리
      cell_data = str(data.value).replace(" ", "")
      
      # 시트값들을 순회하며 제품명이 담긴 행 데이터 selector_cell 인자로 전달
      if (cell_data in selector_data.name_selector):
        
        valid_range = find_position.selector_cell(row_data, name)
        if(valid_range == False):
          break
        return valid_range










# 브랜드가 상단에 위치하지 않을 수도 있음 (브랜드) 브랜드가 시트에 존재하기도 함 --> 시트부터 체크하는게 좋을듯(가장 간편)
# 브랜드 통합인 회사도 있음 --> 브랜드명이 없어도됨 --> 동원, cj, 청정원
# 한 시트에 두개의 브랜드가 존재하기도 함
# 돈가상사는 브랜드 파싱이 힘듬
# 피아골미선씨도 불가능
# 마리요리도 불가능
# 세호 재호물산, 새우튀김 불가능
# 세호 맛본 불가능
# 해오름 닭꼬치는 단가가 여려개임(일반단가, 1등급, 1등급친환경) --> 일반단가로 설정
# 웰담 닭세트 불가(10월 웰담 닭세트제품)
# 유림에프에스 하늘구름 불가능
# 유림에프에스 순수지기 불가능
# 유림에프에스 스마일푸드 불가능
# 용봉 백미담 불가능(엑셀 파일이 안열림)
# brand_selector = ['허쉬', '요리와유', '소예푸드', '코주부', '문옥례', '산들맘', '굿브랜드스쿨', '아라원', '판다스토리', '들녘식품', '화과방', '주원' \
#   '시원스쿨FOOD', 'MINIKER', '오 뗄', '마이디벨', '사세', '푸드스토리', '올바른', '한국전통식품', '착한애', '가보팜스', '명가푸드', '목우촌', '바다한줌'\
#     '노고치농원', '천지해', '신미유부', 'SRC', '마리요리', '라망피자', '도담푸드', '또앤또', '코끼리푸드', '맛본오란다', '재호물산', '맥케인', '참앤참떡' \
#       '매일유업', '삼립샤니', '던킨도너츠', '해두른어묵', '해오름', '에이치쿡', '씨엔에스푸드', '올그루만두', '보리가득', '이룸리테일', '푸딩스쿨', '굿프렌즈', 
#       '자연웰', '사자표소스', '웰담', '싱싱플러스', '우리밀로', '천일식품', '루토사', '초록푸드', '급식대장', '지산푸드', '휴먼앤푸드', '쿠엔츠버킷', '제임스덕'\
#         , '순수지기', '이가자연면', '돈지천', '초록나무', '빛고을청아']


# attr_selector = ['상품정보', '식품설명', '함량', '성분', '원재료 및 함량', '성분 및 함량', '비고', '비고란', '제품특징 및 원재료함량', '제품 특이사항'\
#   , '제품성분', '주요성분', '제품함량', '성분 및 특징', '성분 및 특이사항', '세부품명', '특징', '제품함량&특이사항', '특이사항', '개당중량', '성분표시', '성분 함량, 알러지'\
#     , '제품 및 알러지유발성분', '주요성분', '제 품 주 요 성 분', '원재료 함량', '인증 및 특허', '주요 사항', '원재료명 및 함량', '함량 및 제원']

# code_num_selector = ['상품코드']