import React from "react";
import { connect } from "react-redux";
import { ConnectRepoBar } from "./ReportBarChart";
import { ConnectRepoDona } from './ReportDonaChart';
import { ConnectRepoBarra} from './ReportPieChart'


let arregloR = [];
export const Reports = () => (
    //
<div >
  
<div className="content">
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

