# task3 calculator

Follow the steps to create a calculator with Reac.js

you need firstly to  [Create React App](https://github.com/facebook/create-react-app)

make sure you are on the rigth directory path before start your react app 

Once created, open a new folder called Components under the src folder.
##
inside our Components folder create a
file called calculator.js. 

In this file we write our calculator code, the base of the whole projekt;

As you kan see, there is a class called Calculator whose 
once a new Calculator is created, can return the value of different function.

We export this class called Calc

and import it on our App.js by the following comand 
```
import { Calc } from './components/Calculator';
```

Whe kan now delete a few div classes from App.js because att the begining, React.js render the logo image and we dont need that.
 Delete all of the div unless the first one which have the classname App (className="App").
 ##
  Inside this div i created 8 [inputs fiels](https://www.w3schools.com/jsref/dom_obj_text.asp).
  ##
   When we write a number inside of it, the [useState](https://www.w3schools.com/react/react_usestate.asp#:~:text=The%20React%20useState%20Hook%20allows,be%20tracking%20in%20an%20application.) will absorb its value and a different function will called depends on wich matematical operators sign did we clicked;
  
     + - * /  

for exemple, the first field have a number value that will get absorbed by an Usestate an send to a function. It doesnt happend until we clicked the one of the operators button; 

inside this function, we say we clicked to the pluss button +, our Class calculator we did export get that value and add it by its function that we called
```
function PlussFirstValue(plus1) {
    setResult('0')
    Calc.add(Number(plus1));    
  }/// Calc is the imported Class

```
#
 again we write the next number on the other field, and when we clik to the equal button =, anther addition will happend on our Class calculator, and a function that render the result from the class will be shown by another useState and rendered in our application;

 


 


