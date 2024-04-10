import { useState,useEffect } from "react";
import "./App.css";
import Students from "./Components/Students";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AddStudent from "./Components/AddStudent";
import EditStudent from "./Components/EditStudent";
import Nopage from "./Components/Nopage";


function App() {
  const [students, setStudents] = useState([]);


    useEffect(() => {
      const getDetails = async()=>{
        const response = await fetch(`https://6616421ab8b8e32ffc7cdb80.mockapi.io/students`,
      {
        method:"GET"
      });
        const data = await response.json();
        setStudents(data);
      }
      getDetails();
    }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/students"
          element={<Students students={students} setStudents={setStudents} />}
        />
        <Route
          path="/add-students"
          element={<AddStudent students={students} setStudents={setStudents} />}
        />
        <Route
          path="/edit-students/:id"
          element={
            <EditStudent
              studId={"1"}
              students={students}
              setStudents={setStudents}
            />
          }
        />
        <Route path="*" element={<Nopage />} />
      </Routes>
      

    </>
  );
}

export default App;
