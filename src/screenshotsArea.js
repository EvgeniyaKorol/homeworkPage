import React, { Component } from 'react';
import ScreenshotItem from './screenshotItem';
import EmptyScreenshot from './emptyScreenshot';

class ScreenshotsArea extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="screenshots-wrap">
            <div className="screenshots">
                {this.props.screenShots.map(s => {
                    return (
                        <ScreenshotItem screen={s} />
                    )
                })}
                <EmptyScreenshot/>
                <EmptyScreenshot/>
                <EmptyScreenshot/>
                <EmptyScreenshot/>
                <EmptyScreenshot/>
            </div>
        </div>
        );
    }
}
export default ScreenshotsArea;