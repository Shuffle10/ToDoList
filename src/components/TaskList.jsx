function Tasklist({toDos, completed, showCompleted, handleCompleted, handleDelete, handleReset, handlePendingClicked, handleCompletedClicked, handleUndo}){
 return(
    <div className="task-container">
    <div className="task-categories">
        <p onClick={()=>handlePendingClicked()}>Pending({toDos.length})</p>
        <p onClick={()=>handleCompletedClicked()}>Completed({completed.length})</p>

    </div>
    
    {(!showCompleted)?<>
    {(toDos.reverse())?.map((item)=>(
        <div className="task-item" key={item.taskNo}>
            <p style={{color:'#303030'}}>  {item.title} </p>
            <div className="button-container">
            {(item.canUndo)?
            <button className="button" style={{backgroundColor:'#3273a8'}} onClick={()=> handleUndo(item.taskNo)}> Undo! </button>
            :<>
            <button className="button" style={{backgroundColor:'green'}} onClick={()=> handleCompleted(item.taskNo)}> Completed! </button>
            <button className="button" style={{backgroundColor:'#ba182b'}} onClick={()=> handleDelete(item.taskNo, toDos)}> Delete! </button>
            </>        
            }
            </div>
        </div>
    ))}
    </>

    
    :<>{(completed.reverse())?.map((item)=>(
        <div className="task-item">
            <p style={{color:'gray'}}>  {item.title} </p>
            <div className="button-container">
            </div>
        </div>
    ))}
    </>
}



    
    <button className="button" style={{marginTop:'40px'}} onClick={()=>handleReset()}>Reset</button>

    </div>
    )
}


export default Tasklist;