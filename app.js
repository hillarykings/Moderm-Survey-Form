
let inputField = document.querySelector('#rd-others');
let radioBtn = document.querySelector('.radio-others')

let inputField2 = document.querySelector('#chk-others');
let checkBoxBtn = document.querySelector('.checkbox-others')

radioBtn.addEventListener('click', function () {
    inputField.style.display = 'block';
});


checkBoxBtn.addEventListener('click', function () {
    inputField2.style.display = 'block';
});