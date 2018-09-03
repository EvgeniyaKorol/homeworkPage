import React, {Component} from 'react';
import removeStudent from './assets/img/remove-student.png';
import avatar from '../../assets/images/avatar.jpg';

class TestStudent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="student">
                <img src={removeStudent} className="remove-student" alt=""/>
                <div className="avatar">
                    <img src={avatar} alt="" className=""/>
                </div>
                <p className="student-name">Константин Константинович</p>
            </div>
        )
    }
}
export default TestStudent;