import React, { Component } from 'react'
import "./Login.css";
export default class Login extends Component {
  render() {
    return (
      <div>
        <section>
  <a href="/index.html">
    <div className="logo">
      <img src="/resource/image/amazon.png" alt />
    </div>
  </a>
  <div className="card">
    <h1>Sign in</h1>
    <div className="form" id="form">
      <form action>
        <p>Username</p><span id="userNameErr" className="error" />
        <input type="text" placeholder="Nhập username." id="username" name="username" />
        <p>Password</p><span id="passWordErr" className="error" />
        <input type="password" placeholder="**********" id="password" name="password" /> 
        <button className="submit-btn">Continue</button>
      </form>
    </div>
    <p className="privacy">By continuing, you agree to Amazon's <a href className="pri-a">Conditions of Use</a> and <a href className="pri-a">Privacy Notice</a>.</p>
    <a href className="need-help">Need help?</a>
  </div>
  <hr />
  <a href="/views/register.html" className="create-form">
    Create your Amazon account
  </a>
</section>
      </div>
    )
  }
}
