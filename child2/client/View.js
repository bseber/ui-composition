const React = require('react');
const { Component } = React;

module.exports = class Child2View extends Component {
    render() {
        const data = this.props.data;
        return React.createElement(
            'div',
            null,
            [
                React.createElement('h3', { key: 'title' }, 'child 2 view'),
                data.map(d => React.createElement('div', { key: d.id }, d.name))
            ]
        );
    }
};
