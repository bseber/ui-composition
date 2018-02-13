import React from 'react';
import { subscribe } from 'api';
import View from './View';
import Tab from './Tab'
import fetchData from './dataProvider';

subscribe({
    id: 'child3-dynamic',
    renderView: (props) => React.createElement(View, props),
    renderTab: (props) => React.createElement(Tab, props),
    fetchData: (query) => fetchData(query),
});
