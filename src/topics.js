import React, {Component} from 'react';
import Topic from './topic';
import Task from './task';
class Topics extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            this.props.topics.map(t => {
                return (
                    <div className="topics">
                        <div className="topic">
                            <span>{t.name}</span>
                        </div>

                        {t.tasks.map(tsk => {
                            return <Task task={tsk.name}/>;
                        })}
                    </div>
                )
            })


        );
    }
}

export default Topics;