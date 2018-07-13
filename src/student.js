import React, {Component} from 'react';
import avatar from './assets/images/avatar.jpg';
class Student extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="student">
                <div className="avatar">
                    <img src={avatar} alt="" className="" />
                </div>
                <p className="student-name">Константин</p>
            </div>

          
        );
    }
}

export default Student;



