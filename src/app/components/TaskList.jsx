import React from "react";
import { connect } from "react-redux";
import { requestTaskCreation, deleteByGroup } from "../store/mutations";
import { Link } from "react-router-dom";
import swal from 'sweetalert'

 export const TaskList = ({ tasks, name, id, createNewTask, deleteByGroup }) => (
<div >

    <div className="card p-4 mt-2">
    <button type="button" className="btn btn-outline-secondary w-25 ml-auto"
     onClick={
        ()=>{ 
          swal({
            title: "Por hacer, En proceso, Finalizado",
            text: 'Son los estado por los que puede pasar cada actividad para indicar su evolución. Se pueden agregas las actividades deseadas en cada estado. El botón "Eliminar todo" borra el listado correspondiente',
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
      <h2 className="card-title ">{name}</h2>
      <div className="card-text" >       
         {tasks.map(task=>(           
            <Link to={`/task/${task.id}`} key={task.id}>
                <div className="card p-4 " id="myUL" >{task.name}</div>
            </Link> 
            
            ))}
        </div> 
        <div className="flex mt-2">        
            <button onClick={() => createNewTask(id)}
            className="btn btn-primary "
             > Nueva actividad </button>
             <button onClick={() => deleteByGroup(id)}
            className="btn btn-warning"
            onClick={
              ()=>{ 
                swal({
                  title: "Eliminar esta lista",
                  text: '¿Seguro que desea eliminar esta lista de actividades?',
                  icon: 'warning',
                  buttons: ['Cancelar', 'Confirmar'],
                }).then(response=>{
                  if(response){
                    { deleteByGroup(id) }
                    swal({
                      text: 'Actividades eliminadas con éxito',
                      icon: 'success',
                      timer:'2000'
    
                    })
                  }
                })             
             }
            }
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
const mapStateToProps = (state, {name, id, group})=>{
    return {
        name:name,
        tasks: state.tasks.filter(task=>task.group === id),
        id,
        
    };
    
};

 const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  createNewTask(id) {
            console.log("creando nueva actividad...", id);
           dispatch(requestTaskCreation(id));
   },
   deleteByGroup(id){
     console.log("borrando tasks del grupo", id);
     dispatch(deleteByGroup(id));
   }

  }
 }

 export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);
