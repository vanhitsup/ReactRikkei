import React from "react";
import { useSearchParams } from "react-router-dom";

function Course() {
  const [searchParam, setSearchParam] = useSearchParams();
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Khóa học</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Java</td>
            <td>100</td>
            <td>
              <button
                onClick={() => setSearchParam({ Course: "Java", Price: 100 })}
              >
                Chi tiết
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>JS</td>
            <td>200</td>
            <td>
              <button
                onClick={() => setSearchParam({ Course: "JS", Price: 200 })}
              >
                Chi tiết
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h1>Chi tiết khóa học</h1>
      <p>Khóa Học :{searchParam.get("Course")}</p>
      <p>Giá tiền: {searchParam.get("Price")}</p>
    </div>
  );
}

export default Course;
