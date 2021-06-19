import React from 'react' 
import * as mutations from '../store/mutations'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from './Footer'

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
  <div className="card  col-4">
    <img src="https://cdn2.iconfinder.com/data/icons/competitive-strategy-and-corporate-training/512/723_Business_list_plan_planning_task-256.png" className="card-img-top" alt="planning icon"/>
    <div className="card-body">
      <h5 className="card-title">Organizá tus actividades</h5>
      <p className="card-text">Podrás panificar tus actividades e indicar el estado en el que se encuentran. "Por hacer", "En proceso" y "Finalizado" son las fases por las que transcurre cada actividad.</p>
      
    </div>
  </div>
 
  <div className="card col-4">
    <img src="https://cdn4.iconfinder.com/data/icons/business-solid-the-capitalism/64/Money_asset_income_management-512.png" className="card-img-top" alt="budget icon"/>
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
<br/>
<Footer />
</div>
};

const mapStateToProps = state => ({
    authenticated:state.session.authenticated
});

const mapDispatchTiProps = (dispatch) => ({
    requestUserAccountCreation(e){
        e.preventDefault()
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;
        console.log("Creating new user!",username,password);
        dispatch(mutations.requestUserAccountCreation(username,password));
    }
})

export const ConnectedSignup = connect(mapStateToProps, mapDispatchTiProps)(Signup);