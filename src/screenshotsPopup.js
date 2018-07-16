import React, { Component } from 'react';
import avatar from './assets/images/avatar.jpg';
class StudentScrenshotsPopup extends Component {
     
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="screenshotsPopup">
                <div className="screenshotsPopup-header">
                    <span class="task">Calculator 1</span>
                    <div class="sudent-info">
                        <span class="group">КМБ 5</span>
                        <p class="student-name">Константин Константинович</p>
                    </div>
                    <div class="student-avatar">
                        <img src="" alt="" />
                    </div>
                    <span class="close-btn"></span>
                </div>
                <div className="student-screenshots">
                    <div className="student-screenshot">
                        <img src="" alt="" className="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentScrenshotsPopup;