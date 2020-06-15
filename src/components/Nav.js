import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../stylesheets/home.css'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                <ul className="topnav">
                  <li>
                      <Link to='/'>Home</Link>  
                  </li>
                  <li>
                <Link to='/about'>About</Link>
                  </li> 
                
                 <li>
                <Link to='/discover'>Discover</Link>
                </li>
                </ul>
                </nav>
            </div>
        )
    }
}