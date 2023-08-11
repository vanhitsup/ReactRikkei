// rfce
import React, { useState } from "react";

function DemoUseState() {
  //khai báo state
  const [count, setCount] = useState(0);
  //Khởi tạo handleClick ở cách 1
  // const handleClick=()=>{
  //     setCount(count+1);
  // }
  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      {/* cách 1 */}
      {/* <button onClick={handleClick}>Click</button> */}

      {/* Cách 2 */}
      <button onClick={() => setCount(count + 1)}> Click</button>
    </div>
  );
}

export default DemoUseState;
