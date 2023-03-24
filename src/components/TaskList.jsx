function Tasklist({toDos, handleCompleted, handleDelete}){
 return(
    <div className="task-container">
    {toDos.map((item)=>(
        <div className="task-item">
            <p style={{color:'#303030'}}>  {item.title} </p>
            <div className="button-container">
            <button className="button" style={{backgroundColor:'green'}} onClick={()=> handleCompleted()}> Completed! </button>
            <button className="button" style={{backgroundColor:'#ba182b'}} onClick={()=> handleDelete()}> Delete! </button>
            </div>
        </div>
    ))}

    </div>
    )
}


export default Tasklist;