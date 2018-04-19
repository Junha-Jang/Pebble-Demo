import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Stream from './Stream/Stream.jsx';

const Main = () => {
    return (
        <Switch>
            <Route
                exact path="/"
                render={() => <Redirect to="/stream" />}
            />
            <Route path="/stream" component={Stream} />
        </Switch>
    );
}

export default Main;