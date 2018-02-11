const React = require('react');
const ReactDOM = require('react-dom');
const View = require('./index.server');
const getActiveChild = require('./getActiveChild');

View.hydrate = function(selector) {
    document.addEventListener('DOMContentLoaded', function() {
        ReactDOM.hydrate(
            React.createElement(window.myNamespace.components.container, { active: getActiveChild() }),
            document.querySelector(selector)
        );
    })
};

module.exports = View;
