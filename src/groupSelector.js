import React, {Component} from 'react';
class GroupSelector extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="group-number">
                <select className="group-heading">
                    {this.props.groups.map(g => {return (<option> {g.name} </option>)})}
                </select>
                <select className="number">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>14</option>
                </select>
            </div>
        );
    }
}

export default GroupSelector;



