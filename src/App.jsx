import { useState } from 'react'
import Inputbox from './components/InputBox'
import Navbar from './components/Navbar'
import Tasklist from './components/TaskList'

function App() {

  const [toDos, setToDos] = useState(
    [
      {title:"Meeting with KP Oli", isCompleted:false},
      {title:"Deployment of todo app", isCompleted:true},
      {title:"Buy potatoes from supermarket", isCompleted:true},
      {title:"Week 5 DQ of Data Structures", isCompleted:false},
      {title:"Send email to Manoj Pandey", isCompleted:true},
    ]
  )

  const handleAdd = ()=>{
    console.log("Added")
  }

  const handleCompleted = ()=>{
    console.log("Completed")
  }

  const handleDelete = ()=>{
    console.log("Deleted")
  }


  return (
    <>
    <Navbar/>
    <Inputbox handleAdd={handleAdd}/>
    <Tasklist toDos={toDos} handleCompleted={handleCompleted} handleDelete={handleDelete}/>
    </>
  )
}

export default App
