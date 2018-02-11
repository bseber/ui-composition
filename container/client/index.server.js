import React from 'react';
import ReactDOMServer from 'react-dom/server';

const Container = require('./Container');
require('child1');
require('child2');

export default function init(request) {
    return new Promise((done, ouch) => {
        const { active } = request.query;
        const provider = global.subscriptions.find(s => s.id === active) || global.subscriptions[0];

        const params = {}; // TODO SSR params for data fetching
        provider.fetchData(params)
            .then(data => {
                // global.subscriptions contains functions
                // which cannot or should not be serialized in the initialState
                // subscription is executed in the browser again
                const initialState = {
                    active: provider.id,
                    data: { [provider.id]: data },
                };
                const html = render({
                    ...initialState,
                    subscriptions: global.subscriptions,
                });

                done({
                    html,
                    initialState,
                });
            })
            .catch(error => ouch(error))
    });
}

function render(props) {
    return ReactDOMServer.renderToString(
        <Container {...props} />
    );
}
