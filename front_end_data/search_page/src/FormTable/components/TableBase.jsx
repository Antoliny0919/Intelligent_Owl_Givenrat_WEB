import TableHead from "./TableHead";
import TableBody from "./TableBody";
import '../css/TableBase.css';

export default function TableBase({ items, nextData, readMoreFunc, readDetailFunc, readHiddenFunc, noDataImg }) {

  return (
    <div id="table-area">
      <div id="table-block">
      <TableHead></TableHead>
      <TableBody
      items={items}
      nextData={nextData}
      noDataImg={noDataImg}
      readMoreFunc={readMoreFunc}
      readDetailFunc={readDetailFunc}
      readHiddenFunc={readHiddenFunc}
      ></TableBody>
      </div>
    </div>

  )
}