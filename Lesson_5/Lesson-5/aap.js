const passwordInput = document.querySelector("#password");

passwordInput.addEventListener('input', (event) => {
    const password = event.target.value;
    let passwordStrength = 0;
    passwordStrength += isPasswordHas8Length(password);
    passwordStrength += isPasswordHasLowerCase(password);
    console.log("Password:", password);
    console.log("Strength:", passwordStrength);
});


//Проверка что в пароле не менее 8 символов 
const isPasswordHas8Length = (password) => password.length >= 8;

//Проверка, что в пароле есть строчные латинские буквы a-z
const isPasswordHasLowerCase = (password) => {
    for (const symbol of password) {
        if(symbol >= "a" && symbol <= "z") return true;
    }
    return false;
};