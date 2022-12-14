import TableBodyThead from './TableBodyThead';
import TableBodyTbody from './TableBodyTbody';
import '../css/TableBody.css';

export default function TableBody({ items, nextData, readMoreFunc}) {
  return (
    <div id="table-body-area">
      <table id="table-body">
        <TableBodyThead></TableBodyThead>
        <TableBodyTbody items={items}></TableBodyTbody>
      </table>
      <div id="read-more-button-block">
        {nextData ? <a className="read-more-button" onClick={readMoreFunc}>π λ λ³΄κΈ°</a> : <p className='read-more-button' id='no-data'>λ μ΄μ λ°μ΄ν°κ° μμ΅λλ€!</p>}

      </div>
    </div>
  )
}