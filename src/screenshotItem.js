import React, { Component } from 'react';
import screenshot from './assets/images/Adult-IT-Courses.jpg';
class ScreenshotItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        debugger;
        return (
                <div className="screenshot-item">
                    {this.props.screens.length} screens



                </div>
        );
    }
}
export default ScreenshotItem;