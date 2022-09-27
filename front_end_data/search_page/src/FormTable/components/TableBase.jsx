import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function TableBase({ items, nextData, readMoreFunc }) {

  return (
    <div id="table-area">
      <TableHead></TableHead>
      <TableBody
      items={items}
      nextData={nextData}
      readMoreFunc={readMoreFunc}
      ></TableBody>
    </div>
  )
}