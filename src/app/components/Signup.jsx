import React from 'react' 
import * as mutations from '../store/mutations'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export const Signup = ({requestUserAccountCreation,authenticated}) => {
    return <div className="container">
       
        {/* <h2>
            Completa el siguiente formulario para crear una cuenta.
        </h2>
        <br></br>
        <form onSubmit={requestUserAccountCreation} method='post'>
            <label>
                <span>Usuario</span>
                <input type="text" placeholder="usuario" name="username" placeholder="Ingrese un usuario" className="form-control" />
            </label>
            <label>
                <span>Contraseña</span>
                <input type="password" placeholder="contraseña" name="password" placeholder="Ingrese una clave" className="form-control" />
            </label>
          
          {authenticated == mutations.USERNAME_RESERVED ? <p>Usuario no disponible. Elija otro usuario.</p> : null}
         
            <button type="submit" className="form-control mt-2 btn btn-primary">Crear cuenta</button>
        </form>
        <br></br>
        <h4>¿Ya tienes una cuenta?</h4>
        <h3>
         <Link to="/">Iniciar sesión</Link>
        </h3>
        <br/> */}
        <div className="card-group">
  <div className="card  col-3">
    <img src="https://cdn2.iconfinder.com/data/icons/xomo-basics/128/document-03-512.png" className="card-img-top" alt="planning icon"/>
    <div className="card-body">
      <h5 className="card-title">Organizá tus actividades</h5>
      <p className="card-text">Podrás panificar tus actividades e indicar el estado en el que se encuentran. </p>
      
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
      <h2>
            Crear una cuenta
        </h2>
        
        <form onSubmit={requestUserAccountCreation} method='post'>
            <div >
                <span>Usuario</span>
                <input type="text"  name="username" placeholder="Ingrese un usuario" className="form-control" required/>
                
            </div>
            <div>
                <span>Correo</span>
                <input type="text"  name="correo" placeholder="Ingrese un correo" className="form-control" required/>
            </div>
            <div>
                <span>Contraseña</span>
                <input type="password" name="password" placeholder="Ingrese una clave" className="form-control" required/>
            </div>
            <br/>
          
          {/* {authenticated == mutations.USERNAME_RESERVED ? <p>El usuario ya existe. Por favor elija otro nombre</p> : null} */}
         
            <button type="submit" className="form-control mt-2 btn btn-primary">Crear cuenta</button>
        </form>
       
        <h4 className="m-2">O registrate con </h4>
        <Link to="#"><img src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png" className="logo-social mb-2"/> </Link>
        <Link to="#"><img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-256.png" className="logo-social mb-2"/> </Link>
        <Link to="#"><img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-256.png" className="logo-social mb-2"/> </Link>

        <br/>
        <h4>¿Ya tienes una cuenta?</h4>
        <br/>
        <h4>
         <Link to="/" className="btn btn-outline-primary">Iniciar sesión</Link>
        </h4>
        </div>
    </div>
  </div>
</div>

</div>
};

const mapStateToProps = state => ({
    authenticated:state.session.authenticated
});

const mapDispatchTiProps = (dispatch) => ({
    requestUserAccountCreation(e){
        e.preventDefault()
        let username = e.target[`username`].value;
        let correo = e.target[`correo`].value;
        let password = e.target[`password`].value;
        console.log("Creating new user!",username,password);
        dispatch(mutations.requestUserAccountCreation(username,correo,password));
    }
})

export const ConnectedSignup = connect(mapStateToProps, mapDispatchTiProps)(Signup);