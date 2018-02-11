const React = require('react');
const ReactDOM = require('react-dom');

const Container = require('./Container');
require('child1');
require('child2');

function View() {
    return React.createElement(Container, { subscriptions: global.subscriptions })
}

View.hydrate = function(selector) {
    document.addEventListener('DOMContentLoaded', function() {
        ReactDOM.hydrate(
            React.createElement(window.myNamespace.components.container),
            document.querySelector(selector)
        );
    })
};

module.exports = View;
