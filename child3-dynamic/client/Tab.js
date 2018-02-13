import React, { Component } from 'react';

export default class Tab extends Component {
    render() {
        return (
            <span>child3-dynamic tab ({this.props.data ? this.props.data.length : 0})</span>
        );
    }
}
