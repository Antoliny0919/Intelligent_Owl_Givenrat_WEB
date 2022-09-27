import TableBodyThead from './TableBodyThead';
import TableBodyTbody from './TableBodyTbody';
import '../css/TableBody.css';

export default function TableBody({ items, nextData, readMoreFunc }) {
  return (
    <div id="table-body-area">
      <table id="table-body">
        <TableBodyThead></TableBodyThead>
        <TableBodyTbody items={items}></TableBodyTbody>
      </table>
      <div id="read-more-button-block">
        {nextData && <a id="read-more-button" onClick={readMoreFunc}>👀 더 보기</a>}
        {/* {nextData || <h1>끝입니다</h1>} */}
      </div>
    </div>
  )
}