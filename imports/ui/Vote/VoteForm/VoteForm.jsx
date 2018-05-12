import React, { Component } from 'react';

import { makeVote } from '../../../api/voteColl.js';

class VoteForm extends Component {
    constructor(props) {
        super(props);

        this.titleInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const titleNode = this.titleInput.current;

        const title = titleNode.value.trim();

        const startDate = new Date();
        let endDate = new Date(startDate);
        endDate.setHours(startDate.getHours()+1);

        const schedule = { start: startDate, end: endDate };
        const poll = [ { itemIdx:0, name:'item1', count:0 }, { itemIdx:1, name:'item2', count:42 } ];

        const vote = {
            title,
            poll,
            schedule
        }
        makeVote(vote);

        titleNode.value = '';
    }

    render() {
        return (
            <div className="card indigo lighten-5">
                <div className="card-content">
                    <span className="card-title">Make new vote</span>
                    <form id="voteForm" className="new-vote" onSubmit={this.handleSubmit} >
                        <input
                            type="text"
                            ref={this.titleInput}
                            placeholder="Type a title"
                        />
                        <br />
                    </form>
                    <br />
                    <p> 투표 시간은 지금으로부터 1시간입니다. </p>
                </div>
                <div className="card-action">
                    <button
                        className="btn waves-effect grey darken-4"
                        type="submit"
                        form="voteForm"
                        value="Submit">
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

export default VoteForm;