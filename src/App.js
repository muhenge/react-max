import "bootstrap/dist/css/bootstrap.css";
import Buttons from "./Operations/Buttons";
import Inputs from './Operations/Inputs'

function App(props) {


  const one = 1, two = 2, three = 3, four = 4, five = 5, six = 6, seven =7, eight = 8, nine = 9, zero = 0;
  
  return (
    
    <div className="container">
      <Inputs  />
      <div className="row">
        <div className="col">
          <Buttons num = {one} />
          <Buttons num = {two} />
          <Buttons num ={three} />
        </div>
        <div className="col">
          <Buttons num = {four} />
          <Buttons num = {five} />
          <Buttons num = {six} />
          <Buttons num = {zero} />
        </div>
        <div className="col">
          <Buttons num = {seven} />
          <Buttons num = {eight} />
          <Buttons num = {nine} />
        </div>
        <div className="col">
          <Buttons />
          <Buttons />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
