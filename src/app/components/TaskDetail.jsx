import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as mutations from "../store/mutations";
import swal from 'sweetalert'
//import Calendar from './Calendar'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'


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
       <button type="button" className="btn btn-outline-secondary w-25 ml-auto"
            onClick={
              ()=>{ 
                swal({
                  title: "Modificar actividad",
                  text: 'Se puede cambiar el nombre, la prioridad y el estado de esta actividad. El botón "Listo" guarda los cambios y vuelve al listado',
                  icon: 'info',
                  timer: '10000'
                })
              }
            }
       >
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
</svg>
</button>
<div className="flex">
        <div className="card col-6 p-2 mb-4 mt-2">
        <div> 
        <br/>
                <input onChange={setTaskName} value={task.name}
                className="form-control form-control "/>
        </div>
        <br/>
      <div>
     <span><i>Modificar prioridad: </i></span>
         <button type="button" className="btn btn-outline-success " onClick={()=>setTaskCompletition(id, !isComplete)}>{isComplete ? `Importante` : `Opcional`}</button>
      </div>
 
        <br/>
     <div className="btn-group-m" role="group" aria-label="Button group with nested dropdown" >
     <span><i>Estado: </i></span>
        <select onChange={setTaskGroup} value={task.group}
        type="button" className="btn btn-success"
        >
        {groups.map(group => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
         
        ))}
        </select>
        </div>
        </div>
        <div className="card col-6 p-2 pb-3 pl-3 mb-4 mt-2">
        <div className="w-50">
            <CalendarComponent 
            isMultiSelection={true}
            >

            </CalendarComponent>
        </div>
        </div>
      
        {/* <span className="rigth"><i>Fecha </i></span> */}
        
        
        <br/>
     </div>
      <br/>
      <div>
        <Link to="/dashboard">
        <button className="btn btn-primary mt-2" >Listo</button>
         </Link>
         
         <Link to="/dashboard">
        <button className="btn btn btn-warning mt-2" 
        onClick={
          ()=>{ 
            swal({
              title: "Eliminar",
              text: '¿Seguro que desea eliminar esta actividad?',
              icon: 'warning',
              buttons: ['Cancelar', 'Confirmar'],
            }).then(response=>{
              if(response){
                { deleteTask(id) }
                swal({
                  text: 'Actividad eliminada con éxito',
                  icon: 'success',
                  timer:'2000'

                })
              }
            })             
         }
        }>Borrar</button> 
        </Link>
        <button  className="btn btn-dark mt-2"
          onClick={
            ()=>{ 
              swal({
                title: "Google Calendar",
                text: '¿Desea sincronizar con el calendario de Google?',
                icon: 'warning',
                buttons: ['Cancelar', 'Confirmar'],
              }).then(response=>{
                if(response){
                  { vincular() }
                  swal({
                    text: 'Ahora verás esta actividad en calendario de Google',
                    icon: 'success',
                    timer:'2000'
  
                  })
                }
              })             
           }
          }
        >Calendario</button>
      </div>
      <br/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
     
    </div>
);
   const vincular = () => {
     <Link to="#"></Link>
   }  
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
