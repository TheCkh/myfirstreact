import {render, screen} from '@testing-library/react';
import { MemoryRouter, Route,Routes } from 'react-router-dom';
import { Choosepokemon } from '../Choosepokemon';
import Battlescreen from '../Battlescreen';
import { fireEvent } from '@testing-library/react';

const MockToChoose = ()=>{
    return (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<Choosepokemon />} />
                <Route path="/Battle" element={<Battlescreen />} />
            </Routes>
        </MemoryRouter>
    )
}
describe("Testing some stuff", ()=>{
    test("When I click Go Adventuring, I should be on the battlescreen: ", ()=>{
        render(<MockToChoose/>)
        const testbutton = screen.getByRole("button", {name: /Charmander!/i})
        fireEvent.click(testbutton)
        const buttonclick = screen.getByRole("button", {name: /Go adventuring!/i})
        fireEvent.click(buttonclick)
        // const testing = screen.getByTestId("Battle")
        // expect(testing).toBe("Battle!")
        const battleElement = screen.getByText("Battle!");
        expect(battleElement).toBeInTheDocument();

    })
})