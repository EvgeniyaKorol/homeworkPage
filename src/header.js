import React, {Component} from 'react';

import logo from './assets/images/logo.png';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-wrap">
                <div className="header">
                    <div className="title">
                        <span>homework</span>
                    </div>
                    <div className="logo">
                        <a href="">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

