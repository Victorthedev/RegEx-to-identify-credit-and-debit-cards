function validateCard(cardNumber) {
    // Remove spaces and dashes
    cardNumber = cardNumber.replace(/[\s-]/g, '');

    // Validate card types
    if (/^4[0-9]{15}/.test(cardNumber)) {
        return 'Visa card';
    } else if (/^5[1-5][0-9]{14}/.test(cardNumber)) {
        return 'MasterCard';
    } else if (/^3[47][0-9]{13}/.test(cardNumber)) {
        return 'American Express card';
    } else {
        return 'Unknown card';
    }
}

// Example usage:
const cardNumber = '5257 3829 3847 4396';
console.log(validateCard(cardNumber));

//Change the cardNumber variable as needed