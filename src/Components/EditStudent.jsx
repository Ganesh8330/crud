import React, { useEffect } from 'react';
import { useState } from 'react';

const EditStudent = ({studId ,students,setStudents}) => {
    const[id,setId] = useState('');
    const[name,setName] = useState('');
    const[batch,setBatch] = useState('');
    const[gender,setGender] = useState('');
    const[education,setEducation] = useState('');

    useEffect(()=>{
        const studentData = students.find((stud)=>(stud.id===studId))
        if(studentData){
        setId(studentData.id)
        setName(studentData.name)
        setBatch(studentData.batch)
        setGender(studentData.gender)
        setEducation(studentData.education)
    }
    },[studId,students])

    const handleUpdate = ()=>{

        const studIndex = students.findIndex((stud)=>stud.id===studId)
        console.log(studIndex);

        const updatedStudent = {
            id:id,
            name:name,
            batch:batch,
            gender:gender,
            education:education,
        }
        console.log(updatedStudent);
        students[studIndex]= updatedStudent
        setStudents([...students])

    }

  return (
    <div className='form-group'>
        <h4>Update Student</h4>
      <input type="number" placeholder='Enter student ID' value={id} onChange={(e)=>setId(e.target.value)} required/>
      <input type="text" placeholder='Enter your Student Name' value={name} onChange={(e)=>setName(e.target.value)}required/>
      <input type="text" placeholder='Enter your Student Batch' value={batch} onChange={(e)=>setBatch(e.target.value)} required/>
      <input type="text" placeholder='Enter your Student Gender' value={gender} onChange={(e)=>setGender(e.target.value)} required/>
      <input type="text" placeholder='Enter your Student Education' value={education} onChange={(e)=>setEducation(e.target.value)} required/>
      <button onClick={handleUpdate}>Update student</button>
    </div>
  )
}

export default EditStudent
