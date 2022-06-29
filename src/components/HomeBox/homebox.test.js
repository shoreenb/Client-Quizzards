import Homebox from ".";
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { screen } from ‘@testing-library/react’;



describe('FaveButton', () => {
    beforeEach(() => {
        render(<Homebox />, { wrapper: MemoryRouter });
    })
    test('renders a span with a star (★) in it', () => {
        let starSpan = screen.getByRole("switch")
        expect(starSpan.textContent).toBe('★')
    })
    test('changes colour of star when clicked', () => {
        let starSpan = screen.getByRole("switch")
        let initColour = starSpan.style.color
        userEvent.click(starSpan)
        let clickedColour = starSpan.style.color
        expect(clickedColour).not.toBe(initColour)
    })
    test('it renders Countdown', () => {
        const lol = screen.queryByRole('button');
        expect(lol).toBeInTheDocument();
    })
})