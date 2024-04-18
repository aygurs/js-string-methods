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
        charAtOutputResult.style.color = 'black'
    }

    //Checks if input number is negative
    else if(charAtNumberValue < 0) {
        charAtOutputResult.textContent = `Positive numbers only! Error found!`
        charAtOutputResult.style.height = 'auto'
        charAtOutputResult.style.color = 'black'
    }

    //Checks if input number is a decimal
    else if(!Number.isInteger(charAtNumberValue)) {
        charAtOutputResult.textContent = `It's ${charAtVariableValue.charAt(charAtNumberValue)}, but it ignores your decimal and uses the integer portion only. Error found!`;
        charAtOutputResult.style.height = 'auto'
        charAtOutputResult.style.color = 'black'
    }

    //Checks if input number is out of range for input variable
    else if((charAtNumberValue+1) > charAtVariableValue.length) {
        charAtOutputResult.textContent = `There isn't that many characters! Error found!`
        charAtOutputResult.style.height = 'auto'
        charAtOutputResult.style.color = 'black'
    }

    //Checks if input is not a number or empty value
    else if(!Number(charAtNumberValue)) {
        charAtOutputResult.textContent = `indexNumber needs to be a number, or if no number is input, it will make it 0 by default. Error found!`
        charAtOutputResult.style.height = 'auto'
        charAtOutputResult.style.color = 'black'
    }

    //No errors
    else {
        charAtOutputResult.textContent = charAtVariableValue.charAt(charAtNumberValue);
        charAtOutputResult.style.height = 'auto'
        charAtOutputResult.style.color = 'black'
    }
});

//length method and error handling
const lengthVariableContent = document.querySelector('#lengthVariableContent');
const lengthOutputResult = document.querySelector('#lengthOutputResult');
const lengthButton = document.querySelector('#lengthButton');

lengthButton.addEventListener('click', function() {
    const lengthVariableValue = lengthVariableContent.value;

    //Checks if input string is empty
    if(!/\S/.test(lengthVariableValue) === true) {
        lengthOutputResult.textContent = `This method returns 0 if no word is given! Error found!`
        lengthOutputResult.style.height = 'auto'
        lengthOutputResult.style.color = 'black'
    }

    //Checks if input is numbers
    else if(/^[0-9]+$/.test(lengthVariableValue)) {
        lengthOutputResult.textContent = `It's ${lengthOutputResult.textContent = lengthVariableValue.length}, but in normal code, using length on numbers that aren't a string would result in undefined. Error found!`
        lengthOutputResult.style.height = 'auto'
        lengthOutputResult.style.color = 'black'
    }

    //Checks for special characters
    else if(!(lengthVariableValue.length === Array.from(lengthVariableValue).length)) {
        lengthOutputResult.textContent = `It's ${lengthOutputResult.textContent = lengthVariableValue.length}, but you're probably using an Emoji or surrogate pair so it returns double the visible length! Error found!`
        lengthOutputResult.style.height = 'auto'
        lengthOutputResult.style.color = 'black'
    }

    //No errors
    else{
        lengthOutputResult.textContent = lengthVariableValue.length;
        lengthOutputResult.style.height = 'auto'
        lengthOutputResult.style.color = 'black'
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
    
    //Checks if input word is empty
    if(!/\S/.test(indexOfVariableValue) === true) {
        indexOfOutputResult.textContent = `Hey! We at least need a word to test for errors!`
        indexOfOutputResult.style.height = 'auto'
        indexOfOutputResult.style.color = 'black'
    }

    //Checks if character variable is empty
    else if(!/\S/.test(indexOfVariableValue2) === true) {
        indexOfOutputResult.textContent = `If no argument (character) is put in the brackets, JS returns 0 as it think's you're searching for an empty string. Error found!`
        indexOfOutputResult.style.height = 'auto'
        indexOfOutputResult.style.color = 'black'
    }  
    
    //Checks if there is a case sensitive error
    else if(indexOfVariableValue.indexOf(indexOfVariableValue2) === -1 && indexOfVariableValue.toLowerCase().indexOf((indexOfVariableValue2.toLowerCase())) !== -1) {
        indexOfOutputResult.textContent = `-1. This is a case sensitive error! Error found!`
        indexOfOutputResult.style.height = 'auto'
        indexOfOutputResult.style.color = 'black'
    }

    //If the character was not found in the word
    else if(indexOfVariableValue.indexOf(indexOfVariableValue2) === -1) {
        indexOfOutputResult.textContent = `-1. The character was not found in the word.`
        indexOfOutputResult.style.height = 'auto'
        indexOfOutputResult.style.color = 'black'
    }

    //If a negative index was entered
    else if(indexOfNumberValue < 0) {
        indexOfOutputResult.textContent = `It's ${indexOfVariableValue.indexOf(indexOfVariableValue2, indexOfNumberValue)} as your negative index number was treated as 0.`
        indexOfOutputResult.style.height = 'auto'
        indexOfOutputResult.style.color = 'black'
    }

    //No errors
    else {
        indexOfOutputResult.textContent = `${indexOfVariableValue.indexOf(indexOfVariableValue2, indexOfNumberValue)}`
        indexOfOutputResult.style.height = 'auto'
        indexOfOutputResult.style.color = 'black'
    }

})

//lastIndexOf method and error handling
const lastIndexOfVariableContent = document.querySelector('#lastIndexOfVariableContent');
const lastIndexOfVariableContent2 = document.querySelector('#lastIndexOfVariableContent2');
const lastIndexOfNumber = document.querySelector('#lastIndexOfNumber');
const lastIndexOfButton = document.querySelector('#lastIndexOfButton');
const lastIndexOfOutputResult = document.querySelector('#lastIndexOfOutputResult');

lastIndexOfButton.addEventListener('click', function() {
    const lastIndexOfVariableValue = lastIndexOfVariableContent.value;
    const lastIndexOfVariableValue2 = lastIndexOfVariableContent2.value;
    const lastIndexOfNumberValue = lastIndexOfNumber.value;

    //Checks if input word is empty
    if(!/\S/.test(lastIndexOfVariableValue) === true) {
        lastIndexOfOutputResult.textContent = `Hey! We at least need a word to test for errors!`
        lastIndexOfOutputResult.style.height = 'auto'
        lastIndexOfOutputResult.style.color = 'black'
    }

    //Checks if character variable is empty
    else if(!/\S/.test(lastIndexOfVariableValue2) === true) {
        lastIndexOfOutputResult.textContent = `If no argument (character) is put in the brackets, JS returns ${lastIndexOfVariableValue.length - 1} (index of last character) as it think's you're searching for an empty string. Error found!`
        lastIndexOfOutputResult.style.height = 'auto'
        lastIndexOfOutputResult.style.color = 'black'
    }   
    
    //Checks if there is a case sensitive error
    else if(lastIndexOfVariableValue.lastIndexOf(lastIndexOfVariableValue2) === -1 && lastIndexOfVariableValue.toLowerCase().lastIndexOf((lastIndexOfVariableValue2.toLowerCase())) !== -1) {
        lastIndexOfOutputResult.textContent = `-1. This is a case sensitive error! Error found!`
        lastIndexOfOutputResult.style.height = 'auto'
        lastIndexOfOutputResult.style.color = 'black'
    }

    //If the character was not found in the word
    else if(lastIndexOfVariableValue.lastIndexOf(lastIndexOfVariableValue2) === -1) {
        lastIndexOfOutputResult.textContent = `-1. The character was not found in the word.`
        lastIndexOfOutputResult.style.height = 'auto'
        lastIndexOfOutputResult.style.color = 'black'
    }

    //If a negative index was entered
    else if(lastIndexOfNumberValue < 0) {
        lastIndexOfOutputResult.textContent = `It's ${lastIndexOfVariableValue.lastIndexOf(lastIndexOfVariableValue2, lastIndexOfNumberValue)} as your negative index number was treated as 0.`
        lastIndexOfOutputResult.style.height = 'auto'
        lastIndexOfOutputResult.style.color = 'black'
    }

    //If the index number is left empty, this is caught otherwise the default is 0 when converted to a number, which alters the results
    else if(lastIndexOfNumberValue === '') {
        lastIndexOfOutputResult.textContent = `${lastIndexOfVariableValue.lastIndexOf(lastIndexOfVariableValue2)}`
        lastIndexOfOutputResult.style.height = 'auto'
        lastIndexOfOutputResult.style.color = 'black'
    }

    //No errors
    else {
        lastIndexOfOutputResult.textContent = `${lastIndexOfVariableValue.lastIndexOf(lastIndexOfVariableValue2, Number(lastIndexOfNumberValue))}`
        lastIndexOfOutputResult.style.height = 'auto'
        lastIndexOfOutputResult.style.color = 'black'
    }

})