//charAt() method and error handling
const charAtNumber = document.querySelector('#charAtNumber');
const charAtVariableContent = document.querySelector('#charAtVariableContent');
const charAtOutputResult = document.querySelector('#charAtOutputResult');
const charAtButton = document.querySelector('#charAtButton');

charAtButton.addEventListener('click', function() {
    const charAtVariableValue = charAtVariableContent.value;
    const charAtNumberValue = Number(charAtNumber.value);

    //Checks if input string is empty
    if(!/\S/.test(charAtVariableValue) === true) {
        charAtOutputResult.textContent = `This method doesn't work without a word! Error found!`
        charAtOutputResult.style.height = 'auto'
    }

    //Checks if input number is negative
    else if(charAtNumberValue < 0) {
        charAtOutputResult.textContent = `Positive numbers only! Error found!`
        charAtOutputResult.style.height = 'auto'
    }

    //Checks if input number is a decimal
    else if(!Number.isInteger(charAtNumberValue)) {
        charAtOutputResult.textContent = `It's ${charAtVariableValue.charAt(charAtNumberValue)}, but it ignores your decimal and uses the integer portion only. Error found!`;
        charAtOutputResult.style.height = 'auto'
    }

    //Checks if input number is out of range for input variable
    else if((charAtNumberValue+1) > charAtVariableValue.length) {
        charAtOutputResult.textContent = `There isn't that many characters! Error found!`
        charAtOutputResult.style.height = 'auto'
    }

    //Checks if input is not a number or empty value
    else if(!Number(charAtNumberValue)) {
        charAtOutputResult.textContent = `indexNumber needs to be a number, or if no number is input, it will make it 0 by default. Error found!`
        charAtOutputResult.style.height = 'auto'
    }

    //No errors
    else {
        charAtOutputResult.textContent = charAtVariableValue.charAt(charAtNumberValue);
        console.log(charAtNumberValue)
    }
});

//length method and error handling
const lengthVariableContent = document.querySelector('#lengthVariableContent');
const lengthOutputResult = document.querySelector('#lengthOutputResult');
const lengthButton = document.querySelector('#lengthButton');

lengthButton.addEventListener('click', function() {
    const lengthVariableValue = lengthVariableContent.value;

    if(!/\S/.test(lengthVariableValue) === true) {
        lengthOutputResult.textContent = `This method returns 0 if no word is given! Error found!`
        lengthOutputResult.style.height = 'auto'
    }

    else if(/^[0-9]+$/.test(lengthVariableValue)) {
        lengthOutputResult.textContent = `It's ${lengthOutputResult.textContent = lengthVariableValue.length}, but in normal code, using length on numbers that aren't a string would result in undefined. Error found!`
        lengthOutputResult.style.height = 'auto'
    }

    else if(!(lengthVariableValue.length === Array.from(lengthVariableValue).length)) {
        lengthOutputResult.textContent = `It's ${lengthOutputResult.textContent = lengthVariableValue.length}, but you're probably using an Emoji or surrogate pair so it returns double the visible length! Error found!`
        lengthOutputResult.style.height = 'auto'
    }

    else{
        lengthOutputResult.textContent = lengthVariableValue.length;
        console.log(Array.from(lengthVariableValue).length)
        console.log(lengthVariableValue.length)
    }
});

//indexOf method and error handling
const indexOfVariableContent = document.querySelector('#indexOfVariableContent');
const indexOfVariableContent2 = document.querySelector('#indexOfVariableContent2');
const indexOfNumber = document.querySelector('#indexOfNumber');
const indexOfButton = document.querySelector('#indexOfButton');
const indexOfOutputResult = document.querySelector('#indexOfOutputResult');

indexOfButton.addEventListener('click', function() {
    const indexOfVariableValue = indexOfVariableContent.value;
    const indexOfVariableValue2 = indexOfVariableContent2.value;
    const indexOfNumberValue = Number(indexOfNumber.value);
    
    if(!/\S/.test(indexOfVariableValue) === true) {
        indexOfOutputResult.textContent = `Hey! We at least need a word to test for errors!`
        indexOfOutputResult.style.height = 'auto'
    }
    else if(!/\S/.test(indexOfVariableValue2) === true) {
        indexOfOutputResult.textContent = `If no argument is put in the brackets, JS returns 0 as it think's you're searching for an empty string. Error found!`
        indexOfOutputResult.style.height = 'auto'
    }
    else if(indexOfVariableValue.indexOf(indexOfVariableValue2) === -1) {
        indexOfOutputResult.textContent = `-1. The character was not found in the word. Error found!`
        indexOfOutputResult.style.height = 'auto'
    }
})