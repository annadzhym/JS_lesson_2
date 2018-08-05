'use strict';

var message;

(function () {
    var login = prompt('Login, please. \nВведите логин (слово должно начинатся с заглавной буквы)', '');
    if(login == 'Админ'){
        var password = prompt('Password. \nВведите пароль(каждое слово должно начинатся с заглавной буквы)', '');
        message = CheckPassword(password);
    }else if(login  === undefined || login === null){
        message = 'Вход отменён'
    }else{
        message = 'Я вас не знаю!'
    }
    alert(message);
})()

function CheckPassword(password){
    if(password  === undefined || login === null){
        message = 'Вход отменён'
    } else if(password == 'Черный Властелин'){
        message = 'Добро пожаловать!'
    }else{
        message = 'Пароль неверен!'
    }
    return message;
}

