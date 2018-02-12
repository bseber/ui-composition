import React from 'react';
import ReactDOM from 'react-dom';
import View from './Container';
import { getSubscriptions } from 'api';

import 'child1';
import 'child2';

View.hydrate = function(selector, initialState) {
    document.addEventListener('DOMContentLoaded', function() {
        const props = {
            ...initialState,
            subscriptions: getSubscriptions(),
        };
        ReactDOM.hydrate(
            React.createElement(View, props),
            document.querySelector(selector)
        );
    })
};

module.exports = View;
