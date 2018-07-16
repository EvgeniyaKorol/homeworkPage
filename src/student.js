import React, {Component} from 'react';
import avatar from './assets/images/avatar.jpg';
class Student extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var {student} = this.props;
        return (
            <div className="student">
                <div className="avatar">
                    <img src={student.avatar} alt="" className=""/>
                </div>
                <p className="student-name"> {student.name} </p>
            </div>
        );
    }
}

export default Student;



