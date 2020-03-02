import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup, fireEvent} from '@testing-library/react';
import App from './App';

describe('App', () => {
    afterEach(() => cleanup());

    test('renders without crashing', () => {
        const div = document.createElement('div');
        
        ReactDOM.render(<App />, div);
    });

    test('renders header text', () => {
        expect.assertions(1);
        const {getByText} = render(<App />);

        expect(getByText('southeast oak')).toBeInTheDocument();
    });

    test('renders <Popover/> when product is clicked', () => {
        expect.assertions(1);
        const mockSelectedProduct = 'outdoor-slope-lounge-chair-h5295';
        const popoverId = `popover-${mockSelectedProduct}`;
        const cardId = `card-${mockSelectedProduct}`;
        const {getByTestId} = render(<App/>);

        fireEvent.click(getByTestId(cardId));
        expect(getByTestId(popoverId)).toBeInTheDocument();
    });

    test('does not render <Popover/> when there is no product selected', () => {
        expect.assertions(1);
        const mockSelectedProduct = 'outdoor-slope-lounge-chair-h5295';
        const popoverId = `popover-${mockSelectedProduct}`;
        const {queryByTestId} = render(<App />);

        expect(queryByTestId(popoverId)).toBe(null);
    });
});
