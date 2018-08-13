import React, { Component } from 'react';
import ScreenshotItem from './screenshotItem';
import EmptyScreenshot from './emptyScreenshot';

class ScreenshotsArea extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        let screens = this.props.screenshots.map(s => {
            return {
                src: s.src,
                taskId: s.taskId
            }
        });

        const items = screens.length > 0
            ?  screens.map(s => {
            return (<ScreenshotItem screen={s}/>)
        })
            : <EmptyScreenshot/>;

        return (
        <div className="screenshots-wrap">
            <div className="screenshots">
                {items}

                {/*<EmptyScreenshot/>*/}
                {/*<EmptyScreenshot/>*/}
                {/*<EmptyScreenshot/>*/}
                {/*<EmptyScreenshot/>*/}
                {/*<EmptyScreenshot/>*/}
            </div>
        </div>
        );
    }
}
export default ScreenshotsArea;