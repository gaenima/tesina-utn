import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

import swal from 'sweetalert'

export const LoginComponent = ({authenticateUser, authenticated})=>{
   
    return <div className="container" >
        
        {/* <div className="card p-3 col-4 ">
            <aside>
            <img src="https://cdn2.iconfinder.com/data/icons/free-simple-line-mix/48/20-Business_Planning-512.png"/>
           </aside>
        </div >
        <div className="card p-3 col-4 " >
        <h2>Iniciar sesión</h2>
        <form onSubmit={authenticateUser} >
            <input type="text" placeholder="Usuario" name="username"
            defaultValue="Dev" className="form-control"/>
            <input type="password" placeholder="Contraseña" name="password"
             className="form-control mt-2"/>
            {authenticated === mutations.NOT_AUTHENTICATED
            ? <p>Login incorrecto</p>
            : null
            }
            <button type="submit"
            className="form-control mt-2 btn btn-primary"
            >Entrar</button>
        </form>
        </div>
        <div className="card p-3 col-4" >
            <aside>
                <img src="https://cdn3.iconfinder.com/data/icons/finance-152/64/4-512.png"/>
            </aside>
        </div> */}
<div className=" card-group ">
  <div className="card  col-3">
    {/* <img src="https://cdn2.iconfinder.com/data/icons/competitive-strategy-and-corporate-training/512/723_Business_list_plan_planning_task-256.png" className="card-img-top" alt="planning icon"/> */}
    <img src="https://cdn2.iconfinder.com/data/icons/xomo-basics/128/document-03-512.png" className="card-img-top" alt="planning icon"/>
    <div className="card-body">
      <h5 className="card-title">Organizá tus actividades</h5>
      <p className="card-text">Podrás panificar tus actividades e indicar el estado en el que se encuentran.</p>
      
    </div>
  </div>
 
  <div className="card col-3">
    <img src="https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-16-512.png" className="card-img-top" alt="budget icon"/>
    <div className="card-body">
      <h5 className="card-title">Administrá tu presupuesto</h5>
      <p className="card-text">Podrás establecer un monto disponible y agregar los gastos que realices. </p>
      
    </div>
  </div>
  <div className="card col-4">
    <div className="card-body"> 
      <div >
        <h2>Iniciar sesión</h2>
        <br/>
        <form onSubmit={authenticateUser} >
          <div>
            <span>Usuario</span>
            <input type="text" placeholder="Usuario" name="username" 
            defaultValue="Dev" className="form-control" required/>
          </div>  
          <div>
            <span>Contraseña</span>
            <input type="password" placeholder="Contraseña" name="password" 
             className="form-control mt-2" required/>
            {authenticated === mutations.NOT_AUTHENTICATED  
             ? <p className="error-form"><em>Usuario o contraseña incorrectos</em></p>
        
            : null
           }
           </div>
            <button type="submit"
            className="form-control mt-2 btn btn-primary"
            >Iniciar sesión</button>
        </form>
        <h4 className="mt-2 mb-2">O ingresá con </h4>
        <Link to="#"><img src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png" className="logo-social mb-2"/> </Link>
        <Link to="#"><img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-256.png" className="logo-social mb-2"/> </Link>
        <Link to="#"><img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-256.png" className="logo-social mb-2"/> </Link>

        <br/>
        <br />
        <div className="flex">
        <h6 className="m-2">¿Olvidaste tu contraseña? </h6>
       <h6 className="mt-2"> <Link to="#"> Recuperala</Link> </h6>
        </div>
        <br/>
        <h4>¿No te registraste?</h4>
        <br/>
        <h4>
            <Link to="/signup" className="btn btn-outline-primary"> Crear una cuenta</Link>
        </h4>
        </div>
    </div>
  </div>
</div>

</div>

};


const mapStateToProps = ({session})=>({
    authenticated:session.authenticated
})

const mapDispatchToProps = (dispatch)=>({
    authenticateUser(e){
        e.preventDefault();
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;
        dispatch(mutations.requestAuthenticateUser(username,password));
    }
})

export const ConnectLogin = connect(mapStateToProps,mapDispatchToProps)(LoginComponent)