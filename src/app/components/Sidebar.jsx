import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link"> Actividades</Link>
                </li>
                <li className="nav-item">
                    <Link to="/budgetList" className="nav-link">Presupuesto</Link>
                </li>
                <li className="nav-item">
                    <Link to="/reports" className="nav-link">Reportes</Link>
                </li>
            </ul>
        </div>
    )
}

export const ConnectedSidebar = connect(state => state)(Sidebar)
