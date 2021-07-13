import React from 'react'
import { connect} from "react-redux"
import swal from 'sweetAlert'
import { Link } from 'react-router-dom';
import { ConnectedLogout } from './Logout'

const SocialMedia = () => {
    return (
        <div className="container">
            <div className="flex row">
            <h2 className="titulo" >REDES SOCIALES</h2>
            <div className="w-auto ml-auto">
             <ConnectedLogout />
           </div> 
                 
            </div>
            <br></br>
            <div className="card p-4 mt-2">
            <button type="button" className="btn btn-outline-secondary w-25 ml-auto mb-2"
     onClick={
        ()=>{ 
          swal({
            title: "Contactanos",
            text: 'Usá nuestras redes sociales para contactarte con los desarrolladores o unirte a la comunidad OrgPre',
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
            <div className="card p-2 ">
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
