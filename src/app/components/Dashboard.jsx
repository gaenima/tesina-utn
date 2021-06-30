 import React from "react";
 import { connect } from "react-redux";
 import { ConnectedTaskList } from "./TaskList";
 import { ConnectedFilter } from './Filter'
 import { Link } from 'react-router-dom';
 import { store } from "../store";
import swual from "sweetalert";
 
 export const Dashboard = ({ groups}) => (
  <div className="container">
    <div className="flex row">
    <h2 className="titulo" >ACTIVIDADES</h2>
    
         <span className=" w-auto ml-auto">
           <button className="btn btn-secondary" 
           onClick={
            ()=>{ 
              swal({
                title: "Saliendo",
                text: '¡Hasta la próxima!',
                icon: 'info',
               // buttons: ['Cancelar', 'Confirmar'],
               timer: '2000'
              })
            }
          }           
           > <Link to="/">Cerrar Sesión </Link></button>           
         </span >        
     </div>
    <br/>
    
           {/* <div className="col-small">
              <ConnectedFilter />
          </div>  */}
     
      
     {groups.map(group=>(
        <ConnectedTaskList key={group.id} id={group.id} name={group.name} 
        className="card p-4 mt-2 "/>
     ))}
 
         
         <br/>
           

     </div>
     )
  

 function mapStateToProps(state) {
   return {
  groups: state.groups,
    

   }
 }

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
