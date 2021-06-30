import React from 'react'
import { connect} from "react-redux"
import swal from 'sweetAlert'
import { Link } from 'react-router-dom';

const Contanct = () => {
  return (
        <div className="container">
            <div className="flex row">
            <h2 className="titulo" >CONTACTANOS</h2>
            
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
                <label htmlFor="exampleFormControlInput1" className="form-label"><span><i>Ingrasá tu correo </i></span></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="card p-4 mt-2 mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><span><i>Escribinos un mensaje</i></span></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button //onClick={() => despachaAction()}
            className="btn btn-primary w-25"
            onClick={
                ()=>{ 
                  swal({
                    title: "Enviando correo",
                    text: 'Mensaje enviado con éxito',
                    icon: 'info',
                   timer: '2000'
                  })
                }
              }
             > Enviar </button>
            </div> 
        </div>
   )
}

export const ConnectedContact = connect(state => state) (Contanct)


