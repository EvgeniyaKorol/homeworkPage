import React, {Component} from 'react';

class TestSubjectTitle extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="subject-title">
                <span>Тема теста:</span>
                <input className="test-subject none-visible"></input>
                <p className="subject">Псевдоистина/псевдоложь</p>
            </div>
        )
    }
}

export default TestSubjectTitle;




