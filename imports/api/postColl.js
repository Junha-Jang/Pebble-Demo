import { Mongo } from 'meteor/mongo';

// post_id, title, summary, content (not ordered)

const postColl = new Mongo.Collection('posts');

let lastIndex = () => {
    let ret = 0;
    // O(n).... 극혐
    postColl.find().forEach((doc) => {
        ret = Math.max(ret, doc.post_id);
    });
    return ret;
}

const insertPost = (post) => {
    let newIndex = lastIndex() + 1;
    post.post_id = newIndex;
    postColl.insert(post);
}

const findById = (post_id) => {
    /*
    console.log(post_id);
    console.log(typeof post_id);
    console.log(postColl.find({}).fetch());
    postColl.insert({title: "debugging.."});
    console.log(postColl.find({}).fetch());
    */
    return postColl.findOne({ post_id: post_id });
}

/*
    deletePost는 postColl.delete(key) 가 더 간편함.
    나중에 필요해지면 만들겠죠...?
*/

export default postColl;
export { insertPost, findById };