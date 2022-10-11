import TableHead from "./TableHead";
import TableBody from "./TableBody";
import '../css/TableBlock.css';

export default function TableBlock({ readMoreFunc, readDetailFunc, readHiddenFunc}) {

  return (
    <div id="table-area">
      <div id="table-block">
      <TableHead></TableHead>
      <TableBody
      readMoreFunc={readMoreFunc}
      readDetailFunc={readDetailFunc}
      readHiddenFunc={readHiddenFunc}
      ></TableBody>
      </div>
    </div>

  )
}