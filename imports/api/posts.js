import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');

// 굳이 함수로 한 이유가 있습니다.
export function get_max(){
    if(Posts.find().count() == 0) return 0;
    let ans=0;
    Posts.find({}, {
        sort: {post_id:-1},
        limit: 1
        }).forEach((doc)=>{
        ans = Math.max(ans, doc.post_id);
    });
    return ans;
};

// collection looks like :
// post_id, title, author, author_id, createdAt
// TODO : make tags