import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { getVote } from '../../../api/voteColl.js';

import VoteItem from './VoteItem';

class VoteRun extends Component {
    renderItems(){
        const voteId = Number(this.props.match.params.index);
        console.log(this.props.vote.poll);
        return this.props.vote.poll.map((item) => {
            const key = `${voteId}.${item.itemIdx}`;
            return (
                <VoteItem voteId={voteId} item={item} key={key} />
            );
        });
    }

    render() {
        const vote = this.props.vote;
        console.log(vote);
        return (
            <div>
                <h3>{`Voting about ${vote.title}`}</h3>
                <ul className="collection">
                    {this.renderItems()}
                </ul>
            </div>
        );
    }
}

export default withTracker((props) => {
    const voteId = Number(props.match.params.index);
    const defaultVote = {
        title: 'Vote Not Found :(',
        poll: [ { itemIdx:1, name:'item', count:42 } ],
        schedule: { start: new Date(0), end: new Date(0) }
    };
    return {
        vote: getVote(voteId) || defaultVote
    };
})(VoteRun);