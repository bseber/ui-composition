const React = require('react');

const Container = require('./Container');
require('child1');
require('child2');

module.exports = (props) => <Container {...props} subscriptions={global.subscriptions} />;
