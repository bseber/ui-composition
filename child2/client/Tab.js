const React = require('react');
const { Component } = React;

module.exports = class Tab extends Component {
    render() {
        return React.createElement(
            'span',
            null,
            'child2 tab'
        );
    }
};
