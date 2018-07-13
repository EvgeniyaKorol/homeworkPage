/**
 * Created by Eugenia on 06.07.2018.
 */

import React, {Component} from 'react';
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



