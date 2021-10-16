'use strict';

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


const persone = {
    name : 'Alex',
    age: 25
};

const serialazedPersone = JSON.stringify(persone);

localStorage.setItem('Alex', serialazedPersone);

console.log(JSON.parse(localStorage.getItem('Alex')));
