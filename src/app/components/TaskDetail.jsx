import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as mutations from "../store/mutations";
import Footer from './Footer'

const TaskDetail = ({
  id,
  comments,
  task,
  isComplete,
  groups,

   setTaskCompletition,
    setTaskName,
    setTaskGroup,
    deleteTask
}) => (
  <div className="container" >
    <div className="card p-3 col-m5">
       <h3>Modificar actividad</h3>
        <div> 
        <br/>
                <input onChange={setTaskName} value={task.name}
                className="form-control form-control-lg"/>
        </div>
        <br/>
      <div>
     <span><i>Indicar la prioridad </i></span>
         <button type="button" className="btn btn-outline-success " onClick={()=>setTaskCompletition(id, !isComplete)}>{isComplete ? `Importante` : `Opcional`}</button>
      </div>
 
        <br/>
     <div className="btn-group-m" role="group" aria-label="Button group with nested dropdown" >
        <select onChange={setTaskGroup} value={task.group}
        type="button" className="btn btn-success"
        >
        {groups.map(group => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
         
        ))}
        </select>
        <br/>
        <br/>
        <br/>
     </div>
      <br/>
      <div>
        <Link to="/dashboard">
        <button className="btn btn-primary mt-2" >Realizado</button>
         </Link>
         
         <Link to="/dashboard">
        <button className="btn btn btn-warning mt-2" 
        onClick={
          ()=>{ if(window.confirm('¿Borrar actividad?'))  
               { deleteTask(id) }                 
         }
        }>Borrar</button> 
        </Link>

      </div>
      </div>
      <br/>
      <br/>
      <br/>
     <Footer />

    </div>
);
       
const mapStateToProps = (state, ownProps) =>
{ 
  let id = ownProps.match.params.id;
  let task = state.tasks.find(task => task.id === id);
  let groups = state.groups;
  

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
   setTaskCompletition(id, isComplete) {
      dispatch(mutations.setTaskCompletion(id, isComplete));
   },
    
     setTaskGroup(e) {
       dispatch(mutations.setTaskGroup(id, e.target.value));
     },
     setTaskName(e) {
      dispatch(mutations.setTaskName(id, e.target.value));
     },

     deleteTask(id){
       dispatch(mutations.deleteTask(id));
       console.log("eliminada", id);
     }
  }
}; 

export const ConnectTaskDetail = connect(mapStateToProps, mapDispatchToProps)(TaskDetail); 
