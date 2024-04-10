import Base from "../Base/Base";
import { useNavigate, useParams } from "react-router-dom";
import { studentValidationSchema } from "./AddStudent";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";

const EditStudent = ({ students, setStudents }) => {
  const { id } = useParams();
  const studentData = students.find((stud) => stud.id === id);

  const { values, handleChange, handleSubmit, handleBlur, errors,touched } = useFormik({
    initialValues: {
      name: studentData.name,
      batch: studentData.batch,
      gender: studentData.gender,
      education: studentData.education,
    },
    validationSchema: studentValidationSchema,
    onSubmit: (updatedStudent) => {
      console.log(updatedStudent);
      handleUpdate(updatedStudent)
    },
  });


  

  const navigate = useNavigate();

  // useEffect(() => {
    
  //   if (studentData) {
  //     values.name=studentData.name,
  //     values.batch =studentData.batch,
  //     values.gender=studentData.gender,
  //     values.education=studentData.education,
  //   }
  // }, [id, students]);

  const handleUpdate = async(updatedStudent) => {
    try{
      // const updatedStudent = {
      //   id: id,
      //   name: name,
      //   batch: batch,
      //   gender: gender,
      //   education: education,
      // };

      const response = await fetch(`https://6616421ab8b8e32ffc7cdb80.mockapi.io/students/${id}`,{
        method:'PUT',
        body:JSON.stringify(updatedStudent),
        headers:{
          "Content-type":"application/json"
        }
      });
      const data = await response.json()
      console.log(data);

      const studIndex = students.findIndex((stud) => stud.id === id);
      console.log(studIndex);

      students[studIndex] = data;
      setStudents([...students]);
      navigate("/students");

    }
    catch(error)
    {
      console.log(error)
    }
    
  };

  return (
    <Base title={"Edit Student"} description={"Fill the form to Edit student"}>
       <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h4>Add Student</h4>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            placeholder="Enter your Student Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: "50%" }}
          />
          {touched.name && errors.name ? <div style={{color:'red'}}>
           { errors.name}
          </div>:''}
          <TextField
            style={{ width: "50%" }}
            id="outlined-basic"
            label="Batch"
            variant="outlined"
            placeholder="Enter your Student Batch"
            name="batch"
            value={values.batch}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.batch && errors.batch ? <div style={{color:'red'}}>
           { errors.batch}
          </div>:''}
          <TextField
            id="outlined-basic"
            label="Gender"
            variant="outlined"
            placeholder="Enter your Student Gender"
            name="gender"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: "50%" }}
          />
          {touched.gender && errors.gender ? <div style={{color:'red'}}>
           { errors.gender}
          </div>:''}
          <TextField
            id="outlined-basic"
            label="Education"
            variant="outlined"
            placeholder="Enter your Student Education"
            name="education"
            value={values.education}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: "50%" }}
          />
          {touched.education && errors.education ? <div style={{color:'red'}}>
           { errors.education}
          </div>:''}
          <button type="submit">Update student</button>
        </div>
      </form>
    </Base>
  );
};

export default EditStudent;
