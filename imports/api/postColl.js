import { Mongo } from 'meteor/mongo';

// { postId, title, summary, contents }

const postColl = new Mongo.Collection('posts');

function lastIndex() {
    let ret = 0;
    // O(n).... 극혐
    postColl.find().forEach((doc) => {
        ret = Math.max(ret, doc.postId);
    });
    return ret;
}

function makePost(post) {
    // 인자 검증
    const newIndex = lastIndex() + 1;
    post.postId = newIndex;
    postColl.insert(post);
}

function getPost(postId) {
    const post = postColl.findOne({ postId: postId });
    return post;
}

function removePost(_id) {
    postColl.remove(_id);
}

export default postColl;
export { makePost, getPost, removePost };