import React from 'react';

import Main from './Main';
import Header from './Header'

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Main />
            </div>
        </div>
    );
}

export default App;