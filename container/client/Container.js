(function(factory) {
    window.myNamespace = window.myNamespace || {};
    window.myNamespace.components = window.myNamespace.components || {};
    window.myNamespace.components['Container'] = factory();
}(function () {
    const { Component } = window.React;

    return class Container extends Component {
        render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'container element'
                )
            );
        }
    };
}));
