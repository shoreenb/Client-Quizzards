import Countdown from ".";
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Countdown', () => {
    test('it renders Countdown', () => {
        render(<Countdown />, { wrapper: MemoryRouter });
        const timer = screen.queryByRole('button');
        expect(timer).toBeInTheDocument();
    })
    
})
