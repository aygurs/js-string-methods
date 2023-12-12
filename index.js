const charAtNumber = document.querySelector('#charAtNumber');
const charAtVariableContent = document.querySelector('#charAtVariableContent');
const charAtOutputResult = document.querySelector('#charAtOutputResult');
const charAtButton = document.querySelector('#charAtButton');

charAtButton.addEventListener('click', function() {
    const charAtVariableValue = charAtVariableContent.value;
    const charAtNumberValue = Number(charAtNumber.value);

    if(!/\S/.test(charAtVariableValue) === true) {
        charAtOutputResult.textContent = `This method doesn't work without a word! Error found!`
        charAtOutputResult.style.height = 'auto'
    }

    else if(charAtNumberValue < 0) {
        charAtOutputResult.textContent = `Positive numbers only! Error found!`
        charAtOutputResult.style.height = 'auto'
    }

    else if(!Number.isInteger(charAtNumberValue)) {
        charAtOutputResult.textContent = `It's ${charAtVariableValue.charAt(charAtNumberValue)}, but it ignores your decimal and uses the integer portion only. Error found!`;
        charAtOutputResult.style.height = 'auto'
        console.log(charAtNumberValue)
    }

    else if((charAtNumberValue+1) > charAtVariableValue.length) {
        charAtOutputResult.textContent = `There isn't that many characters! Error found!`
        charAtOutputResult.style.height = 'auto'
    }

    else if(!Number(charAtNumberValue)) {
        charAtOutputResult.textContent = `indexNumber needs to be a number, or if no number is input, it will make it 0 by default. Error found!`
        charAtOutputResult.style.height = 'auto'
    }
    else {
        charAtOutputResult.textContent = charAtVariableValue.charAt(charAtNumberValue);
        console.log(charAtNumberValue)
    }
});