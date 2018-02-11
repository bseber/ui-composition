const React = require('react');
const { Component } = React;

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'child1'
        };
    }
    handleTabClick(id) {
        this.setState({ active: id });
    }

    render() {
        const active = this.state.active;
        const activeSubscription = this.props.subscriptions.find(s => s.id === active) || { renderView: () => null };
        return React.createElement(
            'div',
            null,
            [
                React.createElement('h2', null, 'container element'),
                React.createElement('h3', null, 'tabs'),
                React.createElement('div', null, this.props.subscriptions.map(s =>
                    React.createElement('button', { key: s.id, onClick: event => this.handleTabClick(s.id) }, s.renderTab())
                )),
                React.createElement('h3', null, 'content'),
                React.createElement('div', null, activeSubscription.renderView()),
            ]
        );
    }
}

Container.defaultProps = {
    subscriptions: [],
};

module.exports = Container;
