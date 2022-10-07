class Calculator {
    constructor() {
      this.calculatorResult = 0;
    }
  
    multiply(factor) {
    return  this.calculatorResult *= factor;
    }
  
    subtract(value) {
    return  this.calculatorResult -= value;
    }
  
    divide(divisor) {
     return this.calculatorResult /= divisor;
    }
  
    add(value) {
     return this.calculatorResult += value;
    }
  
    ClearAll() {
     return this.calculatorResult = 0;
    }
  
    getResult() {
      return this.calculatorResult;
    }
  }
  
const Calc= new Calculator();
  


export  { Calc }

