import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import Base from '../Base/Base';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';

const Students = ({ students, setStudents }) => {
  const [studId, setStudId] = useState('');
  const navigate = useNavigate();
  
  const handleDelete = async (studentId) => {

    try{
      const res = await fetch(`https://6616421ab8b8e32ffc7cdb80.mockapi.io/students/${studentId}`,{
        method:'DELETE'
      });
      const data = await res.json();
      console.log(data);
      const updatedStudents = students.filter(student => student.id !== studentId);
      setStudents(updatedStudents);
    }
    catch(error){
      console.log(error)
    }
  };

  const handleEdit = (studentId) => {
    setStudId(studentId);
    navigate(`/edit-students/${studentId}`);
  };

  return (
    <div>
      <Base title='Students Info' description='All students info will be displayed here'>
        <div className="students">
          {students.map((student, index) => (
            <Paper elevation={4} key={index} className='student-card'>
              
                <h2>{student.name}</h2>
                <p>Batch: {student.batch}</p>
                <p>Gender: {student.gender}</p>
                <p>Education: {student.education}</p>
                <div className="card-btn">
                  <Button color="secondary" onClick={() => handleEdit(student.id)}>Edit</Button>
                  
                  <Button color='error' onClick={() => handleDelete(student.id)}>Delete</Button>
                </div>
             
            </Paper>
          ))}
        </div>
      </Base>
    </div>
  );
};

export default Students;
