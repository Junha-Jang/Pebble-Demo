import React, { Component } from 'react';
import ReactQuill from 'react-quill';

import postColl from '../api/postColl.js';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.titleInput = React.createRef();
        this.quillInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();

        const titleNode = this.titleInput.current;
        let quillNode = this.quillInput.current;

        const title = titleNode.value.trim();
        const content = quillNode.getEditor().getText();

        postColl.insert({
            title,
            summary: "This is a common summary.",
            content,
            createdAt: new Date()
        });

        titleNode.value = '';

        // doesn't work
        quillNode.state.value = 'NAH.';
    }

    render() {
        return (
            <form id="postForm" className="new-post" onSubmit={this.handleSubmit.bind(this)} >
                <input
                    type="text"
                    ref={this.titleInput}
                    placeholder="Type a title"
                />
                <br/>
                <ReactQuill
                    ref={this.quillInput}
                    defaultValue="<p>Type a content for your new post!</p>"
                />
                <br/>
                <button
                    className="btn waves-effect"
                    type="submit"
                    form="postForm"
                    value="Submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default PostForm;