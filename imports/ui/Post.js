import React, { Component } from 'react';

class Post extends Component {
    render() {
        let post = this.props.post;
        return (
            <li>{post.summary}</li>
        );
    }
}

export default Post;