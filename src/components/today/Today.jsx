import { IoMdAddCircleOutline } from "react-icons/io";

export default function Today() {
  return (
    <div className="today">
      <h2>Today</h2>
      <div className="mainBox">
        <h2>Today</h2>
        <div className="texter">
          <IoMdAddCircleOutline className="icon"/>
          <input type="text" placeholder="Add new task"/>
        </div>
      </div>
    </div>
  );
}
