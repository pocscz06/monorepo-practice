/**
 * Collects form data to pass into other functions
 * @param {SubmitEvent} e - Submit event to prevent default
 * @returns {void}
 */
function collectFormData(e) {
    e.preventDefault();

    const form = document.querySelector('.form');
    const formData = new FormData(form);

    const {amount, interestRate, mortgageTerm} = extractFormValues(formData);
    const {monthlyRate, numPayments} = convertFormValues(amount, interestRate, mortgageTerm);
    const monthlyPayment = monthlyPayCalc(amount, monthlyRate, numPayments);
    const totalPayment = totalPayCalc(monthlyPayment, numPayments);

    // Call function to update DOM
    updateDOM(monthlyPayment, totalPayment);
    
}

document.querySelector('.form').addEventListener('submit', collectFormData);

/**
 * Extracts values from formData, parses them into numbers, 
 * sanitizes if needed, and passes them into another function
 * @param {FormData} formData - User-submitted form data object
 * @returns {Object} - Object containing amount, interestRate, and mortgageTerm
 */
function extractFormValues(formData) {
    const amount = parseFloat(formData.get('amount-input').replace(/,/g, ""));
    const interestRate = parseFloat(formData.get('rate-input'));
    const mortgageTerm = parseInt(formData.get('term-input'));
    
    return {amount, interestRate, mortgageTerm};
}

/**
 * Converts interestRate (annual) into a monthly rate and 
 * mortgageTerm (years) to months
 * @param {number} amount - Mortgage amount 
 * @param {number} interestRate - Annual interest rate
 * @param {number} mortgageTerm - Mortgage term in years
 * @returns {Object} - Object containing monthlyRate and numPayments
 */
function convertFormValues(amount, interestRate, mortgageTerm) {
    const monthlyRate = (interestRate / 100) / 12;
    const numPayments = mortgageTerm * 12;

    return {monthlyRate, numPayments};
}

/**
 * Calculates monthly mortgage payment 
 * @param {number} amount 
 * @param {number} monthlyRate - Monthly interest rate
 * @param {number} numPayments - Total number of payments 
 * @returns {number} monthlyPay - Monthly payment amount
 */
function monthlyPayCalc(amount, monthlyRate, numPayments) {
    if (monthlyRate === 0) {
        return amount / numPayments;
    }

    const accumulator = Math.pow((1 + monthlyRate), numPayments);
    const monthlyPay = amount * (monthlyRate * accumulator) / (accumulator - 1);

    return monthlyPay;
}

/**
 * 
 * @param {number} monthlyPay 
 * @param {number} numPayments 
 * @returns {number} totalPay
 */
function totalPayCalc(monthlyPay, numPayments) {
    const totalPay = monthlyPay * numPayments;

    return totalPay;
}

/**
 * Updates results section with calculated results
 * @param {number} monthlyPay 
 * @param {number} totalPay 
 * @returns {void}
 */
function updateDOM(monthlyPay, totalPay) {
    const monthlyOutput = document.querySelector('#monthlyOutput');
    const totalOutput = document.querySelector('#totalOutput');

    monthlyOutput.innerHTML = `&pound;${monthlyPay.toLocaleString('en-GB', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
    totalOutput.innerHTML = `&pound;${totalPay.toLocaleString('en-GB', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;

    toggleHide();
}

function toggleHide() {
    const emptySection = document.querySelector('.results__section--empty');
    const calcSection = document.querySelector('.results__section--calculated');

    emptySection.classList.toggle('hidden');
    calcSection.classList.toggle('hidden');
}