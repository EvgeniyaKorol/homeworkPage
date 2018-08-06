import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment">
                <div className="comment-info">
                    <div className="user-info">
                        <img src="" alt="" className="user-avatar"/>
                        <span className="user-name"></span>
                    </div>
                    <span className="publication-date"></span>
                </div>
                <span>Написаный комментарий</span>
                <div className="comments-block">
                           
                </div>
            </div>
        );
    }

}

export default Comment;