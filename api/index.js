
module.exports.subscribe = function subscribe(component) {
    global.subscriptions = global.subscriptions || [];
    global.subscriptions.push(component);
};

module.exports.getSubscriptions = function getSubscriptions() {
    return global.subscriptions;
};
