import React, { Component } from 'react'
import Header from '../Header/Header'
import Register from '../Register/Register'
import Footer from '../Footer/Footer'
export default class  extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Register></Register>
        <Footer></Footer>
      </div>
    )
  }
}
