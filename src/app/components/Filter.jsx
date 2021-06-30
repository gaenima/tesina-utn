import React, { createElement } from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations";
import { Link } from "react-router-dom";
import Results from '../components/results';
import {ConnectedTaskList, TaskList} from './TaskList';
import { store } from "../store";


 export const Filter = ({tasks, name, id}) => (
   
    
     <div>
       
       <input type="text" id="filtro" onChange={(a) =>  tasks.filter(task => task.name.includes(a)).map(filterName => (
        createElement( <li>
            {filterName}
        </li>)  
       
       
    )) }/>
        
        {/* <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <form className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Buscar actividad" aria-label="Search"  id="myInput" onKeyUp={ myFunction()}/>
              <button className="btn btn-outline-success" type="button">Buscar</button>
            </form>
          </div>
        </nav>
          */}
       </div>   
      
       
     
    
       
      //  {/* <Results /> */}

 );
//  let total = 0;
// const coutTasks = (tasks) =>{
//   total = tasks.length
//   console.log('total tasks: ', total);
//   //return total;
//   for(let i=0; i> total; i++){
//     tasks.filter(task => task.name.includes('a'))
//     .map(filterName => (
//       createElement( <li>
//           {filterName}
//       </li>)  
   
//   ))}
//   console.log(filterName);
// }

//  function myFunction(){
//   let input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById("myInput");
  
//   ul = document.getElementById("myUL");


//for(let i=0; i< total; i++){
  // a=tasks.name[i].getElementByTagName("a")[0];
  // txtValue = a.textContent || a.innerText;
  // if(txtValue.toUpperCase().indexOf(filter) > -1){
  //   tasks.name[i].style.display = '';
  // } else {

  // }
  // tasks.name[i].style.display = 'none'
//}
 //}
//  let f = document.getElementById("filtro");
//  function  filtrar(f) {
//     tasks.filter(task => task.includes(f)).map(filterName => (
//         <li>
//             {filterName}
//         </li>
//     ))
// };

// const seachTask=(value)=>{
//   tasks.filter(task => task.name.includese(e)).map(filterName => (
//     createElement( <li>
//         {filterName}
//     </li>)  
//   ))
// }
 
const mapStateToProps = (state, ownProps) => {
//     //let id = ownProps.match.id;
//    let name = ownProps.match.name;
   return {
     tasks:state.tasks
    
   }
    
 
};
// const mapDispatchToProps = (dispatch,TaskList,tasks) => {
// //    return {
// //      seachTask(value){
// //        console.log('searching...', value);
// //        dispatch(seachTask(value))
// //      }
// //    }
//   return {
//     seachTask
//   }

//  }

 export const ConnectedFilter = connect(mapStateToProps)(Filter);

 //export const ConnectedFilter = (Filter)