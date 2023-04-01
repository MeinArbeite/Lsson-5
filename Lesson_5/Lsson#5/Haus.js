let butt = document.querySelector('button')

butt.onclick=()=>{
    let numbers = [];
    for (let i = 1; i < 6; i++) {
        numbers.push(Math.floor(Math.random() * 99));
    }
    document.getElementById("numbers").innerHTML = numbers.join("-");
}