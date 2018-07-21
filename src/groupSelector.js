import React, {Component} from 'react';
class GroupSelector extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="group-number">
                <select className="group-heading">
                    {this.props.courses.map(g => {return (<option> {g.name} </option>)})}
                </select>
                <select className="number">
                    {this.props.groups.map(g => {return (<option> {g.name} </option>)})}
                </select>
            </div>
        );
    }
}

export default GroupSelector;



