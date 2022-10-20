import React from 'react';
import { render } from '@testing-library/react';
import MovieCardBig from './MovieCardBig';

test('MovieCardBig render', () => {
    const { asFragment } = render(<MovieCardBig title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
