import React, { Component } from 'react';
import avatar from './assets/images/avatar.jpg';
import screenshot from './assets/images/Adult-IT-Courses.jpg';

class StudentScrenshotsPopup extends Component {
     
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="screenshotsPopup">
                <div className="screenshotsPopup-header">
                    <select className="task-title">
                        <option>Calculator-1</option>
                        <option>Calculator-2</option>
                        <option>Calculator-3</option>
                        <option>Slider-1</option>
                    </select>
                    <div className="sudent-info">
                        <select className="group">
                            <option>КМБ 5</option>
                            <option>КМБ 6</option>
                            <option>КМБ 7</option>
                            <option>КМБ 8</option>
                        </select>
                        <select className="student-name">
                            <option>Константин Константинович</option>
                            <option>Иван Иванович</option>
                            <option>Петр Петрович</option>
                        </select>
                    </div> 
                    {/* <span className="task-title">Calculator 1</span>
                    <div className="sudent-info">
                        <span className="group">КМБ 5</span>
                        <p className="student-name">Константин Константинович</p>
                    </div> */}
                    <div className="student-avatar">
                        <img src="" alt="" />
                    </div>
                    <span class="close-btn"></span>
                </div>
                <div className="student-screenshots none-visible">
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                    <div className="student-screenshot">
                        <img src="" alt="" className="screenshot" />
                        <p className="date">01.07.2018</p>
                    </div>
                </div>
                <div className="screenshot-coments-block">
                    <div className="screenshot-big-size">
                        <img src={screenshot} alt=""/>
                    </div>
                    <div className="comments">
                        <div className="send-comment">
                            <textarea className="message" placeholder="Написать комментарий..." />
                            <img src="" alt="" className="voice-message"/>
                            <img src="" alt="" className="send-message"/>
                        </div>
                        <div className="sent-comment">
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentScrenshotsPopup;