import React, { Component } from 'react'
// import LifeCycle from './components/LifeCycle'
import FormComp from './components/FormComp'

export default class App extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     name:"Rikkei",
  //   }
  // }
  // handleChangeProps=()=>{
  //   this.setState({
  //     name:"Học viện CNTTS"
  //   })
  // }
  render() {
    return (
      <div>
        {/* <LifeCycle title={this.state.name}></LifeCycle>
        <button onClick={this.handleChangeProps}> Chan props</button> */}
        <FormComp></FormComp>
      </div>
    )
  }
}
