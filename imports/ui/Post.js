import React, { Component } from 'react';

import postColl from '../api/postColl.js';

class Post extends Component {
    deleteThisPost(){
        postColl.remove(this.props.post._id);
    }
    
    render() {
        let post = this.props.post;
        // id를 post._id로 하는 것은 별로 안좋은 듯 하니 바꿀 것.
        // href에 #(id)해서 그 위치로 갈 수 있습니다. 저기서는 화면이 움직이는 게 싫어서 썼습니다.
        return (
            <div className="card blue-grey darken-1" id={post._id}>
                <div className="card-content white-text">
                    <span className="card-title"> {post.title} </span>
                    <p> {`Summary: ${post.summary}`} </p>
                    <p> {`Full Content: ${post.content}`} </p>
                    <p> {`Created At: ${post.createdAt}`} </p>
                </div>
                
                <div className="card-action">
                    <a href="#">자세히 보기 (누르지 말 것!)</a>
                    <a href={`#${post._id}`} onClick={this.deleteThisPost.bind(this)}>지우기</a>
                </div>
            </div>
            
        );
    }
}

export default Post;