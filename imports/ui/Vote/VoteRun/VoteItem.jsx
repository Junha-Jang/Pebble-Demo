import React, { Component } from 'react';

import voteColl from '../../../api/voteColl.js';

class VoteItem extends Component {
    constructor(props) {
        super(props);

        this.state = { checked: true };
        this.handleCheck = this.handleCheck.bind(this);
    }

    // this.props.handleSelected

    handleCheck(event) {
        this.setState((prevState) => (
            { checked: !prevState.checked }
        ));
        this.props.handleSelect(event);
        console.log(this.state);
    }

    render() {
        const voteId = this.props.voteId;
        const item = this.props.item;
        return (
            <li className="collection-item">
                <div>
                    <label className="">
                        <input type="checkbox" onClick={this.handleCheck}/>
                        <span>{`${item.name} (${item.count})`}</span>
                    </label>
                </div>
            </li>
        );
    }
}

export default VoteItem;