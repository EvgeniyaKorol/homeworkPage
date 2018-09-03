import React, {Component} from 'react';
import '../../style.css';
import './assets/testPageStyle.css';

import TestResults from '../testPage/testResults';
import TestQuestion from './testQuestion';
import TestStudents from './testStudents';
import TestStudentsAnswers from './testStudentsAnswers';
import TestSubjectTitle from './testSubjectTitle'
import TestMainControlButtons from './testMainControlButtons';

 
class TestPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="test-page-wrapper">
                <div className="subject-students-wrapper">
                    <div className="test-subject-wrapper">
                        <div className="test-subject">
                            <TestSubjectTitle/>
                            <TestMainControlButtons/>
                        </div>
                    </div>
                    <TestStudents/>
                </div>

                <div className="questions-answers-block">
                    <TestQuestion/>
                    <TestStudentsAnswers/>
                </div>

                <TestResults/>
            </div>
        )
    }
}

export default TestPage;