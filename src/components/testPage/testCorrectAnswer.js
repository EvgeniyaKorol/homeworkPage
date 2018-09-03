import React, {Component} from 'react';

class TestCorrectAnswer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="correct-answer-wrap">
                <input className="teacher-answer" placeholder="Ответ..."></input>
                <button className="accept-teacher-answer">ok</button>
                <button className="change-teacher-answer"></button>
            </div> 
        )
    }
}

export default TestCorrectAnswer; 
