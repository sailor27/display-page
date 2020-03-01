import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import * as PRODUCTS from '../data/shop-all-new.json';
import FlexGrid from './FlexGrid';

describe('FlexGrid', () => {
    afterEach(() => cleanup());

    test('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<FlexGrid products={PRODUCTS.groups} />, div);
    });

    test('matches snapshot', () => {
        expect.assertions(1);

        const {asFragment} = render(<FlexGrid products={PRODUCTS.groups} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
