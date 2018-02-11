import React from 'react';
import ReactDOM from 'react-dom';
import View from './Container';

import 'child1';
import 'child2';

View.hydrate = function(selector, initialState) {
    document.addEventListener('DOMContentLoaded', function() {
        const props = {
            ...initialState,
            subscriptions: global.subscriptions,
        };
        ReactDOM.hydrate(
            React.createElement(window.myNamespace.components.container, props),
            document.querySelector(selector)
        );
    })
};

module.exports = View;
