import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import SideNav from '../SideNav';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Provider store={store}><SideNav></SideNav></Provider>, div);
});
