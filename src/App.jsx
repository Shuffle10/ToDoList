import { useEffect, useState } from 'react'
import Inputbox from './components/InputBox'
import Navbar from './components/Navbar'
import Tasklist from './components/TaskList'

function App() {

  const [toDos, setToDos] = useState((JSON.parse(localStorage.getItem("tasks"))==null)?[]:JSON.parse(localStorage.getItem("tasks")));
  const [completed, setCompleted] = useState((JSON.parse(localStorage.getItem("completed"))==null)?[]:JSON.parse(localStorage.getItem("completed")));
  const [showCompleted, setShowCompleted] = useState(false);


  const handleAdd = ()=>{
    if(document.getElementById("toDo").value.trim().length>0){
      let newTask= {title:document.getElementById("toDo").value, taskNo: toDos.length+1}
      setToDos([...toDos, newTask]);
      document.getElementById("toDo").value = '';
    }
    else{
      alert("Invalit Input!")
      document.getElementById("toDo").value = '';
    }
  }

  const handleKeyDown = (event)=>{
    if (event.keyCode==13){
      handleAdd();
    }
  }

  const handleCompletedClicked = ()=>{
    setShowCompleted(true)
  }

  const handlePendingClicked = ()=>{
    setShowCompleted(false)
  }



  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(toDos));
  }, [toDos]);

  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [completed]);


  const handleCompleted = (id) => {
    let completedTask = toDos.find((item)=>item.taskNo==id)
    setCompleted(prev => [...prev, completedTask])
    handleDelete(id)
  }

  const handleDelete = (id)=>{
    let remainingTask = toDos.filter((item)=>item.taskNo!=id)
    setToDos(remainingTask)
  }

  const handleReset = () =>{
    setToDos([])
    setCompleted([])
  }


  return (
    <>
    <Navbar/>
    <Inputbox handleAdd={handleAdd} handleKeyDown={handleKeyDown}/>
    <Tasklist toDos={toDos} completed={completed} showCompleted={showCompleted} handleCompleted={handleCompleted} handleDelete={handleDelete} handleReset={handleReset} handleCompletedClicked={handleCompletedClicked} handlePendingClicked={handlePendingClicked}/>
    </>
  )
}

export default App
