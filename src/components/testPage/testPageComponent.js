import React, {Component} from 'react';
import '../../style.css';
import './assets/testPageStyle.css';
import addStudent from './assets/add-student.png';
import removeStudent from './assets/remove-student.png';
import avatar from '../../assets/images/avatar.jpg';


 
class TestPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="test-page-wrapper">
                <div className="task-header-wrapper">
                    <div className="task-header">
                        <span>Тема теста:</span>
                        <input className="test-subject none-visible"></input>
                        <p className="subject">djchk ldvdjch</p>
                    </div>
                   
                    <div className="main-buttons">
                        <div className="btn next-question-btn">
                            <label>Вопрос</label>
                        </div>
                        <span className="btn finish-test-btn">
                            <label>Закончить</label>
                        </span>
                    </div>
                    
                </div>
                <div className="group-info-block">
                    <div className="group-info-wrap">
                        <div className="student-info">
                            <div className="add-student student">
                                <img src={addStudent} className="plus-student" alt=""/>
                            </div>
                            <div className="student">
                                <img src="" className="remove-student" alt=""/>
                                <div className="avatar">
                                    <img src={avatar} className="" alt=""/>
                                </div>
                                <p className="student-name">Константин Константинович</p>
                            </div>

                        <div className="student">
                            <div className="avatar">
                                <img src={avatar} alt="" className=""/>
                            </div>
                            <p className="student-name">Константин Константинович</p>
                        </div>
                        <div className="student">
                            <div className="avatar">
                                <img src={avatar} alt="" className=""/>
                            </div>
                            <p className="student-name">Константин Константинович</p>
                        </div>
                        <div className="student">
                            <div className="avatar">
                                <img src={avatar} alt="" className=""/>
                            </div>
                            <p className="student-name">Константин Константинович</p>
                        </div>
                        <div className="student">
                            <div className="avatar">
                                <img src={avatar} alt="" className=""/>
                            </div>
                            <p className="student-name">Константин Константинович</p>
                        </div>
                        <div className="student">
                            <div className="avatar">
                                <img src={avatar} alt="" className=""/>
                            </div>
                            <p className="student-name">Константин Константинович</p>
                        </div>
                        <div className="student">
                            <div className="avatar">
                                <img src={avatar} alt="" className=""/>
                            </div>
                            <p className="student-name">Константин Константинович</p>
                        </div>
                        <div className="student">
                            <div className="avatar">
                                <img src={avatar} alt="" className=""/>
                            </div>
                            <p className="student-name">Константин Константинович</p>
                        </div>
                        <div className="student">
                            <div className="avatar">
                                <img src={avatar} alt="" className=""/>
                            </div>
                            <p className="student-name">Константин Константинович</p>
                        </div>
                        <div className="student">
                            <div className="avatar">
                                <img src={avatar} alt="" className=""/>
                            </div>
                            <p className="student-name">Константин Константинович</p>
                        </div>
                        <div className="student">
                            <div className="avatar">
                                <img src={avatar} alt="" className=""/>
                            </div>
                            <p className="student-name">Константин Константинович</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestPage;