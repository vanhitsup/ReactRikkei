import React, { Component } from 'react'
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
        <header>
        <div className="nav-bar">
          <div className="nav__left">
            <div className="box-img box">
              <a href="index.html">
                <img src="./amazon.png" alt className="header__logo-img" />
              </a>
            </div>
            <div className="nav__left-location box">
              <div className="location-icon">
                <i className="fa-solid fa-location-dot" style={{"color":"white"}} />
              </div>
              <div className="location-national">
                <p className="national-text1">Deliver to</p>
                <p className="national-text2">Vietnam</p>
              </div>
            </div>
          </div>
          <div className="nav__search">
            <select name id className="nav__search-select">
              <option value>All</option>
            </select>
            <input type="text" className="nav__search-input" />
            <button className="nav__search-btn">
              <i className="nav__search-input-icon fa-solid fa-magnifying-glass" />
            </button>
          </div>
          <div className="nav__right">
            <a href>
              <div className="language box">
                <img src="resource/image/c-e1-bb-9d-vi-e1-bb-87t-nam-qu9u-bt_c5f68d00deb342b6a14586945d4f02e4_master.webp" alt className="language-flag" />
                <p className="country-name">
                  VN
                  <i className="fa-solid fa-caret-down icon-down" />
                </p>
              </div>
            </a>
            <a href="views/login.html">
              <div className="singin box">
                <p className="text1">Hello, singin</p>
                <p className="text2">
                  Accounts &amp; Lists
                  <i className="fa-solid fa-caret-down icon-down" />
                </p>
              </div>
            </a>
            <a href>
              <div className="return-order box">
                <p className="text1">Returns</p>
                <p className="text2">&amp; Orders</p>
              </div>
            </a>
            <a href="views/cart.html">
              <div className="cart box">
                <i className="fa-solid fa-cart-shopping cart-icon" />
                <span className="cart-qty">0</span>
                <p className="text2">Cart</p>
              </div>
            </a>
          </div>
        </div>
      </header>
    )
  }
}
