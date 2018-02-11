const React = require('react');
const { Component } = React;

module.exports = class Child1View extends Component {
    render() {
        return React.createElement(
            'div',
            null,
            [
                React.createElement('h3', { key: 'title' }, 'child 1 view'),
                this.props.myItems.map(item => React.createElement(
                    'div', { key: item.id, style: { backgroundColor: 'purple' } }, item.name
                ))
            ]
        );
    }
};
