const { subscribe } = require('api');
const View = require('./View');
const Tab = require('./Tab');
const React = require('react');

subscribe({
    id: 'child1',
    renderView: () => React.createElement(View),
    renderTab: () => React.createElement(Tab),
});
