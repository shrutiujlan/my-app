import React, { useState,useEffect } from "react";
import StudentService from "../services/StudentService";



function AddStudentComponent(props) {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();

  const changeFirstName = (event) => {
    setfirstName(event.target.value);
  };
  const changeLastName = (event) => {
    setlastName(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const getTitle = () => {
    if(props.match.params.id==-1){
      return <h3 className="text-center">Add Student</h3>
    }
    else{
      return <h3 className="text-center">Update Student</h3>
    }
  };
  useEffect(() => {
  //condition for  update and add
  if(props.match.params.id === '_add'){
    return
  }
  else{
    StudentService.getStudentById(props.match.params.id)
    .then((res)=> {
        let student = res.data;
        setfirstName(student.firstName);
        setlastName(student.lastName);
        setEmail(student.email);
    })
  }  
}, [props.match.params.id])

  const saveOrUpdateStudent = (e)=>{
    
    e.preventDefault();
    let student = {firstName:firstName ,lastName:lastName,email:email}
    console.log('student =>' + JSON.stringify(student));
    if(props.match.params.id === '_add'){
  
         StudentService.addStudent(student).then(res => {
          props.history.push('/students')
      })
    }
    else{
      StudentService.updateStudent(props.match.params.id,student).then(res => {
        props.history.push('/students')
    })
  }}
  
  const cancel= () => {
    props.history.push(`/add-student/${props.match.params.id}`) 
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={changeFirstName}
                  />
                  </div>
                   <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={changeLastName}
                  />
                  </div>
                   <div className="form-group">
                  <label>Email Id:</label>
                  <input
                    placeholder="Email Id"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={changeEmail}
                  /></div>
                <button className="btn btn-success" onClick={saveOrUpdateStudent}>Save</button>
                <button className="btn btn-danger" onClick={cancel} style={{marginLeft:"10px"}}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudentComponent;
