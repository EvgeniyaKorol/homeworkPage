import React, {Component} from 'react';
import Comment from './comment';

class CommentsBlock extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comments-container">
                <div className="add-comment">

                </div>
                <Comment/>

            </div>
        );
    }
}

export default CommentsBlock;