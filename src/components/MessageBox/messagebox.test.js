import MessageBox from './index';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
​
// describe('MessageBox', () => {
//     beforeEach(() => {
//         render(<MessageBox />);
//     });
//     test("messagebox", () => {
//         const yellow = screen.getByRole('input', { name: "" });
//         expect(yellow.name).toBe("message");
//     });
//     test("messagebox", () => {
//         const yellow = screen.getByRole('div', { name: "" });
//         expect(yellow.id).toBe("message-container");
//     });
    
    
//     describe('DeleteButton', () => {
//         test('it calls a handleClick prop when clicked', () => {
//             const stubHandleClick = jest.fn();
//             render(<MessageBox onSubmit={stubHandleClick} />)
//             let btn = screen.getByRole('button', { name: "Send Message" })
//             userEvent.click(btn)
//             expect(stubHandleClick).toHaveBeenCalledTimes(1);
//         })
//     });


    describe('Submit Message button', () => {
        test('it calls a handleClick prop when clicked', () => {
            const stubHandleClick = jest.fn();
            render(<MessageBox onSubmit={stubHandleClick} />)
            let btn = screen.queryAllByText(/Guess!/i)[0]
            userEvent.click(btn)
            expect(stubHandleClick).toHaveBeenCalledTimes(0);
        })
    });
    
    // test("does not change greeting whilst a user enters input", () => {
    //     const nameInput = screen.getByLabelText('Username')
    //     userEvent.type(nameInput, "Beth")
    //     const greeting = screen.getByRole('heading', { name: 'greeting' });
    //     expect(greeting.textContent).toBe("Hi there, friend!");
    //     expect(nameInput.value).toBe("Beth")
    // });
    // test("greets a user by name when user submits name", () => {
    //     const nameInput = screen.getByLabelText('Username')
    //     userEvent.type(nameInput, "Beth{enter}")
    //     const greeting = screen.getByRole('heading', { name: 'greeting' });
    //     expect(greeting.textContent).toBe("Hi there, Beth!");
    // });
    // test("clears user input after submission", () => {
    //     const nameInput = screen.getByLabelText('Username')
    //     userEvent.type(nameInput, "Beth{enter}")
    //     expect(nameInput.value).toBe("");
    // });
// });

// describe('MessageBox', () => {
//     test('it renders "ul"', () => {
//         render(<MessageBox />);
//         const msggbox = screen.getByLabelText('message');
//         expect(msggbox.textContent)
//     })

//     test('it renders "li"', () => {
//         render(<MessageBox />);
//         expect(screen.getByRole('li')).toBeInTheDocument();
//     })

//     test('it renders Countdown', () => {
//         render(<MessageBox />);
//         expect(screen.getByRole('div')).toBeInTheDocument();
//     })
// })

// it('test', () => {
//     render(<MessageBox />);
//     expect(screen.getByRole('button', { name: 'send-message-btn'})).toBeInTheDocument();
// })
