import React, { Component } from 'react'

export default class FormComp extends Component {
    constructor(){
        super();
        this.state={
            studentId:"",
            studentName:"",
            pass:"",
            gender:"",
            age:0,
            address:""
        };
    };
    
    handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        
        this.setState({
                [name]: value,
                //dynamic key name
        });
    };

    handleSubmit=(e)=>{
            //ngăn hành động mặc định của trình duyệt khi submit trong form
            e.preventDefault();
            // console.log("StudentID",this.state.studentId);
            // console.log("Studentname",this.state.studentName);
            // console.log("pass",this.state.pass);
            // console.log("gender",this.state.gender);
            // console.log("age",this.state.age);
            // console.log("address",this.state.address);
            
            let formData={
                studentId:this.state.studentId,
                studentName:this.state.studentName,
                pass:this.state.pass,
                gender:this.state.gender,
                age:this.state.age,
                address:this.state.address,
            };
            console.log("formData",formData);
            // cập nhật lại state và xóa dữ liệu ô input trong form
            this.setState({
                
                    studentId:"",
                    studentName:"",
                    pass:"",
                    gender:"",
                    age:0,
                    address:""
            
            })
    }
  render() {
    return (
      <div>
        <form action="">
            <div>
                StudentId: <input type="text" name='studentId' id='studentId' value={this.state.studentId} onChange={this.handleChange} />
            </div>
            <div>
                StudentName: <input type="text" name='studentName' id='studentName' value={this.state.studentName}  onChange={this.handleChange} />
            </div>
            <div>
                Password: <input type="password" name='pass' id='pass' value={this.state.pass}   onChange={this.handleChange}/>
            </div>
            <div>
                Gender:
                Nam <input type="radio" name='gender' id='male' value={"nam"} onChange={this.handleChange}/>
                Nữ <input type="radio" name='gender' id='female' value={"Nữ"} onChange={this.handleChange}/>

            </div>

            <div>
                Age: <input type="number" name='age' id='age' value={this.state.age}   onChange={this.handleChange}/>
            </div>
            <div>
                Address: 
                <select name="address" id="address" value={this.state.address}   onChange={this.handleChange}>
                    <option value="HN">Hanoi</option>
                    <option value="HCM">TPHCM</option>
                    <option value="DN">DaNang</option>

                </select>
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
