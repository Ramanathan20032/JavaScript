
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

        var a = 10;
        console.log(window.a); // 10
        // This automatically refers to the global space
        console.log(a) // 10
        console.log(this.a) // 10
- global space - any code in js which is not inside the function.

#### window : 
- It is a global object which is created along with 'global execution context'.
- In Browsers, global object is known as Windows.
At  global execution context, this === window.

#### this : 
- whenever the execution context is created 'this' is created.

---
###  Undefined Vs Not defined 
#### Undefined(special keyword) :
- It allocates 'Undefined' in Memory to the variable in the code, even before the single execution of code.
- It is like a placeholder which is placed in a Memory. until the variable assigns with some value.
#### Not defined :
- It doesn't allocate Memory for the data, which is not declared.

JavaScript is a loosely typed language.

    var a;
    console.log(a); // Undefined
    a = 10;
    console.log(a); // 10
    a = "Hello";
    console.log(a); // Hello

---
### Scope, Scope chain & lexical environment
#### scope :
- where you can access a specific variable (or) function in the code.

#### lexical environment :
- lexical environment is a local Memory along with the lexical environment of its parent.
- lexical - In Hierarchy.
- local Memory + lexical environment of its parent.

        function a(){
            var b = 10;
            c();
            function c(){
                console.log(b);  // 10
            }
        }
        a();
- when the execution context is created it also get reference to the lexical environment of its parent.
- At, Global level it refers to the null.

#### Scope chain :
- The chain of lexical environment is known as scope chain.

---
### var, let, const 
#### var :
- 'var' declaration are Hoisted in global Memory space as 'Undefined'[global].
- Attached with the global object (Window).
#### let & const :
- let & const declaration are 'Hoisted'. But not in the global Memory space.
- They are allocated Memory in different Memory space as "Undefined" [Script].
- Stored in a reserve space for let & const.
- we cannot access the variable in the [Script] Memory space, before get initialized.
- They can access when the variable get initialized.
- let & const are in TDZ (Temporal Dead Zone).

### Temporal Dead Zone (TDZ) :
TDZ is the time "Since the let & const variable are Hoisted" & "Till it initialized some value".

    a : undefined
    // TDZ
    a : 10

To improve : put the declaration & initialized at the top of the scope.

    Usage : const > let > var

### Restriction of let & const :
let - Redeclaration is not possible.

    let a = 10;
    let a = 11; // syntax error
    // It is possible in var.

const - It must be initialized at the palce of declaration. It cannot be redefine.

    const a;
    a = 10;      // syntax error
    // It is possible in let.

    const a = 100;
    a = 1000;    // type error 

---
### Type Error Vs syntax Error Vs Reference Error
#### Type Error :
- Re-Assignment to a const variable
#### syntax Error :
- Missing initialization at const variable
- Redeclaration in 'const' & 'let'.
#### Refernece Error :
- A variable which is not inside the Memory space [Not defined].
- When you try to access the variable inside the "Temporal Dead Zone". It throws 'reference error'.

---
### Block & Block Scope
#### Block :
It is Wrapping up of Multiple statement into one group.

    {
        // compound statement.
        // used to combine Multiple js statements into single group.
    }
    
    if(true) console.log('Hi');
    // Ex. It requires a single statement.

    if(true){
        var a = 10;
        console.log(a);
    }
    The block can be used in the place where js expects a single statement.

#### Block Scope :
What are the variable and function we can access inside the block.

    {
        var a = 10;
        let b = 20;
        const c = 30;

        // here b & c cannot able to access outside the block. Because 'let' & 'const' are in "Block Scope".
        // They are Stored in a seperate Memory space which is reserve for block.
        <!-- block -->
            // b : undefined
            // c : undefined
        <!-- global -->
            // a : undefined
    }

#### Shadowing :
Same named variable inside the block that Shadows the variable with the same name outside the block.

    global: var a = 100;
    script: let b = 200;
    script: const c = 300;
        {
            global: var a = 10;
            block:  let b = 20;
            block:  const c = 30;
            console.log(a);      // 10
            console.log(b);      // 20
            // b & c both are in 'block scope' which deletes the Memory at the end of the block.
            console.log(c);      // 30
        }
        console.log(a);  // 10
        console.log(b);  // 200
        // b & c both are in different Memory space.
        console.log(c);  // 300

---
### Closure

    function x(){
        var a = 7;
        function y(){
            console.log(a);
        }
        return y;
    }
    z = x();    // y(){consoe.log(a);}  
    // whole function of y()
    z();        // 7
    // function call of y() 

- A function along with its lexical scope bundle together form of 'closure'.
- Closure is a function bind together with its lexical environment.
- Once the function completed it gets deleted, even after the deletion it remember the function and its lexical scope.

#### Advantages :
Data hiding - Encapsulation - Module Pattern.

#### DisAdvantage :
OverConsumption of Memory.

---
### SetTimeOut + Closure 
#### SetTimeOut :
SetTimeOut takes the callback function attach the Timer, when the timer exploits it called the function.

    var i = 1;
    // function along with its lexical scope forms a closure.
    setTimeOut(() => {
        console.log(i);
    }, 1000);
    console.log("Hi")

#### using var :

    function x(){
        // var - global space
        // which has a same Memory space for reference (i)
        // At end of the code execution at the global EC i = 6
        for(var i = 1; i <= 5; i++){
            setTimeout(() => {
                console.log(i);     
            }, i * 1000);
        }
        console.log("hi");
    }
    x();
    // hi
    // 6 6 6 6 6

To OverCome this issue in var,

    function z(){
    for(var i = 1; i <= 5; i++){
        function close(x){
            setTimeout(() => {
                console.log(x);
            }, x * 1000);
        }
        close(i)
    }
    console.log("Hi");
    }
    z();
    // hi
    // 1 2 3 4 5

#### using let :

    function y(){
        for(let i = 1; i <= 5; i++){
        // let - block scope
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        // This cb() has a new copy of (i) at every iteration
        // Because, it forms a new closure for each iteration.
        }
        console.log("hi");
    }
    y();
    // hi
    // 1 2 3 4 5

---
### First Class Function
#### Function statement :
    // hoisted
    function a(){
        // body
    }
- function statement is used to define a function with a specific name.
- function declaration are similar to the function statement.

#### Function Expression :
    // Not Hoisted - In TDZ
    var a = function(){
        console.log('Hi');
    }
- unlike, function declaration a function Expression can be 'anonymous' and 'Not Hoisted'.
- function Expression are assigned to variable.

#### Anonymous Function :
    function(){
        syntax error : function name requires.
    }
Anonymous Function - Function without the name.

#### Named Function Expression :
    var b = function xyz(){
        console.log('Hi');
    }
    b();
    xyz(); 
- It is same as function Expression instead of anonymous function, function is used with name.
- xyz() can't be able to access outside the global scope.

#### D/B Parameter & Argument :
    function abc(String){   // parameter
        console.log(String);
    }
    abc('Hello');           // Argument
Parameter - At Function Declaration
Argument - At Function Calling

#### First Class Function :

    var b = function(parameter){
        console.log(parameter);
    }
    b(xyz);

    function xyz(){

    }
- The Ability of function to be used as values.
- The Ability of function to be treated as a value, "passed into another function as Argument" & "return out from function".
- This Ability to use like a value is 'First Class Citizens'.

---
### callback Function :

    // cb() to perform asynchronous operation.
    setTimeout(function(){
        console.log('Timer');   // 3
    }, 5000);
    function x(y){
        console.log('x');       // 1
        y();
    }
    // cb().
    x(function(){
        console.log('y');       // 2
    })

- function are the 'First class Citizens' in js.
- function passing into another function is known as callback function.
- function which is passed into Higher order function is 'callback function'.
- By using callback, we can achieve asynchronous operation.

---
### EventListners :
    function attachEventListners(){
        let count = 0;
        // This function forms a closure.
        document.getElementById('click me')
        .addEventListener('click', function a(){
            console.log('Button clicked', ++count);
        });
    }
    attachEventListners();

- In Js, EventListners is a function that wait for an event to occur on a particular element & execute the specified function when that event occurs.

#### Why EventListners are needed to be removed ?
    EventListners are heavy and take more memory.
- When the EventListners are created. It takes a memory & forms a closure. 
- They only get executed when the event occurs.
- so, It doesn't free up their memory.
- when the EventListners are removed, then they are garbage collected and free up their memory space.
- It will stay in web API(browser). until the browser get closed (or) explicitly remove the event.

---
