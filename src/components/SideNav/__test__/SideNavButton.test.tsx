import React from 'react';
import ReactDom from 'react-dom';
import SideNavButton from '../SideNavButton';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<SideNavButton />, div);
});

it("matches snapshot", () => {
    const tree = renderer.create(<SideNavButton />).toJSON();
    expect(tree).toMatchSnapshot();
})