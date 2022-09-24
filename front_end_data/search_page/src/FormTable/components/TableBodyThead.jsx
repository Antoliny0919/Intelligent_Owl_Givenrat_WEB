import '../css/TableBodyThead.css';

export default function TableBodyThead() {
  return (
    <thead>
      <tr id="table-body-thead-area">
        <td className="thead-item-size">품명</td>
        <td className="thead-item-size">속성</td>
        <td className="thead-item-size">브랜드</td>
        <td className="thead-item-size">가격</td>
        <td className="thead-item-size">코드번호</td>
      </tr>
    </thead>
  )
}