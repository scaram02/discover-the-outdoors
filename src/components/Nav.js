import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import '../stylesheets/home.css'
import '../stylesheets/nav.css'

class Nav extends Component {

    constructor(props) {
      super(props)
      this.state = {
        menu_class: '',
      }
    }
  

    // set the class, not boolean bc important for css
    setNavToggle = () => {
      if (this.state.menu_class === '') {
        this.setState({
          menu_class: 'toggled',
        })
      } else {
        this.setState({
          menu_class: '',
        })
      }
    }

// closes when you click link to new page
    closeNavbar = () => {
        this.setState({
            menu_class: ""
        })
    }
  
  
    render = () => {
      let top_menu_class = `top-menu ${this.state.menu_class}`
      return (
          <div>
            <div className={top_menu_class} >
              <div>
              <ul className="topnav">
                  <li>
                      <Link 
                      to='/'
                      onClick={this.closeNavbar}
                      >Home</Link>  
                  </li>
                  <li>
                <Link to='/about'
                onClick={this.closeNavbar}
                >About</Link>
                  </li> 
                
                 <li>
                <Link to='/discover'
                onClick={this.closeNavbar}>Discover</Link>
                </li>

                <li>
                <Link to='/map'
                onClick={this.closeNavbar}>Map</Link>
                </li>
                </ul>
              </div>
                    <p className="icon" onClick={this.setNavToggle}>icon hereeeeee</p>             
                     <div className='clear-fix' />
            </div>
          </div>
      )
    }
  }
  
  export default Nav;