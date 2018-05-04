import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import postColl, { removePost } from '../../api/postColl.js';

// Post를 Materalize Card 형식으로 보여주는 Component
// props = { post }, post: object

class PostSimpleView extends Component {
    constructor(props) {
        super(props);

        this.deleteThisPost = this.deleteThisPost.bind(this);
    }

    deleteThisPost(event) {
        event.preventDefault();

        // 지우는 모션 (fade out같은거)를 넣으면 좋겠다.
        let _id = this.props.post._id;
        removePost(_id);
    }
    
    render() {
        let post = this.props.post;
        return (
            <div className="card grey darken-3">
                <div className="card-content white-text">
                    <span className="card-title"> {post.title} </span>
                    <p> {`Summary: ${post.summary}`} </p>
                    <p> {`Created At: ${post.createdAt}`} </p>
                    <p> {`Post id: ${post.postId}`} </p>
                </div>
                
                <div className="card-action">
                    <Link to={`/stream/${post.postId}`} className="brown-text text-lighten-5">자세히 보기</Link>
                    <a href="#" className="brown-text text-lighten-5" onClick={this.deleteThisPost}>지우기</a>
                </div>
            </div>
            
        );
    }
}

export default PostSimpleView;