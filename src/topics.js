import React, {Component} from 'react';
import Topic from './topic';
import Task from './task';
import {displayTasks} from "./redux/actions";
class Topics extends Component {

    constructor(props) {
        super(props);
        this.tasksDisplay = this.tasksDisplay.bind(this);
    }

    tasksDisplay (task, e){
        debugger
        this.props.store.dispatch(displayTasks(task.id));
    }

    render() {


        return (

            this.props.topics.map(t => {
                return (
                    <div className="topics">
                        <div className="topic">
                            <span onClick={this.tasksDisplay.bind(this, t)}>{t.name}</span>
                        </div>

                        {/*{t.tasks.map(tsk => {*/}
                            {/*return <Task task={tsk.name}/>;*/}
                        {/*})}*/}

                        {t.expanded ?
                        t.tasks.map(tsk => {
                            return <Task task={tsk.name}/>;
                        }) : <div></div>}
                    </div>
                )
            })


        );
    }
}

export default Topics;