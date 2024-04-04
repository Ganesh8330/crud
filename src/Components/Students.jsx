import React, { useState } from 'react'
import Base from '../Base/Base'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'

const Students = ({students,setStudents}) => {

  const[studId,setStudId]= useState('')
    
  const handleDelete = (studentId)=>{
    const removeStudent = students.filter(student=>(student.id!== studentId))
    console.log(removeStudent);
    setStudents(removeStudent);
  }

  return (
    <div>
      <Base title='Students info' description='All students info will displayed here'>
        <AddStudent students={students} setStudents={setStudents}/>
        <EditStudent studId={studId} students={students} setStudents={setStudents}/>
        <div className="students">
            {students.map((data,index)=>(
                <div className="student-card" key={index}>
                    <h2>{data.name}</h2>
                    <p>Batch:{data.batch}</p>
                    <p>Gender:{data.gender}</p>
                    <p>Education:{data.education}</p>
                    <div className="card-btn">
                        <button onClick={()=>setStudId(data.id)}>Edit</button>
                        <button onClick={()=>handleDelete(data.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>

      </Base>
    </div>
  )
}

export default Students
