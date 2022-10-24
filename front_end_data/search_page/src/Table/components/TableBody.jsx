import { useRecoilValue } from 'recoil';
import { page } from '../../Atom';
import TableBodyThead from './TableBodyThead';
import TableBodyTbody from './TableBodyTbody';
import '../css/TableBody.css';

export default function TableBody({ readMoreFunc, readDetailFunc, readHiddenFunc}) {
  const nextPage = useRecoilValue(page);

  return (
    <div id="table-body-area">
      <table id="table-body">
        <TableBodyThead></TableBodyThead>
        <TableBodyTbody
        readDetailFunc={readDetailFunc}
        readHiddenFunc={readHiddenFunc}
        >
        </TableBodyTbody>
      </table>
      <div id="read-more-button-block">
        {nextPage ? <a className="read-more-button" onClick={readMoreFunc}>👀 더 보기</a> : <p className='read-more-button' id='no-data'>더 이상 데이터가 없습니다!</p>}

      </div>
    </div>
  )
}