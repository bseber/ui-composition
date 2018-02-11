const queryString = require('query-string');

module.exports = function() {
    return queryString.parse(window.location.search).active;
};
