 import React from "react";
 import { connect } from "react-redux";
 import { ConnectedTaskList } from "./TaskList";
 import { ConnectedFilter } from './Filter'
 import { Link } from 'react-router-dom';
 import { store } from "../store";
 import { ConnectedLogout } from './Logout'
import swual from "sweetalert";
 
 export const Dashboard = ({ groups}) => (
  <div className="container">
    <div className="flex row">
    <h2 className="titulo" >ACTIVIDADES</h2>
    <div className="w-auto ml-auto">
      <ConnectedLogout />
    </div>      
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
