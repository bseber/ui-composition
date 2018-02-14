import React, { Component } from 'react';
import Search from './Search'

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active,
            data: props.data || {},
            query: props.query,
        };
    }

    componentDidMount() {
        for (const s of this.props.subscriptions) {
            if (s.id !== this.state.active) {
                const params = { query: this.state.query };
                s.fetchData(params).then(result => this.updateProviderResultData(s.id, result));
            }
        }

        const handlePopstate = event => {
            this.setState({ active: event.state ? event.state.active : null });
        };
        window.addEventListener('popstate', handlePopstate);

        this.cleanupListeners = () => {
            window.removeListener('popstate', handlePopstate);
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.active !== this.state.active || prevState.query !== this.state.query) {
            const { active, query } = this.state;
            const pathname = `?active=${active}&query=${query}`;
            window.history.pushState({ active, query }, null, pathname);
        }
    }

    componentWillUnmount() {
        this.cleanupListeners();
    }

    handleTabClick(id) {
        this.setState({ active: id });
    }

    handleSearch({ query }) {
        this.setState({ query });
        for(const s of this.props.subscriptions) {
            s.fetchData({ query }).then(result => this.updateProviderResultData(s.id, result));
        }
    }

    updateProviderResultData(id, result) {
        this.setState({
            data: {
                ...this.state.data,
                [id]: result,
            },
        });
    }

    render() {
        const { active, data } = this.state;
        const subscriptions = this.props.subscriptions;
        const activeSubscription = subscriptions.find(s => s.id === active);

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
    query: '',
};
