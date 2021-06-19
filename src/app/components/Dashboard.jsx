 import React from "react";
 import { connect } from "react-redux";
 import { ConnectedTaskList } from "./TaskList";
 //import { ConnectedFilter } from './Filter'
 import Footer from './Footer'
 import { Link } from 'react-router-dom';

 export const Dashboard = ({ groups, tasks}) => (
  <div className="row-lg">

          {/* <div className="col-small">
              <ConnectedFilter />
          </div> 
      */}
     
     {groups.map(group=>(
        <ConnectedTaskList key={group.id} id={group.id} name={group.name} 
        className="col p-4 m-2"/>
     ))}
 
         
         <br/>
           
{/* 
         <p  className="col mt-2">
           <button className="btn btn-secondary my-2 my-sm-0"  ><Link to="/">Cerrar Sesión</Link></button>
             
         </p> */}
         
       
    <Footer />

     </div>
     )
 function mapStateToProps(state) {
   return {
  groups: state.groups,
   }
 }
export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
