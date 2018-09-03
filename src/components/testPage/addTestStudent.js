import React, {Component} from 'react';
import addStudent from './assets/img/add-student.png';

class AddTestStudent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="add-student student">
                <img src={addStudent} className="plus-student" alt=""/>
                {/* <div className="search-student">
                    <input className="add-student"></input>
                    <span className="searching-item">Константин Константинович</span>
                </div> */}
            </div>
        )
    }
}

export default AddTestStudent;