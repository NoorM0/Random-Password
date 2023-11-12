const passwordBox = document.getElementById('password');
const length = 10;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefjhijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*_-<";

const password = uppercase+lowercase+numbers+symbols;

function generatePassword(){

    var generate = "";

    while(generate.length<length){
            generate+=password[Math.floor(Math.random()*password.length)]
    }

    passwordBox.value = generate;
}

function copy(){
    passwordBox.select();
    document.execCommand("copy");
}