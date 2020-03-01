import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import * as PRODUCTS from '../data/shop-all-new.json';
import Product from './Product';

describe('Product', () => {
    afterEach(() => cleanup());

    test('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Product product={PRODUCTS.groups[0]} />, div);
    });

    test('renders <ImageNotAvailable/> if not given valid hero img url', () => {
        expect.assertions(1);
        const mockProduct = PRODUCTS.groups[0];

        mockProduct.hero.href = '';

        const {getByTestId} = render(<Product product={mockProduct} />);
        
        expect(getByTestId('image-not-available')).toBeInTheDocument();
    });
});
