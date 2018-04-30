import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Mongo } from 'meteor/mongo';
import ReactQuill from 'react-quill';

import postColl, { findById } from '/imports/api/postColl.js';

import QuillReader from '../../components/QuillReader';

// render하기 전에 미리 post를 로딩할 수는 없나?
// withTracker는 render후에 동기화하는 작업인데, 여기서는 굳이 동기화는 필요없고 최초에 로딩만 하면 되는데...

class StreamView extends Component {
    render(){
        const post = this.props.post;
        return (
            <div>
                <h3>Viewing Post</h3>
                <br />
                <h4>{this.props.post.title}</h4>
                <QuillReader contents={this.props.post.content} />
            </div>
        )
    }
}

export default withTracker((props) => {
    const postId = Number(props.match.params.index);
    const defaultPost = { title: "Post Not Found :(" };
    return {
        post: findById(postId) || defaultPost
    };
})(StreamView);