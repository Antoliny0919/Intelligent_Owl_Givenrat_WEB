import TableHead from "./TableHead";
import TableBody from "./TableBody";
import '../css/TableBase.css';

export default function TableBase({ items, nextData, readMoreFunc }) {

  return (
    <div id="table-area">
      <div id="table-block">
      <TableHead></TableHead>
      <TableBody
      items={items}
      nextData={nextData}
      readMoreFunc={readMoreFunc}
      ></TableBody>
      </div>
    </div>

  )
}