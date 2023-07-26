export function Showtype({typelist}){
  let string = ""
  typelist.forEach(element => {
    string = string + element + " "
  });
  
  return <div data-testid="type-string">Type: {string}</div>
}