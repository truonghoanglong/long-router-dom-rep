import React, { Component } from 'react'
import Home from './Section/Home'
import Blog from './Section/Blog'
import About from './Section/About'
import Contact from './Section/Contact'
import Login from './Section/Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Home} exact/>
                <Route path="/blog" component={Blog}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>
            </section>
        )
    }
}

export default Section
