import React from "react";
import { connect } from "react-redux";
import { ConnectRepoBar } from "./ReportBarChart";
import { ConnectRepoDona } from './ReportDonaChart';
import { ConnectRepoBarra} from './ReportPieChart'


let arregloR = [];
export const Reports = () => (
    //
<div className="container">
<h2 className="titulo">REPORTES</h2>
<br/>
<div className="card p-4 mt-2">
    
    <br/>
    <ConnectRepoBar />
    
    <br/> 
    <br/>
    <br/>
   
    <ConnectRepoDona />
    <br/> 
    <br/>
    <br/>

    <ConnectRepoBarra />    
        <br/>
        <br/>
 </div> 
     
</div>
)

  export default  Reports

