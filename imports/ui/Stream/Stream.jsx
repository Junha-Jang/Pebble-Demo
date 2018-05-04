import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StreamRoot from './StreamRoot.jsx';
import StreamDetail from './StreamDetail/StreamDetail.jsx';

const Stream = () => {
    return (
        <div className="container">
            <header>
                <h1>Stream</h1>
            </header>

            <Switch>
                <Route exact path="/stream" component={StreamRoot} />
                <Route path="/stream/:index" component={StreamDetail} />
            </Switch>
        </div>
    );
}

export default Stream;