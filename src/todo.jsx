
import React from "react";

function Todo({todo,index,del,done,undo,edit}){
    return (
        <div className="listDiv">
            
                  <li id="listdiv" style={{textDecoration:todo.stats?"line-through":"none"}}>
                
                  {todo.task} 

                  <button onClick={()=>(del(index))}>Delete</button>
                  <button onClick={()=>(done(index))}>Done</button>
                  <button onClick={()=>(undo(index))}>Undo</button>
                  <button onClick={()=>(edit(index))}>Edit</button> 

          </li>
            

        </div>
    )
}
export default React.memo(Todo);


