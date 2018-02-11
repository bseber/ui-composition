
module.exports = function fetchData({ query }) {
    return new Promise(resolve => {
        resolve({
            data: [
                { id: '1', name: 'item 1 ' + query },
                { id: '2', name: 'item 2 ' + query },
                { id: '3', name: 'item 3 ' + query },
            ]
        });
    });
};
