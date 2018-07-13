import React, { Component } from 'react';
import ScreenshotItem from './screenshotItem';
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
            </div>
        </div>
        );
    }
}
export default ScreenshotsArea;