import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Mainheader from "./components/Mainheader";
import StudentLogin from "./components/StudentLogin";
import TeacherLogin from "./components/TeacherLogin";
import AdminLogin from "./components/AdminLogin";
import StudentInfo from "./components/Student-info";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainheader />}>
          <Route index element={<Home />}></Route>
          <Route path='/studentLogin' element={<StudentLogin/>}></Route>
          <Route path="/teacherLogin" element={<TeacherLogin/>}></Route>
          <Route path="/adminLogin" element={<AdminLogin/>}></Route>
          <Route path='/studentInfo' element={<StudentInfo/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
