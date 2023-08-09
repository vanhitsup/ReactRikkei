import React, { Component } from 'react'
import "./Register.css";
export default class 
 extends Component {
  constructor(){
    super();
    this.state={
        userName:"",
        email:"",
        password:"",
        rePassword:"",
    };
};
handleChange=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  
  this.setState({
          [name]: value,
  });
};

handleSubmit=(e)=>{
  e.preventDefault();
  
  let formData={
      userName:this.state.userName,
      email:this.state.email,
      password:this.state.password,
      rePassword:this.state.rePassword,
   
  };
  console.log("formData",formData);
  // cập nhật lại state và xóa dữ liệu ô input trong form
  this.setState({
      
    userName:"",
    email:"",
    password:"",
    rePassword:"",
  })
}
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
    <h1>Create account</h1>
    <div className="form" id="form">
      <form action="">
        <p>User name </p><span id="userNameErr" className="error" />
        <input type="text" placeholder="Enter username." id="username" name="userName"  value={this.state.userName} onChange={this.handleChange}/>
        <p> Email</p> <span id="emailErr" className="error" />
        <input type="text" placeholder="Enter your email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        <p>Password </p><span id="passErr" className="error" />
        <input type="password" placeholder="At least 6 characters" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <p>Re-enter password</p><span id="rePassErr" className="error" />
        <input type="password" id="re-password" name="rePassword" placeholder="Confirm password" value={this.state.rePassword} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit} className="submit-btn">Continue</button>
      </form>
    </div>
    <p className="privacy">By creating an account, you agree to Amazon's <a href className="pri-a">Conditions of Use</a> and <a href className="pri-a">Privacy Notice</a>.</p>
    <hr className="card-hr" /> 
    <p className="privacy" style={{"font-size":"13px"}}>Already have an account? <a href="/views/login.html" className="pri-a">Sign in</a></p>
    <p className="privacy" style={{"font-size":"13px"}}>Buying for work? <a href className="pri-a">Create a free business account</a></p>
  </div>
  <hr />
</section>
      </div>
    )
  }
}
