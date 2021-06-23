import React from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations";
import { Link } from "react-router-dom";

 export const TaskList = ({ tasks, name, id, createNewTask }) => (
<div >

    <div className="card p-4 mt-2 ">
      <h3 className="card-title ">{name}</h3>
      <div className="card-text">       
         {tasks.map(task=>(
            
            <Link to={`/task/${task.id}`} key={task.id}>
                <div className="card p-4 "  >{task.name}</div>
            </Link> ))}
        </div> 
        <div>        
            <button onClick={() => createNewTask(id)}
            className="btn btn-primary "
             > Nueva actividad </button>
             <button onClick={() => createNewTask(id)}
            className="btn btn-warning"
             > Borrar todo</button>
             <br/>
       </div>
    </div>


        {/* <h3 >
         {name} 
        </h3> 
        <div className="card-text">       
         {tasks.map(task=>(
            
            <Link to={`/task/${task.id}`} key={task.id}>
                <div className="card p-2"  >{task.name}</div>
            </Link> ))}
        </div> 
         <div>        
            <button onClick={() => createNewTask(id)}
            className="btn btn-primary "
             > Nueva actividad </button>
       </div>  */}
    </div>
 )

//  const mapStateToProps = (state, ownProps ) => {
//   let groupID = ownProps.id; 
//   return {
//     name: ownProps.name,
//     id: groupID,
//     tasks: state.tasks.filter((task) => 
//     task.group === groupID
                
//    )
   
//   } 
// };
const mapStateToProps = (state, {name, id})=>{
    return {
        name:name,
        tasks: state.tasks.filter(task=>task.group === id),
        id
    };
};

 const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  createNewTask(id) {
            console.log("creando nueva actividad...", id);
           dispatch(requestTaskCreation(id));
   }
   
  }
 }

 export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);
