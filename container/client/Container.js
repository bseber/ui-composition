const React = require('react');
const { Component } = React;

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'child1'
        };
    }

    componentDidMount() {
        window.addEventListener('popstate', event => {
            // TODO default value?
            this.setState({ active: event.state.active });
        });
    }

    handleTabClick(id) {
        window.history.pushState({ active: id }, null, "?active=" + id);
        this.setState({ active: id });
    }

    render() {
        const active = this.state.active;
        const activeSubscription = this.props.subscriptions.find(s => s.id === active);
        return (
            <div>
                <h2>container element</h2>
                <h3>tabs</h3>
                {this.props.subscriptions.map(s =>
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
