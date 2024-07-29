// closure - A function along with its lexical scope bundle together form of closure.

function outer(){
    var x = 10
    // function inner() form a closure 
    function inner(){
        console.log(x);
    }
    return inner;
}
// outer()();
var x = outer() // return the whole inner function.
x(); // invoking the inner function.