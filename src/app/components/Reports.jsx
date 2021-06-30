import React from "react";
import { connect } from "react-redux";
import { ConnectRepoBar } from "./ReportBarChart";
import { ConnectRepoDona } from './ReportDonaChart';
import { ConnectRepoBarra} from './ReportPieChart'
import { Link } from 'react-router-dom';


let arregloR = [];
export const Reports = () => (
    //
<div className="container">
<div className="flex row">
    <h2 className="titulo" >REPORTES</h2>
    
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
<div className="card p-4 mt-2">
    
    <br/>
    <ConnectRepoBar />
    
    <br/> 
    <br/>
    <br/>
   
    <ConnectRepoDona />
    <br/> 
    <br/>
    <br/>

    <ConnectRepoBarra />    
        <br/>
        <br/>
 </div> 
     
</div>
)
export const ConnectedReports = connect(state => state) (Reports)
 // export default  Reports

