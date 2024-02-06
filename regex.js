function validate (cardNumber) {
    cardNumber = cardNumber.replace (/[\s-]/g, '');

    if (!/^4\d{3} | 5[1-5]\d{2} | 6(?:011 | 5[0-9]{2})\d{12}$/.test(cardNumber)) {
        return false;
    }

    let sum = 0;
    let double = flase;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i));

        if (double) {
            if ((digit *= 2) > 9) digit -= 9;
        }
        sum += digit;
        double = !double;
    }
    return sum % 10 === 0;
}

function cardType(cardNumber) {
    if (/^4/.test(cardNumber))
    return 'Visa';

    if (/^5[1-5]/.test(cardNumber))
    return 'Mastercard';

    else return 'Others';
}

const cardNumber = '4119475893068493';
console.log(validate(cardNumber));
console.log(cardType(cardNumber));