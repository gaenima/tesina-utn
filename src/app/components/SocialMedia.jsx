import React from 'react'
import { connect} from "react-redux"
import swal from 'sweetAlert'
import { Link } from 'react-router-dom';

const SocialMedia = () => {
    return (
        <div className="container">
            <div className="flex row">
            <h2 className="titulo" >Redes sociales</h2>
            
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
            <br></br>
            <div className="card p-4 mt-2">
            <div className="card p-4 mt-2  mb-3">
            <ul className="navbar-nav m-auto">
    
            <li className="nav-item flex" >
              
            <a className="nav-link" href="#"><img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-01-256.png" className="logo-social"/>
            <span className="socialAddress">3513294185</span>
            </a>
            </li> 
            <li className="nav-item flex" >
            <a className="nav-link" href="#"><img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-03-256.png" className="logo-social"/>
            <span className="socialAddress">@orgpre__</span>
            </a>
            </li>  
            <li className="nav-item flex" >
            <a className="nav-link" href="#"><img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-02-256.png" className="logo-social"/>
            <span className="socialAddress">orgpre.facebook.com</span>
            </a>
            </li> 
            <li className="nav-item flex" >
            <a className="nav-link" href="#"><img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-256.png" className="logo-social"/>
            <span className="socialAddress">OrgPre - youtube</span>
            </a>
            </li> 
            <li className="nav-item flex" >
            <a className="nav-link" href="#"><img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-05-128.png" className="logo-social"/>
            <span className="socialAddress">@orgpre_web</span>
            </a>
            </li> 
        </ul>
        
           
            </div> 
        </div>
        </div>
    )
}

export const ConnectedSocialMedia = connect(state=>state)(SocialMedia)
