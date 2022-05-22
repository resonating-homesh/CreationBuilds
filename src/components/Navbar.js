import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../css/Navbar.css';

class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className='nav'>
                <div className='logo'>

                    <Link to="/">
                        <img src="logo-3.png" alt="logo"/>
                    </Link>

                </div>
                <div className='menuIcon' onClick={this.handleClick}>
                    <i> {this.state.clicked ? <FaTimes /> : <FaBars />} </i>
                </div>
                <div className='links'>
                    <ul className={this.state.clicked ? 'navMenuActive' : 'navMenu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar