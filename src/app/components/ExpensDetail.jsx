import React from 'react';
import {connect} from 'react-redux';
// import { ExpensesList } from './ExpensesList';
// import { expensCreationSaga, taskCreationSaga } from '../store/sagas.mock';
import { Link } from 'react-router-dom';
// import { ExpensesList } from './ExpensesList';
import * as mutations from '../store/mutations';
import Footer from './Footer'
import swal from 'sweetalert'

const ExpensDetail = ({
    id,
    expens,
    amount,
    budgets,
    
    setExpensName,
    setExpensAmount,
    deleteExpens
    
})=>(
    <div className="card p-3 col-m5" >
        <div>
            <h3>Modificar gasto</h3>
          <div>
          <br/>
            <input  onChange={setExpensName} value={expens.name} 
            className="form-control form-control-lg"/>
            
          </div>   
          <div className="mt-3" >
             <input type="number" onChange={setExpensAmount} value= {expens.amount} 
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
        //     if(window.confirm('¿Eliminar gasto?'))
        // {deleteExpens(id)}
    }
        }>Borrar</button>
        </Link>
        
        </div>
        <br/>
        <br/>
        <br/>
      <Footer />

    </div>
);

const mapStateToProps =(state, ownProps)=> {
    let id = ownProps.match.params.id;
    let expens = state.expenses.find(expens=> expens.id === id);
    let budgets = state.budgets;

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