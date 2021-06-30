import React from 'react';
import { connect} from 'react-redux';
import * as mutations from '../store/mutations';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'


export const BudgetDetail = ({  budgets, name, amountInitial, amountFinal,
                                 expenses, expens, total }) => (
  <div >
        {/* <h2 >
            {name} 
            
        </h2>
        <h2> 
            {amountInitial}
        </h2>
        <h2>   {amountFinal} </h2> */}
  
   <div className="flex row">
    <h2 className="titulo" >PRESUPUESTO</h2>
    
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
   <br/>
     <div className=" card p-4 mt-2 " >
  <button type="button" className="btn btn-outline-secondary w-25 ml-auto"
  onClick={
    ()=>{ 
      swal({
        title: "Presupuesto",
        text: 'Podés modificar el monto inicial clicando en la cifra. A medida que agregues gastos se calculará el monto disponible. Éste es la diferencia entre los montos inicial y la suma de gastos.',
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
      <div className="card p-2 mt-2" >
              <h2>Monto inicial</h2>
           
          { budgets.map(budget=>(
            <Link to={`/budgetD/${budget.id}`} key={budget.id}>
         <div className="text-right" >
          $  { budget.amountInitial } 
          </div>
          </Link> 
          ))}
      </div >
      <div className="">
               
                <div className="card p-2 mt-2"> 
                  
                        <h2 >Gastos totales </h2>
                                                
                        <div className="text-right" id="gastos">
                        $  { total = expenses.reduce(function(accumulator, expens){
                            return accumulator += parseFloat(expens.amount)
                        },0)}  </div>
                        
                        <br/>
                </div>
                <div className="card p-2 mt-2">
                    <h2> Monto Disponible </h2>
                    
                    {budgets.map(budget=>(<div  key={budget.id} className="text-right" id="disponible"> 
                    $ { budget.amountInitial - total}</div>
            
                    ))}
                    
                </div>
       
        
       </div>    
       </div>

</div>         
);
// function formatnumber(number){
//     return new Intl.NumberFormat(location= "ES-MX", options={
//         style: 'currency',
//         currency: 'MXN',
//     }).format(number)
// }

const mapStateToProps = (state, ownProps)=> {
    let budgetID = ownProps.id;
    return {
        name: ownProps.name,
        id:budgetID, 
        expenses: state.expenses
        .filter(expens=>expens.bud === budgetID),

        // name: ownProps.name,
        amountInitial:ownProps.amountInitial,
    
        budgets:state.budgets
    }
}
export const ConnectedBudgetDetail = connect (mapStateToProps)(BudgetDetail);