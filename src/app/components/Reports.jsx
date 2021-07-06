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
<button type="button" className="btn btn-outline-secondary w-25 ml-auto mb-2"
     onClick={
        ()=>{ 
          swal({
            title: "Reporte 1",
            text: 'En el eje X se detallan los estados de las actividades. En el eje Y se reflejan las cantidades',
            icon: 'info',
           timer: '5000'
          })
        }
      }
    >
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
</svg>
</button>
    
    <br/>
    
    <ConnectRepoBar />
    
    <br/> 
    <br/>
    <hr/>
    <button type="button" className="btn btn-outline-secondary w-25 ml-auto mb-2"
     onClick={
        ()=>{ 
          swal({
            title: "Reporte 2",
            text: 'Cada color refleja el porcentaje de actividades por estado en la dona',
            icon: 'info',
           timer: '5000'
          })
        }
      }
    >
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
</svg>
</button>
    <br/>
   
    <ConnectRepoDona />
    <br/> 
    <br/>
    <hr/>
    <button type="button" className="btn btn-outline-secondary w-25 ml-auto mb-2"
     onClick={
        ()=>{ 
          swal({
            title: "Reporte 3",
            text: 'Compara el monto disponible con los gastos totales',
            icon: 'info',
           timer: '5000'
          })
        }
      }
    >
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
</svg>
</button>
    <br/>

    <ConnectRepoBarra />    
        <br/>
        <br/>
 </div> 
     
</div>
)
export const ConnectedReports = connect(state => state) (Reports)
 // export default  Reports

