import { useState } from 'react';
import { Calc } from './components/Calculator';
import './App.css';



function App() {

  const [PlussValue1, setPlussValue1] = useState('');
  const [PlussValue2, setPlussValue2] = useState('');

  const [MinusValue1, setMinusValue1] = useState('')
  const [MinusValue2, setMinusValue2] = useState('')

  const [MultiValue1, setMultiValue1] = useState('')
  const [MultiValue2, setMultiValue2] = useState('')

  const [DivideValue1, setDivideValue1] = useState('')
  const [DivideValue2, setDivideValue2] = useState('')

  const [result,setResult]=useState('')
  
 


  function PlussFirstValue(plus1) {
    setResult('0')
    Calc.add(Number(plus1));    
  }
  
  function PlussSecondValue(plus2) {  
    
    Calc.add(Number(plus2))
    setResult(Calc.getResult())
    (Calc.ClearAll())
  }
  
  function MinusFirstValue(minus1) {
    
    setResult('0')

    if (Number(minus1) > 0) {
      Calc.add((minus1 * 2))
    
      Calc.subtract(Number(minus1));
    } else {
      Calc.subtract(Number(minus1));
    }
  }
  
  function MinusSecondValue(minus2) {  
    
    Calc.subtract(Number(minus2))
    setResult(Calc.getResult())
    (Calc.ClearAll())
  }

  function MultiFirstValue(times1) {
    setResult('0')
    Calc.add(1)
    Calc.multiply(Number(times1));
  }
  
  function MultiSecondValue(times2) {  
    
    Calc.multiply(Number(times2))
    setResult(Calc.getResult())
    (Calc.ClearAll())

  }

  function DivideFirstValue(div1) {
    setResult('0')

    Calc.add(Number(div1));
  }
  
  function DivideSecondValue(div2) {  
    
    Calc.divide(Number(div2))
    setResult(Calc.getResult())
    (Calc.ClearAll())

  }
  


  return (
    <div className="App">

      <h1> calculator </h1>
      <div className='add' >
      <input type='string' placeholder='add' value={PlussValue1} onChange={(e) => setPlussValue1(e.target.value)} />
      <button onClick={(e)=> PlussFirstValue(PlussValue1)} >+</button>
      <input type='string' placeholder='add' value={PlussValue2} onChange={(e) => setPlussValue2(e.target.value)} />
      <button onClick={(e) => PlussSecondValue(PlussValue2)} >=</button>
      </div>
      
      <div className='sub' >
      <input type='string' placeholder='subtract' value={MinusValue1} onChange={(e) => setMinusValue1(e.target.value)} />
      <button onClick={(e)=> MinusFirstValue(MinusValue1)} >-</button>
      <input type='string' placeholder='subtract' value={MinusValue2} onChange={(e) => setMinusValue2(e.target.value)} />
      <button onClick={(e) => MinusSecondValue(MinusValue2)} >=</button>
      </div>

      <div className='divide' >
      <input type='string' placeholder='multiply' value={MultiValue1} onChange={(e) => setMultiValue1(e.target.value)} />
     <button onClick={(e)=> MultiFirstValue(MultiValue1)} >*</button>
     <input type='string' placeholder='multiply' value={MultiValue2} onChange={(e) => setMultiValue2(e.target.value)} />
     <button onClick={(e) => MultiSecondValue(MultiValue2)} >=</button>
      </div>

      <div className='multi' >
      <input type='string' placeholder='divide' value={DivideValue1} onChange={(e) => setDivideValue1(e.target.value)} />
     <button onClick={(e)=> DivideFirstValue(DivideValue1)} >/</button>
     <input type='string' placeholder='divide' value={DivideValue2} onChange={(e) => setDivideValue2(e.target.value)} />
     <button onClick={(e) => DivideSecondValue(DivideValue2)} >=</button>
      </div>
      
       <span className='res' >result {result? ('= ' + result):''} </span>

   
      </div>
      
      
  );
}

export default App;
