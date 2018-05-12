import React, { Component } from 'react';

import voteColl, { getVote, voteForItem } from '../../../api/voteColl.js';

class VoteItem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        const voteId = this.props.voteId;
        const _id = getVote(voteId)._id;
        const item = this.props.item;

        voteForItem(_id, item.itemIdx);
        console.log("Voted!");
    }

    render() {
        const voteId = this.props.voteId;
        const item = this.props.item;
        return (
            <li className="collection-item">
                <div>
                    {`${item.itemIdx}.${item.name}: ${item.count}`}
                    <a href="#" className="secondary-content" onClick={this.handleClick}>
                        <i className="material-icons">done_outline</i>
                    </a>
                </div>
            </li>
        );
    }
}

export default VoteItem;