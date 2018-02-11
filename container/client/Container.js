const React = require('react');
const { Component } = React;

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active,
        };
    }

    componentDidMount() {
        window.addEventListener('popstate', event => {
            this.setState({ active: event.state ? event.state.active : null });
        });
    }

    handleTabClick(id) {
        window.history.pushState({ active: id }, null, "?active=" + id);
        this.setState({ active: id });
    }

    render() {
        const active = this.state.active;
        const subscriptions = this.props.subscriptions;
        const activeSubscription = subscriptions.find(s => s.id === active) || subscriptions[0];
        return (
            <div>
                <h2>container element</h2>
                <h3>tabs</h3>
                {subscriptions.map(s =>
                    <button key={s.id} onClick={event => this.handleTabClick(s.id)}>{s.renderTab()}</button>)
                }
                <h3>content</h3>
                <div>
                    {activeSubscription && activeSubscription.renderView()}
                </div>
            </div>
        );
    }
}

Container.defaultProps = {
    subscriptions: [],
};

module.exports = Container;
