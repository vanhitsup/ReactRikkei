import React, { Component } from 'react'
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
        <footer>
        <a href>
          <div className="back-top">
            <p>Back to top</p>
          </div>
        </a>
        <div className="main-footer">
          <div className="main-footer-col">
            <p className="col-text">Get to Know Us</p>
            <ul>
              <li><a href>Careers</a></li>
              <li><a href>Blog</a></li>
              <li><a href>About Amazon</a></li>
              <li><a href>Investor Relations</a></li>
              <li><a href>Amazon Devices</a></li>
              <li><a href>Amazon Science</a></li>
            </ul>
          </div>
          <div className="main-footer-col">
            <p className="col-text">Make Money with Us</p>
            <ul>
              <li><a href>Sell products on Amazon</a></li>
              <li><a href>Sell on Amazon Business</a></li>
              <li><a href>Sell apps on Amazon</a></li>
              <li><a href>Become an Affiliate</a></li>
              <li><a href>Advertise Your Products</a></li>
              <li><a href>Self-Publish with Us</a></li>
              <li><a href>Host an Amazon Hub</a></li>
              <li><a href>See More Make Money</a></li>
            </ul>
          </div>
          <div className="main-footer-col">
            <p className="col-text">Amazon Payment Products</p>
            <ul>
              <li><a href>Amazon Business Card</a></li>
              <li><a href>Shop with Points</a></li>
              <li><a href>Reload Your Balance</a></li>
              <li><a href>Amazon Currency Converter</a></li>
            </ul>
          </div>
          <div className="main-footer-col">
            <p className="col-text">Let Us Help You</p>
            <ul>
              <li><a href>Amazon and COVID-19</a></li>
              <li><a href>Your Account</a></li>
              <li><a href>Your Orders</a></li>
              <li><a href>Shipping Rates &amp; Policies</a></li>
              <li><a href>Returns &amp; Replacements</a></li>
              <li><a href>Manage Your Content and Devices</a></li>
              <li><a href>Amazon Assistant</a></li>
              <li><a href>Help</a></li>
            </ul>
          </div>
        </div>
        <hr style={{"size":"0.1px"}} />
        <div className="copyright-footer">
          <img src="resource/image/logo.png" alt className="copyright-img" />
        </div>
      </footer>
    )
  }
}
