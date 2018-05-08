import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Stream from './Stream/Stream';
import StudentList from './StudentList/StudentList';

// Stream은 키워드였습니다... 이름을 바꿔야 합니다.

const Main = () => {
    return (
        <Switch>
            <Route
                exact path="/"
                render={() => <Redirect to="/stream" />}
            />
            <Route path="/stream" component={Stream} />
            <Route path="/stulist" component={StudentList} />
        </Switch>
    );
}

export default Main;