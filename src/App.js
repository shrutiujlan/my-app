import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FooterComponent from "./Components/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import StudentListComponent from "./Components/StudentListComponent";
import AddStudentComponent from "./Components/AddStudentComponent";
import ViewStudentComponent from "./Components/ViewStudentComponent";
import "./css/App.css";


function App() {
  return (
    <Router>
      <>
        <div>
          <HeaderComponent />
        </div>
        <div className="container">
          <Switch>
            <Route path="/" exact component ={StudentListComponent}></Route>
            <Route path="/students" component ={StudentListComponent}></Route>
            <Route path="/add-student/:id" component ={AddStudentComponent}></Route>
            <Route path="/view-student/:id" component ={ViewStudentComponent}></Route>
          </Switch>
        </div>
        <div>
          <FooterComponent />
        </div>
      </>
    </Router>
  );
}

export default App;
