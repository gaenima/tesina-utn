import React from "react";
import { connect } from "react-redux";
import { ConnectRepoBar } from "./ReportBarChart";
import { ConnectRepoDona } from './ReportDonaChart';
import { ConnectRepoBarra} from './ReportPieChart'
import Footer from './Footer'


let arregloR = [];
export const Reports = () => (
    //
<div>
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
  <Footer />
  
   
</div>
)

  export default  Reports

