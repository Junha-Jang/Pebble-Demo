import React from 'react';
import { Route, Switch } from 'react-router-dom';

import VoteRoot from './VoteRoot';
import VoteRun from './VoteRun/VoteRun';

const Vote = () => {
    return (
        <div className="container">
            <header>
                <h1>Vote</h1>
            </header>

            <Switch>
                <Route exact path="/vote" component={VoteRoot} />
                <Route exact path="/vote/:index" component={VoteRun} />
            </Switch>
        </div>
    );
}

export default Vote;