import React, { Component } from 'react';

class Test extends Component {
    render() {
        return (
            <div>
                <header>
                    <h3>Test Page</h3>
                </header>

                <form>
                    <input type="text" />
                    <input type="checkbox" />
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Red</span>
                        </label>
                    </p>
                    <label>
                        <input type="checkbox" />
                        <span>Blue</span>
                    </label>
                </form>

            </div>
        );
    }
}

export default Test;