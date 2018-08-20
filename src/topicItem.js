import React, {Component} from 'react';
class TopicItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

                   <div>{this.props.count} / {this.props.total}</div>
            )

    }
}

export default TopicItem;

