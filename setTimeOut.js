function x(){
    for(var i = 1; i <= 5; i++){
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    console.log("hi");
}
// x();

// hi
// 6
// 6
// 6
// 6
// 6

// to overcome this issue in var.
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

function y(){
    for(let i = 1; i <= 5; i++){
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    console.log("hi");
}
// y();

// hi
// 1
// 2
// 3
// 4
// 5