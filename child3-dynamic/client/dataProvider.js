
const cats = [
    { id: 'dog1', name: 'snoopy' },
];

export default function fetchData({ query }) {
    return new Promise(resolve => {
        const data = query === 'dog' ? cats : [];
        resolve({ data });
    });
}
