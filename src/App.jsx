import { useState } from 'react'
import './App.css'
import Base from './Base/Base'
import Students from './Components/Students'
import { data } from './Data/data'

function App() {
  const [students,setStudents] = useState(data)
  return (
    <>
      <Students students={students} setStudents={setStudents}/>
    </>
  )
}

export default App
