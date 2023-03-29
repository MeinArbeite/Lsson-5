// Дополнительная домашка в задании №4

const counterValueElement = document.getElementById("value");

const increaseButton = document.querySelector("#increase");
const resetButton = document.querySelector("#decrease");
const decreaseButton = document.querySelector("#reset");

let counterValue = 0;

increaseButton.addEventListener('click', function(){
    counterValue++;
    counterValueElement.innerText = counterValue;
    setCounter(counterValue )
})

resetButton.addEventListener('click', () => {
    counterValue = 0;
    setCounter(counterValue);
})

decreaseButton.addEventListener('click', () => {
    counterValue --;
    setCounter(counterValue)
})

//function declaration - определение функции
// function setCounter(value) {
//     counterValueElement = value;
//     if(value > 0){
//         counterValue.style.color = "green";
//     }else if(value === 0) {
//         counterValue.style.color = "gray";
//     }else{
//         counterValue.style.color = "red";
//     }
// }

//function expression - функциональная выражение
const setCounter = (value) => {
    counterValueElement.innerText = counterValue;
    if(value > 0){
        counterValueElement.style.color = "green";
    }else if(value === 0) {
        counterValueElement.style.color = "gray";
    }else{
        counterValueElement.style.color = "red";
    }

}