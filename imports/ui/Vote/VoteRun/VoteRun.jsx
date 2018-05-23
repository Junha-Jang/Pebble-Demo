import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { getVote, doVote } from '../../../api/voteColl.js';

import VoteItem from './VoteItem';

class VoteRun extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectWrapper = this.handleSelectWrapper.bind(this);

        const selected = new Array(props.vote.poll.length);
        selected.fill(false);
        this.state = {
            selected
        };
    }

    renderItems() {
        const voteId = Number(this.props.match.params.index);
        return this.props.vote.poll.map((item) => {
            const key = `${voteId}.${item.itemIdx}`;
            return (
                <VoteItem
                    voteId={voteId}
                    item={item}
                    handleSelect={this.handleSelectWrapper(item.itemIdx)}
                    key={key}
                />
            );
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const length = this.props.vote.poll.length;
        const voteId = Number(this.props.match.params.index);

        const selected =  new Array(length);
        selected.fill(false);
        for(let i = 0; i < length; i++) {
            selected[i] = this.state.selected[i] || selected[i];
        }

        doVote(voteId, selected);

        const defaultSelcted = new Array(length);
        defaultSelcted.fill(false);
        this.setState({
            selected: defaultSelcted
        });
        
        this.props.history.push('/vote');
    }

    handleSelectWrapper(idx) {
        return (
            (event) => {
                this.setState((prevState, props) => {
                    // 좀 더 효율적으로. 배열 복사하지 않고.
                    let newArr = prevState.selected.slice();
                    newArr[idx] = !newArr[idx];
                    console.log(newArr[idx]);
                    return {
                        selected: newArr
                    };
                });
            }
        );
    }

    render() {
        const vote = this.props.vote;

        const startDate = vote.schedule.start;
        const endDate = vote.schedule.end;
        const nowDate = new Date();

        const valid = startDate <= nowDate && nowDate <= endDate;

        if(!valid) {
            return <h3>투표 가능한 기간이 아닙니다.</h3>
        }
        else {
            return (
                <div>
                    <h3>{`${vote.title}에 투표하기`}</h3>
                    <form id="voteRun" onSubmit={this.handleSubmit}>
                        <ul className="collection">
                            {this.renderItems()}
                        </ul>
                        <button
                            className="btn waves-effect grey darken-4"
                            type="submit"
                            form="voteRun"
                            value="Submit">
                            투표하기
                        </button>
                    </form>
                </div>
            );
        }
    }
}

export default withRouter(withTracker((props) => {
    const voteId = Number(props.match.params.index);
    const defaultVote = {
        title: 'Vote Not Found :(',
        poll: [ { itemIdx:1, name:'item', count:42 } ],
        schedule: { start: new Date(0), end: new Date(0) }
    };

    return {
        vote: getVote(voteId) || defaultVote
    };
})(VoteRun));