import React, {Component} from 'react';
import TestStudent from './testStudent';
import AddTestStudent from './addTestStudent';

class TestStudents extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="group-info-block">
                <div className="group-info-wrap">
                    <div className="student-info">
                        <AddTestStudent/>
                        <TestStudent/>
                        <TestStudent/>
                        <TestStudent/>
                        <TestStudent/>
                    </div>
                </div>
            </div>
        )
    }
}
export default TestStudents;