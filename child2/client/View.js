const React = require('react');
const { Component } = React;

module.exports = class Child1View extends Component {
    render() {
        return React.createElement(
            'div',
            null,
            [
                React.createElement('h3', null, 'child 2 view'),
                React.createElement('div', null, 'no items :/')
            ]
        );
    }
};
