import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import postColl from '../api/postColl.js'

import Post from './Post.js';
import PostForm from './PostForm.js';

class Stream extends Component {
    renderPosts() {
        return this.props.posts.map((post) => (
            <Post post={post} key={post.post_id}/>
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Pebble Stream</h1>
                </header>

                <div className="row">
                    <div className="col s12 m6">
                        <PostForm/>
                    </div>
                </div>

                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}
export default withTracker(() => {
    return {
        posts: postColl.find().fetch()
    };
})(Stream);
