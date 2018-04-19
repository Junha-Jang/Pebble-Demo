import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import postColl from '../../api/postColl.js';

class Post extends Component {
    constructor(props) {
        super(props);

        this.deleteThisPost = this.deleteThisPost.bind(this);
    }

    deleteThisPost(event) {
        event.preventDefault();

        // 지우는 모션 (fade out같은거)를 넣으면 좋겠다.

        postColl.remove(this.props.post._id);
    }
    
    render() {
        let post = this.props.post;
        return (
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title"> {post.title} </span>
                    <p> {`Summary: ${post.summary}`} </p>
                    <p> {`Full Content: ${post.content}`} </p>
                    <p> {`Created At: ${post.createdAt}`} </p>
                    <p> {`Post id: ${post.post_id}`} </p>
                </div>
                
                <div className="card-action">
                    <Link to={`/stream/${post.post_id}`}>자세히 보기</Link>
                    <a href="#" onClick={this.deleteThisPost}>지우기</a>
                </div>
            </div>
            
        );
    }
}

export default Post;