 import React from "react";
 import { connect } from "react-redux";
 import { ConnectedTaskList } from "./TaskList";
 //import { ConnectedFilter } from './Filter'

 import { Link } from 'react-router-dom';
 

 export const Dashboard = ({ groups, tasks}) => (
  <div className="container">
    <h2 className="titulo">ACTIVIDADES</h2>
    <br/>
          {/* <div className="col-small">
              <ConnectedFilter />
          </div> 
      */}
     
     {groups.map(group=>(
        <ConnectedTaskList key={group.id} id={group.id} name={group.name} 
        className="card p-4 mt-2 "/>
     ))}
 
         
         <br/>
           
{/* 
         <p  className="col mt-2">
           <button className="btn btn-secondary my-2 my-sm-0"  ><Link to="/">Cerrar Sesión</Link></button>
             
         </p> */}
         
     </div>
     )
 function mapStateToProps(state) {
   return {
  groups: state.groups,
   }
 }
export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
