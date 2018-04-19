import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StreamRoot from './StreamRoot.jsx';
import StreamView from './StreamView/StreamView.jsx';

const Stream = () => {
    return (
        <div className="container">
            <header>
                <h1>Stream</h1>
            </header>

            <Switch>
                <Route exact path="/stream" component={StreamRoot} />
                <Route path="/stream/:index" component={StreamView} />
            </Switch>
        </div>  
    );
}

export default Stream;