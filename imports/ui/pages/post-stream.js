import { Template } from 'meteor/templating';

import { Posts } from '../../api/posts.js';

import './post-stream.html';

Template.postStream.events({
    "click .delete"(){
        Posts.remove(this._id);
    }
});