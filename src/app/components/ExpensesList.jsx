import React from 'react';
import { connect} from 'react-redux';
import {requestExpensCreation, deleteAllExpense } from '../store/mutations';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'

export const ExpensesList = ({ expenses, id, createNewExpens, deleteAllExpense, amount })=>(  
<div className="card p-4 mt-2 ">
<button type="button" className="btn btn-outline-secondary w-25 w-25 ml-auto"
onClick={
    ()=>{ 
      swal({
        title: "Gastos en A$R",
        text: 'Muestra el listado de gastos. Se pueden agregar cuantos se deseen. Se puede ver modificar cada gasto al dar click',
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
            <h2>
                Gastos en A$R
            </h2>
            <h2>
                {amount}
            </h2>
         
      <div>
        {expenses.map(expens=>(
            <Link to={`/expens/${expens.id}`} key={expens.id}>
            <div className="card p-2 mt-2">
                {expens.name }
                <br/>
              
                 <div className="text-right">$ { expens.amount} </div> 
            </div> 
            </Link>
        ))}
      </div>
      <div className="flex mt-2">
      <button onClick={()=>createNewExpens(id)}
      className="btn btn-primary "
      >Nuevo gasto </button>
      <button onClick={() => deleteAllExpense()}
      className="btn btn-warning"
      onClick={()=>{
        swal({
            title: "Eliminar todo",
            text: '¿Seguro que desea eliminar todos los gastos?',
            icon: 'warning',
            buttons: ['Cancelar', 'Confirmar'],
        }).then(response=>{
            if(response){
              {deleteAllExpense()}
              swal({
                text: 'Gastos eliminados con éxito',
                icon: 'success',
                timer:'2000'
              })
            }
        })
      }
    }
      >Borrar todo</button>


      </div>
     <br/>
        

    </div>        
) 
const mapStateToProps = (state, ownProps)=>{
    let budgetID = ownProps.id;
    
    return {
        name: ownProps.name,
        id:budgetID, 
        expenses: state.expenses
        .filter(expens=>expens.bud === budgetID),

       
        amountInitial:ownProps.amountInitial,
    
        budgets:state.budgets
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewExpens(id){
            console.log("Creando nuevo gasto...", id);
            dispatch(requestExpensCreation(id))
        },
        deleteAllExpense(){
            console.log('borrando todos los gastos...');
            dispatch(deleteAllExpense());
        }
    }
}
export const ConnectedExpenses = connect(mapStateToProps, mapDispatchToProps)(ExpensesList);