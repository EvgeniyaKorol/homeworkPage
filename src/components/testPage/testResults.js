import React, {Component} from 'react';
import TestStudentFinishResult from './testStudentFinishResult'
import TestResultLabels from './testResultLabels'

class TestResults extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="finish-results-wrap">
                <TestResultLabels/>
                <div className="students-finish-results">
                    <TestStudentFinishResult/>
                </div> 
            </div>
        )
    }
}

export default TestResults;