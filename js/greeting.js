// // Object
// const player = {
//     name:"kwon",
//     points: 10,
//     fat: true,
// };

// console.log(player["name"])
// console.log(player.name) 

// --------------------------------------------------------------------

// // function
// function sayHello(nameOfPerson, age){
//     console.log("Hello! "+ nameOfPerson , age)
// }

// sayHello("kwon",10)
// sayHello("kim",20)
// sayHello("park",30) 


// function plus(a,b){
//     console.log(a+b);
// }

// function divide(a,b){
//     console.log(a/b);
// }

// plus(8,60)
// divide(98,20)


// const player ={
//     name:"kwon",
//     sayHello: function(otherPersonsName){
//         console.log("hello!", otherPersonsName);
//     }
// }
// console.log(player.name)
// player.sayHello("lynn");
// player.sayHello("Kim")


// const calculator ={
//     plus: function(a,b){
//         return a+b
//     },
//     minus: function(a,b){
//         alert(a-b);
//     },
//     divide: function(a,b){
//         alert(a/b);
//     },
//     times: function(a,b){
//         alert(a*b);
//     },
//     power: function(a,b){
//         alert(a**b);
//     }
// }
// result=calculator.plus(5,6)
// calculator.minus(11,2)
// calculator.divide(40,4)
// calculator.power(2,4)
// calculator.times(2,4)


// console.log(result)

// --------------------------------------------------------------------
// // #2.11
// const age=96;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner+2;
// }

// const krAge = calculateKrAge(age)
// console.log(krAge)

// // #2.13 conditionals
// const age = prompt("How old are you? ")

// console.log(typeof age,  typeof parseInt(age));

// --------------------------------------------------------------------
// // # 3.0
// document.title="Hello! From JS!";

// --------------------------------------------------------------------
// // # 3.1

// const title = document.getElementById("title");

// title.innerText = "Got You!";

// document.getElementById("title").innerText='Got You';

// --------------------------------------------------------------------
// // # 3.2

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos)

// querySelector : element를 CSS 방식으로 검색 가능
// -> 단 하나의 element를 return 한다.
// -> 첫번째 element만 가져온다.

// // querySelectorAll : 이 selector 안의 조건에 부합하는 모든 element를 가져다준다.
// const title = document.querySelector(".hello h1")

// console.log(title)

// --------------------------------------------------------------------
// // # 3.3 Events
// const title = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     console.log("title was clicked!");
// }

// function changeColor() {
//     title.style.color="blue";
// }

// title.addEventListener("click", changeColor);

// --------------------------------------------------------------------
// // # 3.4 Events part Two

// const title = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     console.log("title was clicked!");
// }

// function changeColor() {
//     title.style.color="blue";
// }

// function handleMouseEnter() {
//     title.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//     title.innerText = "Mouse is gone!";
// }

// title.addEventListener("click", changeColor);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// --------------------------------------------------------------------
// // # 3.5 More Events

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     console.log("h1 was clicked!");
// }

// function changeColor() {
//     h1.style.color="blue";
// }

// function handleMouseEnter() {
//     h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//     h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//     alert("All Good");
// }


// h1.addEventListener("click", changeColor);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);

// window.addEventListener("copy", handleWindowCopy);

// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);



// 5일차
// --------------------------------------------------------------------
// // #2.13

// // prompt() : 사용자에게 창의 띄울 수 있게 함
// // 2개의 argument(message(string), default)
// const age = prompt("How old are you? ")
// console.log(age)


// --------------------------------------------------------------------
// // #2.14

// const age = parseInt(prompt("How old are you?"));

// console.log(isNaN(age));

// if(isNaN(age)){
//     // condition === true
//     console.log("Please write a number");
// } else if (age < 18) {
//     console.log("You are too young")
// } else {
//     console.log("You can drink");
// }

// --------------------------------------------------------------------
// // #3.6

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor="tomato";
//     }else {
//         newColor="blue";
//     }
//     h1.style.color = newColor;
// }
// h1.addEventListener("click", handleTitleClick);


// --------------------------------------------------------------------
// // #3.7

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if(h1.className === clickedClass){
//         h1.className="";
//     }else{
//         h1.className=clickedClass;
//     }
// }
// h1.addEventListener("click", handleTitleClick);



// --------------------------------------------------------------------
// // #3.8

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if(h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     }else{
//         h1.classList.add(clickedClass);
//     }
// }
// h1.addEventListener("click", handleTitleClick);


// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     h1.classList.toggle("clicked");
// }
// h1.addEventListener("click", handleTitleClick);



// const h1 = document.querySelector("<h1>");

// console.log(h1);



//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// #4.0 Input Values
// loginInput.value


// const loginForm = document.querySelector("#login-form");

// // input과 button 끌어오기
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// // // 다른 방법
// // const loginInput2 = document.querySelector("#login-form input");
// // const loginButton2 = document.querySelector("#login-form button");



// function onLoginBtnClick() {
//     console.log("Hello "+loginInput.value);
// }

// loginButton.addEventListener("click", onLoginBtnClick);


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// #4.1 Form Submission


// const loginForm = document.querySelector("#login-form");

// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// // function onLoginBtnClick() {
// //     const username = loginInput.value;
// //     if(username===""){
// //         alert("Please write your name");
// //     } else if(username.length >15){
// //         alert("Your name is too long");
// //     }
// // }

// // loginButton.addEventListener("click", onLoginBtnClick);


// function onLoginBtnClick() {
//     const username = loginInput.value;
//     console.log(username);
// }

// loginButton.addEventListener("click", onLoginBtnClick);

// -> form이 자동 submit 되는 문제 발생



//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// // #4.2 Events

// // js가 하게 될 일
// // onLoginSubmit 함수의 첫번째 argumenet로 발생한 일에 대해 우리가 필요로 할만한 정보들을 준다.

// // 모든 EventListener function의 첫번째 argument는 항상 지금 막 벌어진 일들에 대한 정보이다.


// // preventDefault
// // : 어떤 event의 기본 행동(동작)이든지 발생되지 않도록 막는다.
// // -> 기본 행동이란 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작
// // Ex) form을 submit


// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     console.log(loginInput.value);
// }

// loginForm.addEventListener("submit", onLoginSubmit);



//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// #4.3 Events part Two

// <HTML>

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Momentum App</title>
// </head>
// <body>
//     <form id="login-form">
//         <input 
//             autofocus
//             required 
//             maxlength="15" 
//             type="text" 
//             placeholder="What is your name?"
//         />
//         <!-- <button>Log In</button> -->
//         <input type="submit" value="Log In">
//     </form>
//     <a href="https://nomadcoders.co">Go to coursers</a>
//     <script src="app.js"></script>
// </body>
// </html>


// // <JS>
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     console.log(loginInput.value);
// }

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.dir(event);
// }

// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// #4.4 Getting Username

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     const username = loginInput.value;
//     // submit 시 form요소 숨기기
//     loginForm.classList.add("hidden");
//     console.log(username);
// }

// loginForm.addEventListener("submit", onLoginSubmit);




// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// // const h1 = document.querySelector("h1");
// const greeting = document.querySelector("#greeting");
// const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     // submit 시 form요소 숨기기
//     loginForm.classList.add(HIDDEN_CLASSNAME);

//     const username = loginInput.value;
//     // greeting.innerText = "Hello " + username;
//     greeting.innerText = `Hello ${username} good`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit", onLoginSubmit);


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// // #4.5 Saving Username

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     localStorage.setItem("username", username);
//     greeting.innerText = `Hello ${username} good`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit", onLoginSubmit);


// // localStorage
// // : 우리가 브라우저에 뭔가를 저장할 수 있게 해준다 -> 나중에 가져다 쓸 수 있다.


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// #4.6 Loading Username

// local storage에 username이 존재하는지 확인 후 
// 존재 O : form을 표시하지 않기 -> h1요소가 표시되도록
// 존재 X : form 먼저 표시

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// local storage에 유저정보가 있으면 
//  -> 거기서 유저정보를 받아서 인자로 넣어준다.
// local storage에 유저정보가 없으면 
//  -> form의 submit을 기다리고 form이 submit되면
//  -> input으로부터 유저정보를 받고
//  -> input에서 받은 user를 가진 paintGreetings 호출

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}