import { Mongo } from 'meteor/mongo';

const postColl = new Mongo.Collection('posts');

export default postColl;

// post_id, title, summary, content (not ordered)