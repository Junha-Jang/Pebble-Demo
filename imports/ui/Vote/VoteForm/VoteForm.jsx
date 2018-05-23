import React, { Component } from 'react';

import { makeVote } from '../../../api/voteColl.js';

class VoteForm extends Component {
    constructor(props) {
        super(props);

        this.titleInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderCandidates = this.renderCandidates.bind(this);
        this.addCandidate = this.addCandidate.bind(this);

        this.state = { cands: 0 };
        this.candInputs = [];
    }

    handleSubmit(event) {
        event.preventDefault();

        const titleNode = this.titleInput.current;

        const title = titleNode.value.trim();

        const startDate = new Date();
        let endDate = new Date(startDate);
        endDate.setHours(startDate.getHours()+1);

        const schedule = { start: startDate, end: endDate };

        const poll = this.candInputs.map((ref, idx) => {
            const nameNode = ref.current;
            const name = nameNode.value.trim();

            return { itemIdx: idx, name, count: 0 };
        });

        const vote = {
            title,
            poll,
            schedule
        }
        makeVote(vote);

        titleNode.value = '';
        this.candInputs.forEach((ref) => {
            const nameNode = ref.current;
            nameNode.value = '';
        });
        this.candInputs = [];
        this.setState({ cands: 0 });
    }

    addCandidate() {
        const idx = this.state.cands;
        this.setState((prevState) => (
            { cands: prevState.cands+1 }   
        ));
        this.candInputs.push(React.createRef());
    }

    renderCandidates() {
        const num = this.state.cands;
        const resArr = new Array(num);
        for(let i = 0; i < num; i++) {
            resArr[i] = (
            <input
                type="text"
                ref={this.candInputs[i]}
                placeholder="Type in"
                key={i}
            />);
        }
        return resArr;
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
                        <ul>
                            {this.renderCandidates()}
                        </ul>
                    </form>
                    <br />
                    {/*<p> 투표 시간은 지금으로부터 1시간입니다. </p>*/}
                </div>
                <div className="card-action">
                    <button
                        className="btn waves-effect grey darken-4"
                        type="submit"
                        form="voteForm"
                        value="Submit">
                        Submit
                    </button>
                    <span> &nbsp; </span>
                    <button
                        className="btn waves-effect grey darken-4"
                        onClick={this.addCandidate}>
                        항목 추가하기
                    </button>
                </div>
            </div>
        );
    }
}

export default VoteForm;