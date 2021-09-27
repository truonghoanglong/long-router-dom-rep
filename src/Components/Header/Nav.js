import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export class Nav extends Component {

    state={
        toggle:false,
    }

    menuToggle = () =>{
        this.setState({ 
            toggle:!this.state.toggle
        })
    }
    render() {
        const {toggle} = this.state
        return (
            <div>
                <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login / Register</Link></li>
                        <li className="close" onClick={this.menuToggle} >X</li>
                </ul>
                <div className="menu" onClick={this.menuToggle}>Menu</div>
            </div>
        )
    }
}

export default Nav
