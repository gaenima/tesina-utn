import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations';
import Footer from './Footer'

const BudgetD = ({
  id,
    budget,  
    setBudget,
   
    
})=>(
    
    <div className="container">
     <div className="card p-3 col-3" >
        <h3> Modificar monoto inicial</h3>
        <br/>
      <div className="dolar">
          <span className="dolar">$$$ </span>
          <input type="number" onChange={setBudget}value={ budget.amountInitial} placeholder="$" 
        className="form-control form-control"/>
      </div> 
           <br/>
           <div>
        <Link to="/budgetList">
            <button className="btn btn-primary mt-2" >Listo</button>
        </Link>
        </div>
        </div>
        <br/>
        <br/>   
       <Footer />
    </div>
);
const mapStateToProps =(state, ownProps)=> {
    let id = ownProps.match.params.id;
    let budget = state.budgets.find(budget=> budget.id === id);

    return {
        id,
        budget,
    }
};
const mapDispatchToProps =(dispatch, ownProps)=>{
    const id= ownProps.match.params.id;
    return{
      
        setBudget(e){
            dispatch(mutations.setBudget(id, e.target.value));
        }
    }
};
export const ConnectBudgetD = connect(mapStateToProps, mapDispatchToProps)(BudgetD);
