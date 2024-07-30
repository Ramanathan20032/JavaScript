
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
                console.log(b);
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
