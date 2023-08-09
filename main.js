// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]
const valid6 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// The function serves to search for invalid cards
const validateCred = array => {
    let temp;
    let arraySecondDigit = [];
    for(let i = array.length - 2; i > -1; i -= 2) {
        temp = array[i] * 2;
        if(temp > 9) {
            temp -= 9;
        }
        arraySecondDigit.push(temp);
    }
    let sum = 0;
    for(let i = 0; i < arraySecondDigit.length; i++) {
        sum += arraySecondDigit[i];
    }
    if (array.length % 2 === 0) {
        for(let i = 1; i < array.length; i +=2) {
            sum += array[i];
        }
    } else {
        for(let i = 0; i < array.length; i +=2) {
            sum += array[i];
        }
    }
    
     if(sum % 10 === 0) {
         return true;
     } else {
         return false;
     }
}

//  The function serves to search for invalid cards in an 
//  array of cards and save them in an individual array.
const findInvalidCards = arr => { 
    const falseCard = [];

    for (let i = 0; i < arr.length; i++) {
        let creditCard = arr[i];
        if(validateCred(creditCard) === false) {
            falseCard.push(arr[i]);
        }
    }
    return falseCard;
}

// The function serves to search for companies wich relised invalid cards.
const idInvalidCardCompanies = array => {
    let falseCompanies = [];

    for (let i = 0; i < array.length; i++) {
        let company = array[i];
        if (company[0] === 3) {
            falseCompanies.push('Amex');
        } else if (company[0] === 4) {
            falseCompanies.push('Visa');
        } else if (company[0] === 5) {
            falseCompanies.push('Mastercard');
        } else if (company[0] === 6) {
            falseCompanies.push('Discover');
        } else {
            console.log('Company not found');
        }
    }

    return falseCompanies;
};

console.log(validateCred(mystery5));
console.log(findInvalidCards(batch));
let cov = findInvalidCards(batch);
console.log(idInvalidCardCompanies(cov));








