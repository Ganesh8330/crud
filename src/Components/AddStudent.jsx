import React, { useState } from "react";
import Base from "../Base/Base";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useFormik, useFormikContext } from "formik";
import TextField from "@mui/material/TextField";

export const studentValidationSchema = yup.object({
  name: yup.string().required("Please fill the name details"),
  batch: yup
    .string()
    .required("Please fill the batch details")
    .min(5, "Hey provide a correct batch here"),
  gender: yup.string().required("Please specify the gender details"),
  education: yup.string().required("Please fill the education details"),
});

const AddStudent = ({ students, setStudents }) => {
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, handleBlur, errors,touched } = useFormik({
    initialValues: {
      name: "",
      batch: "",
      gender: "",
      education: "",
    },
    validationSchema: studentValidationSchema,
    onSubmit: (newStudent) => {
      console.log(newStudent);
      handleAddStudent(newStudent)
    },
  });

  console.log(values);

  const handleAddStudent = async (newStudent) => {
    try {
      const response = await fetch(
        `https://6616421ab8b8e32ffc7cdb80.mockapi.io/students`,
        {
          method: "POST",
          body: JSON.stringify(newStudent),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setStudents([...students, data]);
      navigate("/students");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Base
      title={"Add New Student"}
      description={"Fill the form to add student"}
    >
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
          <button type="submit">Add student</button>
        </div>
      </form>
    </Base>
  );
};

export default AddStudent;
