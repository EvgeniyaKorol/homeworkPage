import React, { Component } from 'react';
class Task extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        var {task} = this.props;
        return (
            <div className="task">
            <span>{task}</span>
        </div>
        );
    }
}

export default Task;