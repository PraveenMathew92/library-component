import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import '../css/LeftNav.css';

class LeftNav extends Component {
    render(){
     return ( 
            <BrowserRouter>
                <div className="leftNav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                    </ul>
                </div>
             </BrowserRouter>
        )
    }
}

export default LeftNav;