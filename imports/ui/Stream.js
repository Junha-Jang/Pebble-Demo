import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { postColl } from '../api/postColl.js'

import Post from './Post.js';

class Stream extends Component {
    /*
      getPosts() {
        return postColl.find().fetch();
      }
      이거 안됩니다. 왜 안되는지는 잘 모르겠으나
      아마 클래스에서 이런걸 해서 그런듯 합니다.
      데이터조차 불러오지 못합니다.
      그러니까 아래에서 쓴 withTracker를 쓰면 됩니다.
      이해도 20%
    */

    renderPosts() {

        return this.props.posts.map((post) => (
            /*
              react에서 key를 꼭 주라고 하네요?
              근데 Post 컴포넌트에서 직접 주려고 하면 똑같은 경고를 내보냅니다.
              일단 하긴 했으니...
            */
            <Post post={post} key={post.post_id}/>
        ));
    }

    render() {
        return (
            <div className="container">
              <header>
                <h1>Pebble Stream</h1>
              </header>
              <ul>
                {this.renderPosts()}
              </ul>
            </div>
        )
    }
}

/*
  withTracker는 react Component에
  데이터를 동기화시키는 것이라고 이해하고 있습니다.
  여기서 export하는 값은 Stream을 extend한 클래스라고 생각하면 될 듯 합니다.
  이해도 20%
*/
export default withTracker(() => {
    return {
        posts: postColl.find().fetch()
    };
})(Stream);
