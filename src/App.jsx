import { useEffect, useState } from 'react'
import Inputbox from './components/InputBox'
import Navbar from './components/Navbar'
import Tasklist from './components/TaskList'

function App() {

  const [timeoutId, setTimeoutId] = useState(null);
  const [toDos, setToDos] = useState((JSON.parse(localStorage.getItem("tasks"))==null)?[]:JSON.parse(localStorage.getItem("tasks")));
  const [completed, setCompleted] = useState((JSON.parse(localStorage.getItem("completed"))==null)?[]:JSON.parse(localStorage.getItem("completed")));
  const [showCompleted, setShowCompleted] = useState(false);





  const handleAdd = ()=>{
    if(document.getElementById("toDo").value.trim().length>0){
      let newTask= {title:document.getElementById("toDo").value, taskNo: ((toDos.length)+1), canUndo:false}
      setToDos(prev=>[...prev, newTask]);
      document.getElementById("toDo").value = '';
    }
    else{
      alert("Invalit Input!")
      document.getElementById("toDo").value = '';
    }
    setShowCompleted(false)
  }

  function handleCompleted(id){
    let completedTask = toDos.find((item)=>item.taskNo==id);
    updatedToDos(id, "canUndo", true);
    setTimeoutId(setTimeout(()=>{
      updatedToDos(id, "canUndo", false);
      setCompleted(prev => [...prev, completedTask])
      handleDelete(id)
    },3000))
  }

  const handleDelete = (id)=>{ 
    let updatedToDos = JSON.parse(localStorage.getItem("tasks"));
    let remainingTask = updatedToDos.filter((item)=>item.taskNo!=id)
    setToDos(remainingTask)
  }

  const updatedToDos = (id, property, value) => {
    setToDos(prev =>
      prev.map(task =>
        task.taskNo === id ? { ...task, [property]: value } : task
      )
    );
  };

  const handleUndo = (id)=>{
    clearTimeout(timeoutId)
    updatedToDos(id, "canUndo", false);
  }

  const handleReset = () =>{
    clearTimeout(timeoutId)
    setToDos([])
    setCompleted([])
    setShowCompleted(false)
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
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [toDos, completed]);




  return (
    <>
    <Navbar/>
    <Inputbox handleAdd={handleAdd} handleKeyDown={handleKeyDown}/>
    <Tasklist toDos={toDos} completed={completed} showCompleted={showCompleted}  handleCompleted={handleCompleted} handleDelete={handleDelete} handleReset={handleReset} handleCompletedClicked={handleCompletedClicked} handlePendingClicked={handlePendingClicked} handleUndo={handleUndo}/>
    </>
  )
}

export default App
