import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { getSubscriptions } from 'api';

import Container from './Container';
import 'child1';
import 'child2';

export default function init(request) {
    return new Promise((done, ouch) => {
        const { active, query } = request.query;
        const subscriptions = getSubscriptions();
        const provider = subscriptions.find(s => s.id === active);

        if (provider) {
            provider.fetchData({ query })
                .then(data => {
                    // subscriptions contains functions to render components
                    // which cannot or should not be serialized in the initialState
                    // subscription is executed in the browser again
                    const initialState = {
                        query,
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
        } else {
            const initialState = { active: null, query: query, data: {} };
            const html = render({ ...initialState, subscriptions });
            done({ html, initialState });
        }
    });
}

function render(props) {
    return ReactDOMServer.renderToString(
        <Container {...props} />
    );
}
