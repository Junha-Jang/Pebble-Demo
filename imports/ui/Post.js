import React, { Component } from 'react';

import postColl from '../api/postColl.js';

class Post extends Component {
    deleteThisPost(){
        postColl.remove(this.props.post._id);
    }
    
    render() {
        let post = this.props.post;
        return (
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title"> {post.title} </span>
                    <p> {`Summary: ${post.summary}`} </p>
                    <p> {`Created At: ${post.createdAt}`} </p>
                </div>
                <div className="card-action">
                    <a href="#">자세히 보기</a>
                    <a href="#" onClick={this.deleteThisPost.bind(this)}>지우기</a>
                </div>
            </div>
            
        );
    }
}

export default Post;