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
            <div className="group-info-block">
            <div className="group-number">
                <span>кмб</span>
                <select>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
            </div>
            </div>
        );
    }
}

export default GroupSelector;



