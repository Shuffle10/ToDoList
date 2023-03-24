function Tasklist({toDos, completed, showCompleted, handleCompleted, handleDelete, handleReset, handlePendingClicked, handleCompletedClicked}){
 return(
    <div className="task-container">
    <div className="task-categories">
        <p onClick={()=>handlePendingClicked()}>Pending({toDos.length})</p>
        <p onClick={()=>handleCompletedClicked()}>Completed({completed.length})</p>

    </div>
    
    {(!showCompleted) && <>
    {toDos?.map((item)=>(
        <div className="task-item" key={item.taskNo}>
            <p style={{color:'#303030'}}>  {item.title} </p>
            <div className="button-container">
            <button className="button" style={{backgroundColor:'green'}} onClick={()=> handleCompleted(item.taskNo)}> Completed! </button>
            <button className="button" style={{backgroundColor:'#ba182b'}} onClick={()=> handleDelete(item.taskNo)}> Delete! </button>
            </div>
        </div>
    ))}
    </>}

    {showCompleted && <>
    {completed?.map((item)=>(
        <div className="task-item" key={item.taskNo}>
            <p style={{color:'gray'}}>  {item.title} </p>
            <div className="button-container">
            </div>
        </div>
    ))}
    </>}

    
    <button className="button" style={{marginTop:'40px'}} onClick={()=>handleReset()}>Reset</button>

    </div>
    )
}


export default Tasklist;