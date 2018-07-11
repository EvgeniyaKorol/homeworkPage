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
              <ScreenshotItem/>
              <ScreenshotItem/>
              <ScreenshotItem/>
              <ScreenshotItem/>
              <ScreenshotItem/>
              <ScreenshotItem/>
              <ScreenshotItem/>
              <ScreenshotItem/>
              <ScreenshotItem/>
              <ScreenshotItem/>
            </div>
        </div>
        );
    }
}
export default ScreenshotsArea;