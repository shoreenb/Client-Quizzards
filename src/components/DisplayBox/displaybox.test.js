import DisplayBox from './index';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
describe('DisplayBox', () => {
    test('it renders "ul"', () => {
        render(<DisplayBox />);
        expect(screen.getByRole('ul')).toBeInTheDocument();
    })
    test('it renders "li"', () => {
        render(<DisplayBox />);
        expect(screen.getByRole('li')).toBeInTheDocument();
    })
    test('it renders Countdown', () => {
        render(<DisplayBox />);
        expect(screen.getByRole('div')).toBeInTheDocument();
    })
})
