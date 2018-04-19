import React, { Component } from 'react';
import { Mongo } from 'meteor/mongo';

import postColl, { findById } from '/imports/api/postColl.js';

import Post from '../Post.jsx';

class StreamView extends Component {
    render(){
        const post_id = Number(this.props.match.params.index);

        let post = findById(post_id);
        
        // 페이지를 새로고침 할 경우 post를 찾지 못함.
        if(post == undefined) post = { title: "Can't find post", post_id: 10 };

        // console.log(post);

        return (
            <div>
                <h4>Viewing Post</h4>
                <Post post={post} />
            </div>
        )
    }
}

export default StreamView;