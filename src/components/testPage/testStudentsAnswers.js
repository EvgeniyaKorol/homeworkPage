import React, {Component} from 'react';
import TestAnswerNumber from '../testPage/testAnswerNumber';
import TestStudentAnswer from '../testPage/testStudentAnswer';

class TestStudentsAnswers extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="answers-block">
                <div className="answer-numbers-wrap">
                   <TestAnswerNumber/>
                </div>

                <div className="answers-wrap">
                   <TestStudentAnswer/>
                </div>
            </div>
        )
    }
}

export default TestStudentsAnswers;