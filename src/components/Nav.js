import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import '../stylesheets/home.css'
import '../stylesheets/nav.css'

// export default class Nav extends Component {
//     render() {
//         return (
//             <div>
//                 <nav>
//                 <ul className="topnav">
//                   <li>
//                       <Link to='/'>Home</Link>  
//                   </li>
//                   <li>
//                 <Link to='/about'>About</Link>
//                   </li> 
                
//                  <li>
//                 <Link to='/discover'>Discover</Link>
//                 </li>
//                 </ul>
//                 </nav>
//             </div>
//         )
//     }
// }



class Nav extends Component {

    constructor(props) {
      super(props)
      this.state = {
        menu_class: '',
      }
    }
  
    setToggleTopMenuClass = () => {
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
  
  
    render = () => {
      let top_menu_class = `top-menu ${this.state.menu_class}`
      return (
          <div>
            <div className={top_menu_class} >
             {/* <p className="top-menu-lead">DISCOVER</p> */}
              <div>
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
              </div>
                    <p className="icon" onClick={this.setToggleTopMenuClass}>icon here</p>             
                     <div className='clear-fix' />
            </div>
          </div>
      )
    }
  }
  
  export default Nav;