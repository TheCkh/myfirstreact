import {render, screen} from '@testing-library/react';
import { Showtype } from '../Showtype';

describe("I'm going to test if it shows correctly:", ()=>{
    test("Fire type test", ()=>{
        const testarray = ["Fire"]
        render(<Showtype typelist={testarray}/>)
        const stringoutput = screen.getByText(/Fire/i)
        expect(stringoutput).toBeInTheDocument();
    })

    test("Fire type test", ()=>{
        const testarray = ["Fire"]
        render(<Showtype typelist={testarray}/>)
        const stringoutput = screen.getByTestId("type-string")
        expect(stringoutput.textContent).toBe("Type: Fire ") //You need the textcontent...
    })

});