const React = require('react');

const Container = require('./Container');
require('child1');
require('child2');

module.exports = () => <Container subscriptions={global.subscriptions} />;
