import React, {Component} from 'react';
import Topic from './topic';
import Task from './task';
class Topics extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="topics"> {this.props.topics.map(t => {return(
                    <div className="topic">
                        <span>{t.name}</span>


                        {t.tasks.map(tsk => {return (
                            <Task task={tsk.name}/>
                        )})}


                    </div>
                )})}
                    {/*<Topic/>*/}
                    {/*<Task/>*/}
                    {/*<Task/>*/}
                    {/*<Task/>*/}
                </div>
        );
    }
}

export default Topics;