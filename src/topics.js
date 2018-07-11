import React, {Component} from 'react';
import Topic from './topic';
import Task from './task';
class Topics extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="topics">
                    <Topic/>
                    <Task/>
                    <Task/>
                    <Task/>
                </div>
        );
    }
}

export default Topics;