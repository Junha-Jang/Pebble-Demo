import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import postColl from '../../api/postColl.js'

import Post from './Post';
import PostForm from './PostForm';

class Stream extends Component {
    renderPosts() {
        return this.props.posts.map((post) => (
            <Post post={post} key={post._id} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Stream</h1>
                </header>

                <PostForm />

                <div className="row">
                    <div className="col s12 m12 l12">
                        <ul>
                            {this.renderPosts()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTracker(() => {
    return {
        posts: postColl.find({}, { sort: { createdAt: -1 } }).fetch()
    };
})(Stream);
