import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders header text', () => {
    const {getByText} = render(<App />);

    expect(getByText('southeast oak')).toBeInTheDocument();
});
