import React, { Component } from "react";

export default class Children extends Component {
  constructor() {
    super();
    // Khởi tạo trạng thái ban đầu
    // State là trạng thái và có thể thay đổi
    this.state = {
      student: "Vanh",
      question: "Học giỏi hay có?",
      answer: " Có ",
      display: true,
    };
  }

  handleChangeState = () => {
    //để thay đổi state thì sử dụng this.setState()
    this.setState({
      answer: "Không",
    });
  };
  handleToggle=()=>{
    this.setState({
            display: !this.state.display
    });
  }
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>{this.props.titleParent}</h1>
        <p>{this.props.course}</p>
        <p>{this.props.children}</p>
        <br />
        <h1>State</h1>
        <p>{this.state.student}</p>
        <p>{this.state.question}</p>
        <p>{this.state.answer}</p>
        <button onClick={this.handleChangeState}>Change Answer</button>
        <br />
        <h1>Demo Toggle</h1>
        {this.state.display ? (
          <div>
            <p>Học React có khó không??</p>
            <p>Không</p>
            <button onClick={this.handleToggle}>Click</button>
          </div>
        ) : (
          <div>
            <p>Học React có khó không??</p>
            <p>Có</p>
            <button onClick={this.handleToggle}>Click</button>
          </div>
        )}
      </div>
    );
  }
}
