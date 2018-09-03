import React, {Component} from 'react';
import TestCorrectAnswer from './testCorrectAnswer'

class TestQuestion extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="test-question-wrap">
                <div className="test-question">
                    <input className="enter-question" placeholder="Вопрос..."></input>
                    <p className="question-title  none-visible">Увидим "alert"?</p>
                    <div className="question-screens-block">
                        <img src="" alt="" className="question-screen"/>
                        <img src="" alt="" className="question-screen"/>
                        <img src="" alt="" className="question-screen"/>
                    </div>
                </div>
                <TestCorrectAnswer/>               
            </div> 
        )
    }
}

export default TestQuestion;