
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
### Web API's in Js
#### web API :
These are the super power which is 
given by the browsers to the JS 
Engine through the window object in form of API.

    windows
    --
     setTimeout()
     DOM Api
     fetch()
     console
     local Storage
     location

- Actually, These are not part of js engine.
- They are part of browsers.
- browsers give access to the js engine.
- They can be access via windows keyword.
- The browser wrap up all API into global object window.

#### Asynchronous callback function :
- The callback function with Asynchronous operation are performed by the browsers (web Api). once it get completed.
- They are transfered into "callback queue" (or) "Micro task queue".
        
        Micro task queue > callback queue

#### Callback queue :
- when the asynchronous callback (setTimeout, DOM Api, EventListners) functions are completed their respective task. 
- They were pushed into the "callback queue".

#### Micro task queue (Higher priority) :
- Similar to callback queue, but it has Higher priority.
- The callback function through "promises", "Mutation Observer". 
- when they are settled.
- They were pushed into the "Micro task queue".

#### Event Loop:
- The Event Loop Monitors the 'call stack'.
- Also, event Loop Monitors both the 'Micro task queue' & 'callback queue'.
- when the call stack is empty. It push the cb() from the "Micro task queue" & "callback queue" to the call stack.
                
        Micro task queue - cb1() cb2() cb3()
        callback queue   - cb1()
    
- when the call stack is empty, The cb() inside the 'Micro task queue' will be executed First.
- Where, the cb() inside the 'callback queue' will be executed later after the completion of 3 cb() from the Micro task queue.

---
### JavaScript Runtime Environment 
JSRE - has a general things requires to run JavaScript code like JS Engine, Event Loop, Micro task Queue, callback queue, Api's (connects to outer environment).

- Browsers has a JavaScript Runtime Environment.
- Node.js has a JavaScript Runtime Environment, This able to run js code outside the browser.

#### JS Engines :
JS Engine should meet the ECMA script standards.
- Microsoft - chakra
- FireFox   - spider Monkey
- Google, Node.js - V8
  
Google's v8 is the fastest JS Engines. spider Monkey is the First JS Engine ever created.

#### Basic Architecture of Js Engine :
    code -> parsing -> compilation -> Execution

#### Parsing :
- During Parsing, the code is broken into Tokens.
- Then, "Syntax parser" convert the whole code into "Abstract Syntax Tree (AST)".

#### compilation :
- Interpreter - Start Executing the code line by line.
- compiler - The code is compiled even before the Execution of code. The Job of compiler is to optimize the code as much, it can on the run time and also convert into byte code.

#### Just In Time (JIT) Compiler :
- initially, JS is a Interpreter language.
- modern JS Engine uses both, It depends on JS Engine.
- JS Engine can use Interpreter along with compiler and that makes JIT.
- Js is a JIT compile language.

#### Execution :
- Execution phase has memory heap and call stack.
- Memory Heap - All the variable & Function are assigned Memory and has a link with the garbage collector to free up Memory.
- Call stack - Everything in Js is executed inside the call stack.

---
### setTimeout [Trust Issues] - Concurrency Model

    console.log('start');
    setTimeout(function cb(){
            console.log('call back');
    }, 5000);
    // 10 million of code, 10s require to execute.
    console.log('end');

    o/p : 
        start
        end 
        after 10s : Execution of GEC code.
        callback

- cb() will be hold in the callback queue after it Expires (5s).
- until the Execution of 10 million code in the global Execution context.
- It wait for the GEC to pop-out from the call stack, This is Called "Concurrency Model".
- setTimeout(0) will also work in a Concurrency Model. 
- It is used to differ the preference of the code.

---
### Higher Order Function
        function x(){
            console.log('x');
        }
        // y - Higher Order Function
        // x - callback Function 
        function y(x){
            console.log('y');
            x();
        }
- Function which take another function as an Argument (or) return a function from it, is known as "Higher Order Function".
- Function which is passed into Higher Order Function is 'callback Function'.
- It is possible, because function are "First Class Citizens" in JS.

---
### Map, Filter & Reduce 
Map, Filter, Reduce are Higher Order Functions.

#### map() :
    const arr = [3, 1, 5, 2 , 4];
    const double = arr.map((x) => x * 2);
    console.log(double);
    // [6, 2, 10, 4, 8]
    // In map(), code with multiple statement require 'return' statement.

- Map() is used to transform a array.
- Map() creates a new array with the result of calling a provided function on every element in a Array.

#### filter() :
    const arr = [3, 1, 5, 2, 4];
    const odd = arr.filter((x) => x % 2 !== 0);
    console.log(odd);
    // [3, 1, 5]
    // In Filter(), code with multiple statement require 'return' statement.

- Filter() is used to filter the values in array.
- Filter() creates a new array with all elements that passes the test by provided function.

#### Reduce() :
    const arr = [5, 1, 3, 2, 6];
    const output = arr.reduce((acc, cur) => {
            acc += cur;
            return acc;
    }, 0);
    console.log(output); // 17

- The Reduce() executes the Reducer Function on each element of the array, resulting in a single output value.
- Reducer() take two parameter as (accumulator, currentValue).
- accumulator - used to accumulate the Result.
- currentValue - represents the each value in the array at every iteration.
- initialization of accumulator is passed as an second Argument of reduce().

---
### DisAdvantages of call back:
Function which take another function as an Argument is known as callback function.

        const cart = ['pant', 'shoes', 'kurta']

#### Callback hell :
One callback inside the another callback inside another callback makes the callback hell.

    // createOrder - has responsible for creating 'cart'. call the payment() back.
    api.createOrder(cart, ()=> {
        // proceedToPayment - has responsible for payment. call the showOrder() back.             
        api.proceedToPayment(() => {
            api.showOrder(() => {
                api.walletBalance();
            })
        })
    })

#### Inversion of code :
Losing the control of the code, while using callbacks.
         
    // The control of the code is depend on createOrder(). 
    api.createOrder(cart, () => {
        api.proceedToPayment();
        // proceedToPayment() is depend on the createOrder().
    })

---
### Promise
- Promise is an object which representing the eventual completion (or) failure of an asynchronous operation.
- Promise helps in dealing with callback hell and inversion of code.
- Promise chaining helps the code more readable.
- They are two properties of promises.
- .then() is used to catch "resolves" {success}
- .catch() is used to catch "reject" {failure}

#### Promise states [[promiseState]]:
initially, Promise will be in 'Pending' state. Once the promise get 'settled', it turns into 'Fullfilled' or 'Rejected' based on the result.
- Pending.
- Fullfilled.
- Rejected.

#### Promise Result [[promiseResult]]:
once the result get fetched. Promise result turns into 'Response' of the data.

---
### D/B callback & promise

In cb(),

    // passing the cb() to the another cb() function.
    // control of the code is on createOrder()
    createOrder(cart, (orderId) => {
        proceedToPayment(orderId);
    })

In Promise,

    // Attaching the cb() to the promise object.
    // The control of the code is on Sequence one after another.
    const promise = createOrder(cart); // async op returns a promise.

    // once promise get settles.
    promise.then((orderId) => {        // promise returned from the createOrderAPI.
        proceedToPayment(orderId);
    })

---
#### Promise Chain :
Promise chain is a Sequence of call on JS Promise.
Allow async operation to be performed in specific order. 
     
    createOrder(cart)
    .then((orderId) => {
        return proceedToPayment(orderId);
    })
    .then((paymentInfo) => {
        return showOrderSummary(paymentInfo);
    })
    .then((paymentInfo) => {
        return updateWallet(paymentInfo);
    })
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        console.log("No matter what happens");
    }) 

NOTE :
- while using Promise chain, we should return a value (or) Promise from the previous promise for next .then()
- .catch() only handle the error of .then() that are presented above it.
- If there is any .then() below it .catch() will not handle it.

### How to create a Promise
    
    // createPromise() returna a promise.
    function createPromise(){
        return new Promise((resolve, reject) => {
             if(true){
                resolve("success");
             }
             else{
                reject("failure");
             }
        })
    }

- Promise constructor takes callback function as Argument.
- Callback function has two parameter 'resolve' & 'reject'.
- In Promise, resolve() (or) reject() are called only once in the promise.

### Promise API 
Promise API - used to handle "Multiple Promise Together".
- Promise.all()
- Promise.allSettled()
- Promise.race()
- Promise.any()

#### Promise.all() : 

- used to make parallel API Calls.
- used to handle Multiple Promise Together.

Case 1 :
- if all are success, it return the result of array of all promises.
- And it wait for all of them to finish.

Case 2 :
- if any one of them fails.
- As soon as any of the promise will get rejected, .all() throws an error.
- return by rejected promise.
- And it doesnt wait for other promises to get settles.

#### Promise.allSettled() : 

Case 1 :
- if all are success, it return an 'array of objects' with the result of all promises.
- it is similar to .all()

Case 2 :
- if any one of them fails.
- it wait for all promises to get settles(resolves or rejects).
- And return an 'array of objects' with the result of all promises.
- success : [state, value]
- failure : [state, reasons]

#### Promise.race() : 

- Returns the result (value) of the first settled(either success (or) failure) promise
- doesnt wait for other promise to get settles.

Case 1 :
- if it settle(success) first, it return with value.

case 2 :
-  if it settles(failure) first, it return with ERROR of that promise.

#### Promise.any() :

case 1 :
- seeking for the first settled success.
- .any() will wait for the first promise to get settled "successfully".
- and return the value of the promise.

case 2: 
- if all the promises get failed.
- after promise get settles, it returns the result of "aggregate Error".
- aggregate Error - aggregating the array of all three(promises) error.

---
### Async/Await
- Async/Await is used to handle promise.
- Async/ Await is a syntactic sugar over promise.

#### Async :

    async function getData(){
        return p;
    }

- Async is a keyword used to create asynchronous function.
- Async function always returns a promise.

Two cases while returning promise.

- case 1 : if the function returns a non-promise value. instead of returning a promise, then 'non-promise' value automatically 'wrap inside the promise' and return as promise.
- case 2 : if itself return as promise, it will not wrap into promise. it will return as it is.

#### Await :

    const p = new promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise resolved value")
        }, 10000);
    })
    async function getData(){
            // it wait for the promise to get settle (10s).
            const data = await p;
            console.log(data);
    }
    getdata();
    NOTE : here, getaData() Execution is suspended from the call stack
    until the promise get settles. then, push into the call stack and it 
    executes from where it Actually left.

- Async/Await is used to handle promise.
- Await can be used only inside the async function.
- Await keyword used infront of promise, it wait for promise to be settled.

---
### D/B Promise & Async/Await
#### using promise : [ JS Engine will not wait for promise to settled ]

    function getData(){
        console.log('Start');
        p.then((res) => console.log(res));
        console.log('End')
    }
    getData();

    O/P : 
        start 
        end
        // after 10s
        promise resolved value

#### using Async/Await : [ JS Engine will wait for promise to settled ]

    function handlePromise(){
        console.log('Hello World');
        const val = await p;
        // wait for promise to settles.
        console.log('Start');
        console.log(val);
        console.log('End');
    }
    handlePromise();

    O/P :
        Hello World
        // after 10s
        promise resolved value
        Start
        End
