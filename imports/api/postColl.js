import { Mongo } from 'meteor/mongo';

// postId, title, summary, content (not ordered)

const postColl = new Mongo.Collection('posts');

function lastIndex() {
    let ret = 0;
    // O(n).... 극혐
    postColl.find().forEach((doc) => {
        ret = Math.max(ret, doc.postId);
    });
    return ret;
}

function insertPost(post) {
    let newIndex = lastIndex() + 1;
    post.postId = newIndex;
    postColl.insert(post);
}

function findById(postId) {
    let post = postColl.findOne({ postId: postId })
    return post;
}

function removePost(_id) {
    postColl.remove(_id);
}

export default postColl;
export { insertPost, findById, removePost };