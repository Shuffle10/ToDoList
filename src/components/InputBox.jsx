function Inputbox({handleAdd}){
 return(
    <div className="input-section">
        <input className="todo-box" type="text" name="toDo" id="toDo" placeholder="Enter your to-do task"/>
        <button className="button" onClick={()=>handleAdd()}>Add</button>
    </div>
 )
}


export default Inputbox;