const React = require('react');
const { Component } = React;

module.exports = class Child1View extends Component {
    render() {
        const items = [
            { id: '42', name: 'item 1' },
            { id: '1337', name: 'item 2' },
        ];
        return React.createElement(
            'div',
            null,
            [
                React.createElement('h3', { key: 'title' }, 'child 1 view'),
                items.map(item => React.createElement(
                    'div', { key: item.id, style: { backgroundColor: 'purple' } }, item.name
                ))
            ]
        );
    }
};
