import React, { Component } from 'react';
import Search from './Search'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active,
            data: props.data || {},
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

    handleSearch(query) {
        const updateState = (id, data) => {
            this.setState({
                data: {
                    ...this.state.data,
                    [id]: data,
                },
            });
        };
        for(const s of this.props.subscriptions) {
            s.fetchData(query).then(result => updateState(s.id, result));
        }
    }

    render() {
        const { active, data } = this.state;
        const subscriptions = this.props.subscriptions;
        const activeSubscription = subscriptions.find(s => s.id === active) || subscriptions[0];

        const renderResult = () => {
            const viewProps = data[activeSubscription.id];
            return activeSubscription.renderView(viewProps);
        };

        return (
            <div>
                <h2>container element</h2>
                <Search onSubmit={data => this.handleSearch(data)} />
                <h3>tabs</h3>
                {subscriptions.map(s =>
                    <button key={s.id} onClick={event => this.handleTabClick(s.id)}>{s.renderTab(data[s.id])}</button>)
                }
                <h3>content</h3>
                <div>
                    {activeSubscription && renderResult()}
                </div>
            </div>
        );
    }
}

Container.defaultProps = {
    subscriptions: [],
};

module.exports = Container;
