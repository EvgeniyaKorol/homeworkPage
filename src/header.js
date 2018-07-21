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
                    <select className="title">
                        <option>homework</option>
                        <option>video</option>
                        <option>visits</option>
                    </select>
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

