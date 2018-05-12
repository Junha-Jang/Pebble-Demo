import React, { Component } from 'react';
import ReactQuill from 'react-quill';

import { makePost } from '../../api/postColl.js';

// Post를 만들 수 있는 Form을 렌더링하는 Component
// props = {}

// formatted된 contents가 아니라, 텍스트만 가져옵니다.

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.titleInput = React.createRef();
        this.contentsInput = React.createRef();
        //this.quillInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const titleNode = this.titleInput.current;
        const contentsNode = this.contentsInput.current;
        //const quillEditor = this.quillInput.current.getEditor();

        const title = titleNode.value.trim();
        const contents = contentsNode.value.trim();
        //const contents = quillEditor.getText();

        const post = {
            title,
            summary: "This is a common summary.",
            contents,
            createdAt: new Date()
        };
        makePost(post);

        titleNode.value = '';
        contentsNode.value = '';
        //quillEditor.setText('');
    }

    render() {
        return (
            <div className="card indigo lighten-5">
                <div className="card-content">
                    <span className="card-title">Submit Post</span>
                    <form id="postForm" className="new-post" onSubmit={this.handleSubmit} >
                        <input
                            type="text"
                            ref={this.titleInput}
                            placeholder="Type a title"
                        />
                        <br />
                        <input
                            type="text"
                            ref={this.contentsInput}
                            placeholder="Type contents"
                        />
                        {/*
                        <ReactQuill
                            ref={this.quillInput}
                            placeholder="Type for your new post!"
                        />
                        */}
                        <br />
                    </form>
                </div>
                    <div className="card-action">
                        <button
                            className="btn waves-effect grey darken-4"
                            type="submit"
                            form="postForm"
                            value="Submit">
                            Submit
                        </button>
                    </div>
            </div>
        );
    }
}

export default PostForm;