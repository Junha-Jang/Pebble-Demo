import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');

// 굳이 함수로 한 이유가 있습니다.
export function get_max(){
    // return maximum post_id
    if(Posts.find().count() == 0) return 0;
    let ans = 0;
    Posts.find({}, {
        sort: {post_id:-1},
        limit: 1
    }).forEach((doc) => {
        ans = Math.max(ans, doc.post_id);
    });
    return ans;
};

export function get_by_id(post_id){
    // return single doc by post_id
    // if it is not found, returns null
    let ans = Posts.findOne(
        {post_id: post_id}
    );
    return ans;
}

// collection looks like :
// post_id, title, author, author_id, createdAt, contents
// TODO : make tags