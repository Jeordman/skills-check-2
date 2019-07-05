import React, { Component } from 'react'
import './header.css'

class Header extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    render() {
        return(
            <nav className='navbar-holder'>
            <div className= 'navbar-text'>Shelfie</div>
            
            </nav>
        )
    }
}

export default Header