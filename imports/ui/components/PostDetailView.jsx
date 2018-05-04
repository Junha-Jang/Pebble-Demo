import React from 'react';

import { Link } from 'react-router-dom';

const PostDetailView = (props) => {
    const post = props.post;
    return (
        <div className="card blue-grey darken-3">
            <div className="card-content white-text">
                <span className="card-title"> {post.title} </span>
                <p> {`Contents: ${post.contents}`} </p>
                <br />
                <p> {`Created At: ${post.createdAt}`} </p>
                <p> {`Post id: ${post.postId}`} </p>
            </div>
            <div className="card-action">
                <Link to="/stream" className="brown-text text-lighten-5">돌아가기</Link>
            </div>
        </div>
    )
}

export default PostDetailView;