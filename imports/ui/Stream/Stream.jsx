import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StreamRoot from './StreamRoot';
import StreamDetail from './StreamDetail/StreamDetail';

const Stream = () => {
    return (
        <div>
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