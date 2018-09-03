import React, {Component} from 'react';


class TestResultLabels extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="results-labels">
                <div className="answers-procents-label">
                    <p>Тест сдан на:</p>
                </div>
                <div className="answers-quantity-label">
                    <p>Правильных ответов:</p>
                </div>
            </div>
        )
    }
}

export default TestResultLabels;



