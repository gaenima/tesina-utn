import React from 'react';
import { connect} from 'react-redux';
import {ConnectedExpenses } from './ExpensesList';
import {  ConnectedBudgetDetail} from './BudgetDetail';
import Footer from './Footer'
import {ConnectFinalAmount} from './FinalAmount';

export const BudgetList = ({budgets }) => (
   <div className="">

<div>
        {budgets.map(budget=>(
             <ConnectedBudgetDetail key={budget.id} id={budget.id} name={budget.name} 
             className=""/>
        ))}
       </div>
    <div>    
       {budgets.map(budget=>(
         <ConnectedExpenses key={budget.id} id={budget.id} name={budget.name} 
         className="" />
     
       ))}
    </div>
 
    <Footer />
     
 </div>   
      
);

function mapStateToProps(state) {
    return {
        budgets: state.budgets,
        
    }
}

export const ConnectedBudget = connect (mapStateToProps)(BudgetList);