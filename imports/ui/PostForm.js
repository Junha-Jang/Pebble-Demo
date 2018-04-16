import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import postColl from '../api/postColl.js';

class PostForm extends Component {
    handleSubmit(event) {
        event.preventDefault();

        const titleNode = ReactDOM.findDOMNode(this.refs.titleInput);
        const summaryNode = ReactDOM.findDOMNode(this.refs.summaryInput);

        const title = titleNode.value.trim();
        const summary = summaryNode.value.trim();

        postColl.insert({
            title,
            summary,
            createdAt: new Date()
        });

        titleNode.value = '';
        summaryNode.value = '';
    }

    render() {
        return (
            <form className="new-post" onSubmit={this.handleSubmit.bind(this)} >
                <input
                    type="text"
                    ref="titleInput"
                    placeholder="Type a title"
                />
                <br/>
                <input
                    type="text"
                    ref="summaryInput"
                    placeholder="Type a summary"
                />
                <br/>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}

export default PostForm;