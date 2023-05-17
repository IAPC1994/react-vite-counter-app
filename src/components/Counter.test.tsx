import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';


describe('Counter App', () => { 
    
    // beforeEach(() => {
    //     render(<Counter initialValue={ 0 } />)
    // });

    const initialValue = 100;

    test('Should have match with the snapshot', () => {
        const { container } = render( <Counter initialValue={ 0 } />);
        expect( container ).toMatchSnapshot();
    })

    test('The initial value of the count should be 100', () => {
        render( <Counter initialValue={ initialValue } />);
        //screen.debug();
        expect( screen.getByText( 'Count: 100' )).toBeTruthy();
    })
    
    test('Increment the counter to 1', () => { 
        render( <Counter initialValue={ 0 } />);
        const increment = screen.getByText('Increment');
        fireEvent.click(increment);
        fireEvent.click(increment);

        expect(screen.getByText('Count: 2')).toBeTruthy();
    });

    test('Decrement the counter to -2', () => { 
        render( <Counter initialValue={ 0 } />);
        const decrement = screen.getByText('Decrement');
        fireEvent.click(decrement);
        fireEvent.click(decrement);

        expect(screen.getByText('Count: -2')).toBeTruthy();
    });

    test('Reset the counter should to be 100', () => { 
        render( <Counter initialValue={ initialValue } />);
        const reset = screen.getByText('Restart');
        const increment = screen.getByText('Increment');
        fireEvent.click(increment);
        fireEvent.click(increment);
        fireEvent.click(increment);

        fireEvent.click(reset);

        expect(screen.getByText('Count: 100')).toBeTruthy();
    });

    test('Switch signs should be negative', () => { 
        render( <Counter initialValue={ initialValue } />);
        const switchSigns = screen.getByText('Switch Signs');
        const increment = screen.getByText('Increment');
        fireEvent.click(increment);
        fireEvent.click(increment);

        fireEvent.click(switchSigns);

        expect(screen.getByText('Count: -102')).toBeTruthy();
    });
});