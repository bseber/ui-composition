import React from 'react';

export default class Search extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({ query: event.target.elements.query.value });
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="search" name="query" />
                <button type="submit">find</button>
            </form>
        );
    }
}
