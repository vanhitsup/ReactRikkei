import React, { Component } from 'react'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'

export default class ViewLogin extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Login></Login>
        <Footer></Footer>
      </div>
    )
  }
}
