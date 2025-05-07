const nameElem = document.getElementById("name");
const phnoElem = document.getElementById("phno");
const email = document.getElementById("email");
const pass = document.getElementById("pass");


const namep= document.getElementById("namep");
const phnop = document.getElementById("phnop");
const emailp = document.getElementById("emailp");
const passp = document.getElementById("passwordp");

const submitbtn = document.querySelector("button");

submitbtn.addEventListener("click",()=>{
    namep.innerHTML = `name : ${nameElem.value}`;
    phnop.innerHTML = `phno : ${phnoElem.value}`;
    emailp.innerHTML = `email : ${email.value}`;
    passp.innerHTML = `password : ${pass.value}`;
});