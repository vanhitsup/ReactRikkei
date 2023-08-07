import React, { Component } from 'react'

export default class  extends Component {
    //b1 Để khởi tạo thì sử dụng constructor
    // constructor(props){
    //     super(props);
    //     console.log("1. Component được khởi tạo");
    // }

    // //B2 demo componentWillMount()
    // componentWillMount(){
    //     console.log("2. Component WillMount");
    // }

    // //Khi thay đổi props
    // componentWillReceiveProps(nexProps){
    //     console.log("5. componentWillReceiveProps",nexProps);
    // }
    // shouldComponentUpdate(){
    //     console.log("6.shouldComponentUpdate");
    //     return false;
    // }
    // componentWillUpdate(){
    //     console.log("7.componentWillUpdate");
    // }
  render() {
            // console.log("3.Render");
    return <div>Đây là Life cycle</div>;
      
    }
    // componentDidMount(){
    //         console.log("4. ComponentDidMount");
    // }
  }

