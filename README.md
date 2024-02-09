# RegEx-to-identify-credit-and-debit-cards
This is a code with a simple function that validates credit/debit cards in this case Visa, Master and American Express. 
The function has an `if` statement which takes in **ReGex** logics as parameters and returns the card type in the console depending on the cardNumber entered in the variable `cardNumber`.

# EXPLAINING THE REGEX LOGIC BEHIND THE VALIDATIONS.
The function `validateCard()` takes a parameter **cardNumber** which is the card number to be validated.

To replace whitespaces and dashes, the `replace()` method is used. It takes a **ReGex** parameter `/[s\-]/g`, it matches any whitespace `\s` or dash `-` globally `g` within the `cardNumber` string and replaces them with an empty string.

To valiadate the different card types and the return the specific card type, `if else` statements are used to write the conditions of each card type taking **ReGex** logics as parameters.

# REGEX LOGIC FOR VISA CARD VALIDATION
The `^4` matches a string that starts with 4, this is because all Visa cards start with a 4. 
`[0-9]` ensures the string consists of numbers 0-9 and `{15}` means that after the initial number 4, 15 other digits are needed to complete the 16 digit card.

# REGEX LOGIC FOR MASTERCARD VALIDATION
The `^5` matches a string that starts with a 5, additionally `[1-5]` coming immediately after `^5` means that after the initial 5, the next number must be between 1-5 because MasterCard starts with a 5 followed by a nymber between 1-5. `[0-9]{14}` means after the first two digits, 14 other numbers from 0-9 are needed to complete a 16 digit MasterCard.

# REGEX LOGIC FOR AMERICAN EXPRESS CARD VALIDATION
The `^3` matches a string that starts with a 3 followed by either 4 or 7 `[47]` because AMEX cards start with 34 or 37. `[0-9]{13}` means after the initial two digits, 13 other numbers from 0-9 are needed to complete a 15 digit AMEX card.

If none of the above ReGex conditions are met then the function returns **Unknown Card**
