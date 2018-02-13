import React, { Component } from 'react';

export default class Child3DynamicView extends Component {
    render() {
        return (
            <div>
                <h3>child 3 view</h3>
                {this.props.data.map(d => <div key={d.id}>{d.name}</div>)}
            </div>
        );
    }
};
