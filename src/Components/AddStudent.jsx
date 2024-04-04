import React, { useState } from 'react'

const AddStudent = ({students,setStudents}) => {
    const[id,setId] = useState('');
    const[name,setName] = useState('');
    const[batch,setBatch] = useState('');
    const[gender,setGender] = useState('');
    const[education,setEducation] = useState('');

    const handleAddStudent = ()=>{
        const newStudent = {
            id:id,
            name:name,
            batch:batch,
            gender:gender,
            education:education,
        }
        console.log(newStudent);
        setStudents([...students,newStudent])
        setId('');
        setName('');
        setBatch('');
        setGender('');
        setEducation('');
    }
    
  return (
    <div className='form-group'>
        <h4>Add Student</h4>
      <input type="number" placeholder='Enter student ID' value={id} onChange={(e)=>setId(e.target.value)} required/>
      <input type="text" placeholder='Enter your Student Name' value={name} onChange={(e)=>setName(e.target.value)}required/>
      <input type="text" placeholder='Enter your Student Batch' value={batch} onChange={(e)=>setBatch(e.target.value)} required/>
      <input type="text" placeholder='Enter your Student Gender' value={gender} onChange={(e)=>setGender(e.target.value)} required/>
      <input type="text" placeholder='Enter your Student Education' value={education} onChange={(e)=>setEducation(e.target.value)} required/>
      <button onClick={handleAddStudent}>Add student</button>
    </div>
  )
}

export default AddStudent
