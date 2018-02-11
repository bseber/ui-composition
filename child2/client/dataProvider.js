
const cats = [
    { id: 'cat1', name: 'awesome cat' },
    { id: 'cat2', name: 'grumpy cat' },
];

module.exports = function fetchData({ query }) {
    return new Promise(resolve => {
        const data = query === 'cat' ? cats : [];
        resolve({ data });
    });
};
