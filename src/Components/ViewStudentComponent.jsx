import React from 'react';
import { useState,useEffect } from 'react';
import StudentService from '../services/StudentService';

function ViewStudentComponent(props) {

    const [students , setStudents] = useState([]);

    useEffect(() => {
        StudentService.getStudentById(props.match.params.id)
        .then((res)=> {
            setStudents(res.data);
        })
    }, [])

    return (
        <div>
            <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>View Student Details</h3>
                <div className='card-body'>
                    <div className='row'>
                        <label style={{paddingRight:"10px"}}>Student First Name:</label>
                        <div>{students.firstName}</div>
                    </div>
                    <div className='row'>
                        <label style={{paddingRight:"10px"}}>Student Last Name:</label>
                        <div>{students.lastName}</div>
                    </div>
                    <div className='row'>
                        <label style={{paddingRight:"10px"}}>Student Email Id:</label>
                        <div>{students.email}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewStudentComponent;