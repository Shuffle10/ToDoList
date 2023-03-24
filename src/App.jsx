import { useState } from 'react'
import Inputbox from './components/InputBox'
import Navbar from './components/Navbar'
import Tasklist from './components/TaskList'

function App() {

  const [toDos, setToDos] = useState(
    [
      {title:"Meeting with KP Oli",  taskNo:1},
      {title:"Deployment of todo app", taskNo:2},
      {title:"Buy potatoes from supermarket", taskNo:3},
      {title:"Week 5 DQ of Data Structures", taskNo:4},
      {title:"Send email to Manoj Pandey", taskNo:5},
    ]
  )

  const [completed, setCompleted] = useState([])

  const handleAdd = ()=>{
    console.log("Added")
  }

  const handleCompleted = (id)=>{
    let completedTask = toDos.filter((item)=>item.taskNo==id)
    setCompleted([...completed, completedTask])
    handleDelete(id);
  }

  const handleDelete = (id)=>{
    let remainingTask = toDos.filter((item)=>item.taskNo!=id)
    setToDos(remainingTask)
  }


  return (
    <>
    <Navbar/>
    <Inputbox handleAdd={handleAdd}/>
    <Tasklist toDos={toDos} completed={completed} handleCompleted={handleCompleted} handleDelete={handleDelete}/>
    </>
  )
}

export default App
