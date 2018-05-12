import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { getAllVote } from '../../api/voteColl.js';

import VoteSimpleView from '../components/VoteSimpleView';
import VoteForm from './VoteForm/VoteForm';

class VoteRoot extends Component {
    renderVotes() {
        return this.props.votes.map((vote) => (
            <VoteSimpleView vote={vote} key={vote._id} />
        ));
    }

    render() {
        return (
            <div className="row">
                <VoteForm />
                <br />
                
                <div className="col s12 m12 l12">
                    <ul>
                        {this.renderVotes()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        votes: getAllVote()
    };
})(VoteRoot);