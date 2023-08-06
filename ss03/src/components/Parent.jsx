import React, { Component } from 'react'
import Children from './Children'
export default class Parent extends Component {
  render() {
    const title="Rikkei Academy";
    //Pops là thuộc tính
    // Để truyền dữ liệ từ component cha xuống component Con sẽ thông qua props
    return (
      <div>
        <Children titleParent={title} course={"ReactJS"}>
            Time: 15 buổi
        </Children>
      </div>
    )
  }
}
