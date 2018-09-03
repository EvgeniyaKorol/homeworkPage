import React, {Component} from 'react';

class TestStudentAnswer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="answer">
                <div className="enter-answer none-visible">
                    <input className=""></input>
                    <button type="button" className="btnOk">OK</button>
                </div>
                <p className="student-answer">Да</p>
            </div>
        )
    }
}


export default TestStudentAnswer;
