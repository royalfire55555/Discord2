var person;
var cookies = createCookies()
var database = firebase.database();;

if (cookies.length <= 0) {
    document.cookie = window.prompt("What is your (user)name?");
}

cookies = createCookies();
person = new Client(cookies)
console.log(cookies)

function sendMessage() {
    message = document.getElementById("messageSend").value;

    person.sendMessage(message);
    console.log("sent message");
}

function createCookies() {
    var cookies = document.cookie;
    return cookies;
}