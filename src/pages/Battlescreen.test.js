import {render, screen} from '@testing-library/react';
import Battlescreen from './Battlescreen';
import { BrowserRouter } from 'react-router-dom';

const MockToDo = () =>{
    return(
        <BrowserRouter>
            <Battlescreen/>
        </BrowserRouter>
    )

}

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
      state: {
        firstpokemon: "Charmander",
        nickname: "Char"
      }
    }),
  }));

describe("I'm going to test Function 1", ()=>{

    test("Test how many pokemon are in my array", ()=>{
        render(<MockToDo/>)
        const divElement = screen.getAllByTestId("yourpokemon")
        expect(divElement.length).toBe(1)
    })
})