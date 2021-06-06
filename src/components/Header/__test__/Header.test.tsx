import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import Header from '../Header';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Provider store={store}><Header /></Provider>, div);
});

it("matches snapshot", () => {
    const tree = renderer.create(<Provider store={store}><Header /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
})