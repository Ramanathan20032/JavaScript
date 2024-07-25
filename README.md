
# JavaScript
JavaScript is a Synchronous and single threaded language.


### Execution context :
Everything in JavaScript happens inside the 'Execution context'. Whenever the JavaScript runs, The 'Global execution context' is created in two phases.

    - Memory creation phase.
    - Code execution phase.
    
#### phase 1 - Memory creation phase (variable Environment)
- At the phase 1, initially the variable are declared 'Undefined'. As the function are assigned with 'whole code' of function. 
#### phase 2 - Code execution phase (Thread of Execution)
- At the phase 2, Code executed in sequential order.
- when the function is invoked, It will creates a 'local execution context'. It will have new Memory creation and Code execution phase.
- once the function get completed, It return a value to the function call.
- The local Execution context gets deleted after completion of function.

### Call Stack:
- The whole execution context local & global are managed by call stack. 
- It is used to manage the execution context.
- Call stack maintains the order of execution of "Execution context"

When the whole execution of code terminates. The whole execution context will be deleted.

---
### Hoisting in Js:
- Hoisting is a phenomenon in Js. By which we can access the variables and functions even before initialized.
    -
- when the function is declared using arrow function [() =>] or using variable name are behaved as a variable, which is allocated in Memory as 'Undefined'.

---
### functions in Js:
Functions are the small set of instruction.

    var x = 1;
    a();
    b();
    console.log(x); // 1
    function a(){
        var x = 10;
        console.log(x); // 10
    }
    function b(){
        var x = 100;
        console.log(x); // 100
    }
- Whenever the new function is invoked it creates a brand new execution context with Memory creation and code execution phase. 
- Then pushed into the call Stack.
- The local execution context has its own Memory space.
- when the function is completed, it pop-out from the call stack and move the control to the "Global execution context".

---
### Window & this 
- when an js code runs. It creates a global execution context along with it creates window & this.
- window & this are created by JavaScript engine.
    
#### Window : 
- It is a global object which is created along with 'global execution context'.
- In Browsers, global object is known as Windows.
    -
At  global execution context, this === window.

