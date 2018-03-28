import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../ui/layouts/body.js';
import '../ui/pages/post-stream.js';
import '../ui/pages/post-view.js';
import '../ui/pages/stream.js';

import { get_by_id } from '../api/posts.js';


// Routes from here

FlowRouter.route('/', {
    name: 'Stream',
    action() {
        console.log("Routing Root");
        BlazeLayout.render('bodyContent', {main: 'stream'});
    },
});

/*
Error : Stream에서 버튼 눌러서 가면 정상 작동하는데
        그 URL 다시 새로고침하면 doc을 찾을 수 없다고 함.
*/
FlowRouter.route('/view/:idx', {
    name: 'ViewPost',
    action: function(params) {
        console.log("Routing View");
        let post_idx = params.idx.toString();
        console.log(post_idx);
        let doc = get_by_id(post_idx);
        console.log(doc);
        BlazeLayout.render('bodyContent', {
            main: 'postView',
            doc: doc,
        });
    },
})
