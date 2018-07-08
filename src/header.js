/**
 * Created by Eugenia on 06.07.2018.
 */
import React, {Component} from 'react';
class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-wrap">;
                <div className="header">
                    <div className="title">
                        <span>homework</span>
                    </div>
                    <div className="logo">
                        <a href="">
                            <img src="assets/images/logo.png" alt="logo"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

