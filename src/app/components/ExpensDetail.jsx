import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations';
import swal from 'sweetalert'

const ExpensDetail = ({
    id,
    expens,
    
    setExpensName,
    setExpensAmount,
    deleteExpens
    
})=>(
    <div className="container" >
        <div className="card p-3 col-m5">
            <h3>Modificar gasto</h3>
            <button type="button" className="btn btn-outline-secondary w-25 w-25 ml-auto"
onClick={
    ()=>{ 
      swal({
        title: "Modificar Gasto",
        text: 'Se puede modificar la descripción y el monto. El botón "Listo" guarda cambios y regresa al listado. El botón "Borrar" elimina este gasto y se recalcula el monto disponible.' ,
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
          <br/>
          <div>
          <span><i>Descripción </i></span>
            <input name="nombre" required onChange={setExpensName} value={expens.name} 
            className="form-control form-control-lg"/>
            
          </div>   
          <div className="mt-3" >
          <br/>
          <span><i>Monto </i></span>
          <div className="flex">
          <span className="mt-3">$ </span>
             <input type="number" name="monto" required={true} onChange={setExpensAmount} value= {expens.amount} 
             className="form-control form-control-lg" />
             </div>
            </div> 
        
        <br/>
       
        <div>
        <Link to="/budgetList">
        <button className="btn btn-primary mt-2" >Listo</button>
        </Link>

        <Link to="/budgetList">
        <button className="btn btn btn-warning mt-2" 
        onClick={()=>{
            swal({
                title: "Eliminar",
                text: '¿Seguro que desea eliminar este gasto?',
                icon: 'warning',
                buttons: ['Cancelar', 'Confirmar'],
            }).then(response=>{
                if(response){
                    {deleteExpens(id)}
                  swal({
                    text: 'Gasto eliminado con éxito',
                    icon: 'success',
                    timer:'2000'
                  })
                }
            })
          }
        }>Borrar</button>
        </Link>
        
        </div>
        <br/>
      <br/>
        </div>
        <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    
     
    </div>
);
// const errors = () => {
//   let nom = e.target[`nombre`].value;
//   let mon = e.target[`monto`].value;
//   if(mon == ''){
//     return 'Monto requerido'
//   }
// }

const mapStateToProps =(state, ownProps)=> {
    let id = ownProps.match.params.id;
    let expens = state.expenses.find(expens=> expens.id === id);
   // let budgets = state.budgets;

    return {
        id,
        expens,
        //budgets,
        //  name: expens.name,
        //  amount:expens.amount
    }
};

const mapDispatchToProps =(dispatch, ownProps)=>{
    const id= ownProps.match.params.id;
    return{
        setExpensName(e){
            dispatch(mutations.setExpensName(id, e.target.value));
        },
        setExpensAmount(e){
            dispatch(mutations.setExpensAmount(id, e.target.value));
        },
        deleteExpens(id){
            dispatch(mutations.deleteExpens(id));
            console.log("borrar gasto",id);
        }
    }
};

export const ConnectExpensDetail = connect(mapStateToProps, mapDispatchToProps)(ExpensDetail);