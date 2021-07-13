import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import swal from 'sweetalert'



const Logout = () => {
    return (
        <div>
              <span className=" w-auto ml-auto mt-4">
              <Link to="/" >
                <button className="btn btn-secondary button" 
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
                > Cerrar Sesión 
                </button>   
                </Link>        
                </span >    
        </div>
    )
}

export const ConnectedLogout = connect(state=>state) (Logout)
