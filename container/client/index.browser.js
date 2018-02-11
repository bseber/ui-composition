const React = require('react');
const ReactDOM = require('react-dom');
const View = require('./index.server');

View.hydrate = function(selector) {
    document.addEventListener('DOMContentLoaded', function() {
        ReactDOM.hydrate(
            React.createElement(window.myNamespace.components.container),
            document.querySelector(selector)
        );
    })
};

module.exports = View;
