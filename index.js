const charAtNumber = document.querySelector('#charAtNumber');
const charAtVariableContent = document.querySelector('#charAtVariableContent');
const charAtOutputResult = document.querySelector('#charAtOutputResult');
const charAtButton = document.querySelector('#charAtButton');

charAtButton.addEventListener('click', function() {
    const charAtVariableValue = charAtVariableContent.value;
    const charAtNumberValue = parseInt(charAtNumber.value);
    charAtOutputResult.textContent = charAtVariableValue.charAt(charAtNumberValue);
});