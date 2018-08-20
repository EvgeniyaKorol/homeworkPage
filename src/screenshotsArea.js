import React, { Component } from 'react';
import ScreenshotItem from './screenshotItem';
import EmptyScreenshot from './emptyScreenshot';
import TopicItem from "./topicItem";

class ScreenshotsArea extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
    debugger
        let elements = this.props.topics.map(topic => {
            let tasks = topic.tasks;
            let topicElement = <TopicItem total={tasks.length} count={1}/>;
            let screenshots = tasks.map(task => {return task.screenshots});
            let tasksEls = screenshots.length>0
                ? screenshots.map(s => {return (<ScreenshotItem screen={s}/>)})
                : <EmptyScreenshot/>;
            return <React.Fragment> {topicElement} {tasksEls}</React.Fragment>
        });

        return (
            <div className="screenshots-wrap">
                <div className="screenshots">
                    {elements}
                </div>
            </div>
        );
    }

    // render() {
    //     let screens = this.props.screenshots.map(s => {
    //         return {
    //             src: s.src,
    //             taskId: s.taskId
    //         }
    //     });
    //
    //     const items = screens.length > 0
    //         ?  screens.map(s => {
    //         return (<ScreenshotItem screen={s}/>)
    //     })
    //         : <EmptyScreenshot/>;
    //
    //     return (
    //     <div className="screenshots-wrap">
    //         <div className="screenshots">
    //             {items}
    //         </div>
    //     </div>
    //     );
    // }
}
export default ScreenshotsArea;