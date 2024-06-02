//.. ES6 - Modules
class car{
    drive(){
        console.log('driving')
    }
}

function gasFill(){
    console.log('gasFilling')
}
function repair(){
    console.log('repair')
}

export default car
export {gasFill, repair}