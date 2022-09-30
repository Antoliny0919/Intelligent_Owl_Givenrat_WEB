import '../css/TableBodyThead.css';

export default function TableBodyThead() {
  return (
    <thead>
      <tr id="table-body-thead-area">
        <th className="thead-item-size">품명</th>
        <th className="thead-item-size">속성</th>
        <th className="thead-item-size">브랜드</th>
        <th className="thead-item-size">가격</th>
        <th className="thead-item-size">코드번호</th>
      </tr>
    </thead>
  )
}