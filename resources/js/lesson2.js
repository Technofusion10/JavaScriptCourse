//---------DOM Selection--------------

// const form = document.getElementById('myForm'); //old tradition
// const input = document.querySelector('#password') // new accpit id and class

// const form1 = document.querySelectorAll('.myForm'); //query all the elemts
// console.log(form1);

// const input = document.querySelectorAll('.form-element');

// console.log(input);

// input.forEach(function(inputs){
//     console.log(inputs);
// });
console.log();

//-----------DOM SELECTION-------------
// const ul = document.querySelector('.items');
// console.log(ul);

// ul.lastElementChild.remove();
// ul.firstElementChild.remove();

// ul.lastElementChild.textContent = "Technofusion"

// ul.firstElementChild.textContent = "TechnoFusioN Karina User";
// ul.lastElementChild.textContent = "TechnoFusioN Chou User";
// ul.children[1].textContent= "TechnoFusioN Unbeatable Gamer"; //select the child element, innerText and textContent is sames
// ul.children[0].textContent = "TechnoFusion Gaming God";
// ul.children[1].innerHTML = "<b>technofusion</b>";

// const btn = document.querySelector('#btn');
// btn.style.background = "red"
console.log();

//-----------DOM EVENTS---------------
// const btn = document.querySelector('#btn');
// const form = document.querySelector('.relative');

// btn.addEventListener("click", function(e){
// e.preventDefault();
// form.style.background = "#042243";
// });
console.log();

//form
const Email = document.querySelector('#email');
const Password = document.querySelector('#password');
const Btn = document.querySelector('#btn');
const Msg =  document.querySelector('#msg');
const Msg1 =  document.querySelector('#msg1');
const form = document.querySelector('#myForm');
const ul = document.querySelector('.items');

ul.remove();

Btn.addEventListener('click', function(e){
    if(Email.value.length === 0 || Password.value.length === 0){
        console.log("empty fields");
        Msg.innerHTML = "<h4 class='error text-red-900 font-semibold rounded-lg bg-red-200 p-2' >Cridentials is incorrect...</h1>";

        setTimeout(()=> document.querySelector('.error').remove(), 3000);

        // Msg1.innerHTML = "<h4 class='error text-red-900 rounded' >incorrect password!!</h1>";

// setTimeout(()=> document.querySelector('.error').remove(), 3000);
// setTimeout(()=> document.querySelector('.error').remove(), 3000);
    }else{
        console.log("True");
    }
});

