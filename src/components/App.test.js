import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
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
});
