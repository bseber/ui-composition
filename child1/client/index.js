const { subscribe } = require('api');
const View = require('./View');
const Tab = require('./Tab');
const fetchData = require('./dataProvider');
const React = require('react');

subscribe({
    id: 'child1',
    renderView: (props) => React.createElement(View, props),
    renderTab: (props) => React.createElement(Tab, props),
    fetchData: (query) => fetchData(query),
});
