
let subscriptions = [];

module.exports.subscribe = function subscribe(component) {
    subscriptions.push(component);
};

module.exports.getSubscriptions = function getSubscriptions() {
    return subscriptions;
};
