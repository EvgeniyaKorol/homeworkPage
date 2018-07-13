/**
 * Created by Eugenia on 06.07.2018.
 */

import React, {Component} from 'react';
import Student from './student';
class StudentsArray extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="group-info-wrap">
                <div className="student-info">
                     {this.props.students.map(s => {
                        return (
                        <Student student={s} />
                        )
                    })}

                    </div>


                    {/*<Student />*/}
                    {/*<Student />*/}
                    {/*<Student />*/}
                    {/*<Student />*/}
                    {/*<Student />*/}
                    {/*<Student />*/}
                    {/*<Student />*/}
                    {/*<Student />*/}
                </div>
        );
    }
}

export default StudentsArray;



