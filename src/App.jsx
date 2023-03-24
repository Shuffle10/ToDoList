import { useEffect, useState } from 'react'
import Inputbox from './components/InputBox'
import Navbar from './components/Navbar'
import Tasklist from './components/TaskList'

function App() {
  
  const [toDos, setToDos] = useState((JSON.parse(localStorage.getItem("tasks"))==null)?[]:JSON.parse(localStorage.getItem("tasks")));
  const [completed, setCompleted] = useState((JSON.parse(localStorage.getItem("completed"))==null)?[]:JSON.parse(localStorage.getItem("completed")));


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



  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(toDos));
  }, [toDos]);

  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [completed]);


  function handleCompleted(id){
    let completedTask = toDos.filter((item)=>item.taskNo==id)
    setCompleted([...completed, completedTask])
    handleDelete(id)
  }

  const handleDelete = (id)=>{
    let remainingTask = toDos.filter((item)=>item.taskNo!=id)
    setToDos(remainingTask)
    console.log(localStorage.getItem("pending"))
  }


  return (
    <>
    <Navbar/>
    <Inputbox handleAdd={handleAdd}/>
    { (toDos.length>0 || completed.length>0 ) && <Tasklist toDos={toDos} completed={completed} handleCompleted={handleCompleted} handleDelete={handleDelete}/>}
    </>
  )
}

export default App
