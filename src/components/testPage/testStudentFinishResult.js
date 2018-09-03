import React, {Component} from 'react';

class TestStudentFinishResult extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="student-finish-result">
                <div className="student-answer-procent">
                    <p>100<span>%</span></p>
                </div>
                <div className="student-answer-quantity">
                    <p>10</p>
                </div>
            </div>

        )
    }
}

export default TestStudentFinishResult;