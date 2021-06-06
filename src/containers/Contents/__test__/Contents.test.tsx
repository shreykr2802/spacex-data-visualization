import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import Contents from '../Contents';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Provider store={store}><Contents /></Provider>, div);
});
