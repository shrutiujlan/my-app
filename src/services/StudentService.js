import axios from "axios";

const Student_api_base_url = 'http://localhost:8080/api/students'
class StudentService  {

    getStudent(){
        return axios.get(Student_api_base_url);
    }
    addStudent(student){
        return axios.post(Student_api_base_url,student); 

    }
    getStudentById(id){
        return axios.get(Student_api_base_url +'/' + id)
    }
    updateStudent(id,student){
        return axios.put(Student_api_base_url +'/' + id,student)
    }
    deleteStudent(id){
        return axios.delete(Student_api_base_url +'/' + id)
    }
}
export default new StudentService();