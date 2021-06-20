import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/dashboard"> Actividad</Link>
                </li>
                <li>
                    <Link to="/budgetList">Presupuesto</Link>
                </li>
                <li>
                    <Link to="/reports">Reportes</Link>
                </li>
            </ul>
        </div>
    )
}

export const ConnectedSidebar = connect(state => state)(Sidebar)
