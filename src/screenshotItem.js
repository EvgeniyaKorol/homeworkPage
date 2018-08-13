import React, { Component } from 'react';
import screenshot from './assets/images/Adult-IT-Courses.jpg';
class ScreenshotItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div className="screenshot-item">
                    <img src={this.props.screen.src} alt="" className="screenshot"/>
                </div>
        );
    }
}
export default ScreenshotItem;