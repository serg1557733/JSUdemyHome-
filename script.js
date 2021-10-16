'use strict';

//loCal storage

/* localStorage.setItem('name of key', 'value of key');

localStorage.removeItem('name of key');

localStorage.clear();


const local = localStorage.getItem('name of key');

console.log(local); */

const checkBox = document.querySelector('#checkbox'),
        form = document.querySelector('form'),
        change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
        checkBox.checked = 'true';
}
if (localStorage.getItem('bg' ) =='changed'){
    form.style.backgroundColor = 'blue';
}    


checkBox.addEventListener('change', () => {
            localStorage.setItem('isChecked', true);
        });

change.addEventListener('click', () => {
    console.log(localStorage.getItem('bg') === 'changed');
    if (localStorage.getItem('bg') === 'changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'red';

    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'blue';
    }
})


/* const persone = {
    name : 'Alex',
    age: 25
}; */
/* 
const serialazedPersone = JSON.stringify(persone);

localStorage.setItem('Alex', serialazedPersone);

console.log(JSON.parse(localStorage.getItem('Alex'))); */


//Regular Expression

/* new RegExp('patern', 'flags') // classik 

/patern/flags //using  */


//const ans = prompt('Enter your name');

//find lovercase 'n'

const reg = /\D/g;

//console.log(ans.match(reg)); 

// \d -digits, \w - words, \s - spaces

/* const string = 'My name is R2D2';

console.log(string.match(/\D/ig)); */


//non \D - non digit, \W non letters



//console.log(ans.search(reg));//return number of first "n"

//flags 

//i - non regystry los or Up/ g -global not first but all/ m - many strings 

//console.log(ans.match(reg));;


//const pass = prompt('password');

//console.log(pass.replace(/./g, '*')); //. - for all elements it string

/* 
console.log('2444    j0044px'.replace(/\D/g, ''));

console.log(parseInt('2444    j0044px')); */

//getters and setters


const persone = {
    name : 'Alex',
    age: 32,

    get userAge() {
        return this.age;
    },
    set userAge(num) {
        this.age = num;
    }
};

console.log(persone.userAge);
console.log(persone.userAge = 55);
console.log(persone.userAge);
