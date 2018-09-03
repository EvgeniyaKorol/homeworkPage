import React, {Component} from 'react';

class TestMainControlButtons extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-buttons">
                <button className="btn next-question-btn">
                    <label>Вопрос</label>
                </button>
                <button className="btn finish-test-btn">
                    <label>Закончить</label>
                </button>
            </div>
        )
    }
}

export default TestMainControlButtons;