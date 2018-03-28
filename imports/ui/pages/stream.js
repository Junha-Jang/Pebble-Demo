import { Template } from 'meteor/templating';

import { Posts, get_max } from '../../api/posts.js';

import './stream.html';

Template.stream.helpers({
    posts(){
        return Posts.find({}, {sort: {createdAt: -1}});
    }
});

Template.stream.events({
    "submit .new-post"(event){
        event.preventDefault();
        const target = event.target;
        const title = target.text.value;
        const index = get_max() + 1;

        Posts.insert({
            post_id: index.toString(),
            title: title,
            author: 'Ghost',
            author_id: '123asd',
            createdAt: new Date(),
            contents: 'This is very Dummy text.\
            Lorem Ipsum dolor sit amet...... NOPE!\
            BTW, this post\'s id is ' + index.toString() ,
        })

        target.text.value='';
    }
})