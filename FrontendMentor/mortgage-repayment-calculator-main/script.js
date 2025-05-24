/**
 * @todo Collect form data from mortgage amount, term, type, and interest rate
 * @todo Use data to calculate monthly repayments & total repayment
 * @todo Update DOM with calculations
 */

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

    // Call function to update DOM
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
    const monthlyRate = interestRate / 12;
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
    const accumulator = Math.pow((1 + monthlyRate), numPayments);
    const monthlyPay = amount * accumulator / (accumulator - 1);

    return monthlyPay;
}