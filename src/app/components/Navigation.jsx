import { connect, useStore } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { AUTHENTICATED, NOT_AUTHENTICATED, requestAuthenticateUser, SET_STATE, SET_TASK_COMPLETE, session } from "../store/mutations";

const Navigation = () => (
   <div>
  
  
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <div>
  
  <a className="navbar-brand logo"  ><img src="https://cdn3.iconfinder.com/data/icons/digital-marketing-27/64/Pencil-dollar-report-article-money-currency-512.png" className="logo"/></a>
  </div>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    {/* <span className="navbar-toggler-icon"></span> */}
  {/* </button> */} 

  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
    
    <li className="nav-item ">
      <Link to="/dashboard"  className="nav-link">
         <span>Actividades </span>   
         </Link>
      </li>
      <li className="nav-item">
      <Link to="/budgetList"  className="nav-link">
            Presupuesto  
         </Link>
      </li >
      <li className="nav-item">
      <Link to="/reports" className="nav-link" >
            Reportes 
         </Link>
      </li>
    
    </ul>
    
     <div  >
     <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
<Link to="/"> Iniciar sesión </Link>
     </div>
  </div>
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>
<Link to="/signup">Crear cuenta</Link>
  </div>
</nav>

    </div>
    
 );
 export const ConnectedNavigation = connect(state => state)(Navigation);
