import React, { Component } from 'react';
import screenshot from './assets/images/Adult-IT-Courses.jpg';
class ScreenshotItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div className="empty-screenshot">
                    <img src="" alt="" className=""/>
                </div>
        );
    }
}
export default ScreenshotItem;