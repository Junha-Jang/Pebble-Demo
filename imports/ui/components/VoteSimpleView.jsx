import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import voteColl, { removeVote } from '../../api/voteColl.js';

// Vote를 Materalize Card 형식으로 보여주는 Component
// props = { vote }, vote: object

class VoteSimpleView extends Component {
    constructor(props) {
        super(props);

        this.deleteThisVote = this.deleteThisVote.bind(this);
    }

    deleteThisVote(event) {
        event.preventDefault();

        const _id = this.props.vote._id;
        removeVote(_id);
    }

    render() {
        const vote = this.props.vote;
        const sche = vote.schedule;
        return (
            <div className="card grey darken-3">
                <div className="card-content white-text">
                    <span className="card-title"> {vote.title} </span>
                    <p> {`Schedule: ${sche.start.toLocaleString()} ~ ${sche.end.toLocaleString()}`} </p>
                    <p> {`Vote Id: ${vote.voteId}`} </p>
                </div>
                
                <div className="card-action">
                    <Link to={`/vote/${vote.voteId}`} className="brown-text text-lighten-5">투표하기</Link>
                    <a href="#" className="brown-text text-lighten-5" onClick={this.deleteThisVote}>지우기</a>
                </div>
            </div>
        )
    }
}

export default VoteSimpleView;