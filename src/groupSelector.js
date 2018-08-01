import React, {Component} from 'react';
import {changeCourse, changeGroup} from "./redux/actions";
class GroupSelector extends Component {

    constructor(props) {
        super(props);
    }

    changeCourse (e){
        this.props.store.dispatch(changeCourse(e.currentTarget.value));

      /*  var groupsIds = this.props.groups.filter(group => group.get('courseId') === e.currentTarget.value).map(g => {
            return {
                name: g.get("id")
            }
        });

        this.props.store.dispatch(changeGroup(groupsIds[0]));*/
    }

    changeGroup (e) {
        this.props.store.dispatch(changeGroup(e.currentTarget.value));
    }

    render() {
        return (
            <div className="group-number">
                <select className="group-heading" onChange={this.changeCourse.bind(this)} >
                    {this.props.courses.map(g => {return (<option value={g.id}> {g.name} </option>)})}
                </select>
                <select className="number" onChange={this.changeGroup.bind(this)}>
                    {this.props.groups.map(g => {return (<option value={g.id}> {g.name} </option>)})}
                </select>
            </div>
        );
    }
}

export default GroupSelector;



