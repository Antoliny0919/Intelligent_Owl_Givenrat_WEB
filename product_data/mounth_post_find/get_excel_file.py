# 액셀 파일 가져오기
from find_function import rounds_post

MOUNTH = '10월'
page = ['1', '2', '3']
url = "http://school062.com/bbs/board.php?bo_table=product_01&sfl=wr_subject&stx=%EC%B4%9D&sop=and&spt=-7915&page={}"

x = rounds_post(url, MOUNTH, page)
print(x)
