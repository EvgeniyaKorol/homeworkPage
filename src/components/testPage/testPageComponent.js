import React, {Component} from 'react';
import '../../style.css';
import Header from '../../header'
import StudentsArray from '../../studentsArray'

 
class TestPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="test-page-wrapper">
            <Header/>
            {/* <StudentsArray students={state.groups[0].students.map(s => {
                return {
                    name: s.name,
                    avatar: s.avatar
                }
            })}
            /> */}
            </div>
        )
    }
}

export default TestPage;