let select = document.querySelectorAll('.currency')
let btn = document.getElementById('btn')
let input = document.getElementById('input')

let errorMessage = document.getElementById('error')

fetch('https://api.frankfurter.app/currencies')
.then(response=>response.json())
.then(response=>displayDropDown(response))

function displayDropDown(response){
    // converts json format into Array
    let curr = Object.entries(response)
    // 2D array - ['AUD', 'Australian Dollar']
    // console.log(curr[0])
    // console.log(curr[0][1])
    for(let i = 0; i < curr.length; i++){
        let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        // console.log(curr[i][0])

        // currency box no:1
        select[0].innerHTML += opt 
        // currency box no:2
        select[1].innerHTML += opt
    }
}

btn.addEventListener('click',function(){
    let currency1 = select[0].value
    let currency2 = select[1].value
    let inputVal = input.value

    if(currency1 === currency2){
        errorMessage.innerHTML = "* Choose Different Currencies"
    }
    else{
        convert(currency1, currency2, inputVal)
    }
})

function convert(currency1, currency2, inputVal){
    const host = 'api.frankfurter.app';
    // fetching the required details.
    fetch(`http://${host}/latest?amount=${inputVal}&from=${currency1}&to=${currency2}`)
    .then((response) => response.json())
    .then((data) => {
        // console.log(Object.values(data.rates)[0])
        document.getElementById('result').value = Object.values(data.rates)[0]
    })
}




