// set and get

class Temperature{
    constructor(temp){
        this._temp = temp
    }
    get temp(){
        return this._temp
    }
    set temp(temp){
        if(temp > 100)
            temp = 100
        this._temp = temp
    }
}

let temp1 = new Temperature(25)
console.log(temp1.temp)
console.log(temp1.temp)