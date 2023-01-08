const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const firstToDoForm = document.getElementById("todo-form"); 

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

function onLoginSumbit(event) {
    event.preventDefault();
   
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.style.display = "none"; 
    firstToDoForm.style.display = "flex"; 

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSumbit);
    firstToDoForm.style.display = "none";
} else {
    paintGreetings(savedUsername);
    loginForm.style.display = "none";
}