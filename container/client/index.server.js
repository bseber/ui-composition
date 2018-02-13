import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { getSubscriptions } from 'api';

import Container from './Container';
import 'child1';
import 'child2';

export default function init(request) {
    return new Promise((done, ouch) => {
        const { active } = request.query;
        const subscriptions = getSubscriptions();
        const provider = subscriptions.find(s => s.id === active) || subscriptions[0];

        const params = {}; // TODO SSR params for data fetching
        provider.fetchData(params)
            .then(data => {
                // subscriptions contains functions to render components
                // which cannot or should not be serialized in the initialState
                // subscription is executed in the browser again
                const initialState = {
                    active: provider.id,
                    data: { [provider.id]: data },
                };
                const html = render({
                    ...initialState,
                    subscriptions,
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
