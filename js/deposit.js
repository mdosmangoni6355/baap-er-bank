// Step-1
document.getElementById('deposite-btn').addEventListener('click', function(){
    // Step-2
    const depositeField = document.getElementById('deposite-input-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    // Step-7
    depositeField.value = '';

    if(isNaN(newDepositeAmount)){
        alert('Please provide a number');
        return;
    }

    // Step-3
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalStrinng = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalStrinng);

    // Step-4
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = currentDepositeTotal;

    // Step-5
    const balanceTotaElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotaElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotaElement.innerText = currentBalanceTotal;

})