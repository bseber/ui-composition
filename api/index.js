
global.myNamespace = global.myNamespace || {};
global.myNamespace.subscriptions = global.myNamespace.subscriptions || [];
const subscriptions = global.myNamespace.subscriptions;

module.exports.subscribe = function subscribe(component) {
    subscriptions.push(component);
};

module.exports.getSubscriptions = function getSubscriptions() {
    return subscriptions;
};
