/**
 * Created by Eugenia on 06.07.2018.
 */
/**
 * Created by Eugenia on 06.07.2018.
 */
import React, {Component} from 'react';
class GroupSelector extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="group-number">
                {/*<span>кмб</span>*/}
                <select>
                    {this.props.groups.map(g => {return (<option> {g.name} </option>)})}
                </select>
            </div>
        );
    }
}

export default GroupSelector;



