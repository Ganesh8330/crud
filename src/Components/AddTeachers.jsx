import React from 'react'

const AddTeachers = () => {

    const [teachers, setTeachers] = useState({
        id:'',
        name:'',
        subject:'',
    })

  
    


  return (
    <div>
      <form>
         
     
        <input type="text" name='id' value={id} />
        <input type="text" name='name' value={name} />
        <input type="text" name='subject' value={subject} />

      </form>
    </div>
  )
}

export default AddTeachers
