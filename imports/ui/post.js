import { Template } from 'meteor/templating';

import { Posts } from '../api/posts.js';

import './post.html';

Template.post.events({
    "click .delete"(){
        Posts.remove(this._id);
    }
})