import { useState } from 'react';
import { Calc } from './components/Calculator';
import './App.css';




function App() {

  let [calc, setCalc] = useState('');
  const [result, setResult] = useState(0);

  //const ops=['/','*','+','-']


  const updateCalc = (value) => {

   setCalc(calc+value)
   setResult(value)

    
  }
  
  // };

  function div() {

  }
     function mult() {

     }
   function plus() {
    return Calc.add(result)
     //console.log(typeof (Number(calc))
   }
   function minus() {

   }

  function seeResult() {
    console.log(Calc.getResult())
  }

  

  const digits = () => {
    let Digits = [];

    for (let i = 1; i < 10; i++){
      Digits.push(
        <button onClick={(e) => updateCalc(i)} key={i}> {i} </button>
      )
    }
    return Digits
  }


  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          {result ? <span>({result})</span>: '' } {calc || '0'}

        </div>

      </div>
      <div className='operatorsButtons'>
        <button onClick={(e) =>div('/')} >/</button>
        <button onClick={(e) =>mult('*')} >*</button>
        <button onClick={(e) =>plus('+')} >+</button>
        <button onClick={(e) =>minus('-')} >-</button>
      </div>
      <div className='numberButtons'>
        {digits()} 
        <button onClick={(e) => updateCalc('0')} >0</button>
        <button onClick={(e) => updateCalc('.')} >.</button>
        <button onClick={(e)=>seeResult()} >=</button>
      </div>
    </div>
  );
}

export default App;
