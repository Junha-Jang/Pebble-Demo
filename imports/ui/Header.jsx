import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="nav-extended">
                <div className="nav-wrapper grey darken-3">
                    <a href="/" className="brand-logo left">
                        &nbsp;&nbsp;Pebble - Demo&nbsp;&nbsp;
                    </a>
                    
                    <ul id="nav-mobile" className="right">
                        <li><a href="/stream">Stream</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;