import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectLogin } from './Login';
import { ConnectedBudget } from "./BudgetList";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedTaskList } from "./TaskList";
import { ConnectedNavigation } from "./Navigation";
import { ConnectTaskDetail } from "./TaskDetail";
import { ConnectExpensDetail } from './ExpensDetail';
import { ConnectBudgetD } from './BudgetD';
import { ConnectedReports } from './Reports';
import { Redirect } from 'react-router-dom';
import { ConnectedSignup } from './Signup'
import { ConnectedSidebar } from "./Sidebar";
//import { ConnectedContact } from './Contact'
import { ConnectedSocialMedia } from './SocialMedia'
import Footer from './Footer'

const RouteGuard = Component => ({match}) => {
  //console.info("Route guard", match);
  if (!store.getState().session.authenticated) {
       return <Redirect to='/' />
  } {
    return <Component match={match} />
  }
 
}

 export const Main = () => (
    <Router history={history}>
     <Provider store={store}>
           <div>
           
                <ConnectedNavigation/> 
                <div className="flex">
                <ConnectedSidebar />
                <Route exact path="/" component={ConnectLogin}/>
                <Route exact path="/signup" component={ConnectedSignup}/>              
                <div className="content">
                <Route 
                exact 
                path="/dashboard"
                render = {RouteGuard(ConnectedDashboard)}
                //render={()=>(<ConnectedDashboard/>)}
                />
                  <Route 
                exact 
                path="/budgetList"
                render = {RouteGuard(ConnectedBudget)}
                //render={()=>(<ConnectedBudget/>)}
                />
                <Route
                    exact
                    path="/task/:id"
                    render = {RouteGuard(ConnectTaskDetail)}
                   // render={({match})=>(<ConnectTaskDetail match={match}/>)}
                    />
                    <Route
                    exact
                    path="/expens/:id"
                    render = {RouteGuard(ConnectExpensDetail)}
                    //render={({match})=>(<ConnectExpensDetail match={match}/>)}
                    />
                      <Route
                    exact
                    path="/budgetD/:id"
                    render = {RouteGuard(ConnectBudgetD)}
                    
                    />
                     <Route 
                exact 
                path="/reports"
                render = {RouteGuard(ConnectedReports)}
                //render={()=>(<ConnectedReports/>)}
                />

                 {/* <Route 
                exact 
                path="/contact"
                render = {RouteGuard(ConnectedContact)}
                //render={()=>(<ConnectedReports/>)}
                /> */}
                  <Route 
                exact 
                path="/redes"
                render = {RouteGuard(ConnectedSocialMedia)}
                //render={()=>(<ConnectedReports/>)}
                />
                </div>
                </div>
                 <Footer />
                </div>
        </Provider>
        </Router>
 )

