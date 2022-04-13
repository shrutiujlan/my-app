import React, {useState,useEffect} from 'react';
import StudentService from '../services/StudentService';

const StudentListComponent = (props) => {

    const [students , setStudents] = useState([]);
    
    useEffect(() => {
        StudentService.getStudent()
        .then((res)=> {
            setStudents(res.data);
        })
    }, [])
    
    const addStudent = () => {
        console.log(props.history)
        props.history.push('/add-student/_add')
    }
    const updateStudent = (id) => {
        props.history.push(`/add-student/${id}`)
    }
    const deleteStudent = (id) => {
        StudentService.deleteStudent(id).then((res)=> {
            setStudents(students.filter(student => student.id !== id))
        });
    }
    const viewStudent = (id) => {
        props.history.push(`/view-student/${id}`)
    }
   
        return (
            <div>
                <h2 className="text-center">University Student List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={addStudent}>Add Student</button>
                </div>
                <div className='row'>
                    <table className="table table-striped table-bordered">
                         <thead>
                            <tr>
                                <th>Student First Name</th>
                                <th>Student Last Name</th>
                                <th>Student Email Id</th>
                                <th>Actions</th>
                            </tr>
                         </thead>
                         <tbody>
                             {
                                   students && students.map(
                                     student =>
                                     <tr key= {student.id}>
                                     <td>{student.firstName}</td>
                                     <td>{student.lastName}</td>
                                     <td>{student.email}</td>
                                     <td>
                                         <button onClick={()=>updateStudent(student.id)} className='btn btn-info'>Update</button>
                                         <button onClick={()=>deleteStudent(student.id)} className='btn btn-danger' style={{marginLeft:"10px"}}>Delete</button>
                                         <button onClick={()=>viewStudent(student.id)} className='btn btn-secondary' style={{marginLeft:"10px"}}>View</button>
                                     </td>
                                     </tr>
                                 )}
                             
                         </tbody>
                    </table>
                </div>
            </div>
        );
    }



export default StudentListComponent;