import React, {Component} from 'react';

import logo from './assets/images/logo.png';

class TaskHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task-header-wrap">
                <div className="task-header">
                    <span className="task-title">task-1</span>
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

export default TaskHeader;

