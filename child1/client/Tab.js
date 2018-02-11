const React = require('react');
const { Component } = React;

module.exports = class Tab extends Component {
    render() {
        return React.createElement(
            'div',
            null,
            'child1 tab'
        );
    }
};
