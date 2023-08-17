/**
1. Add event handler with the withdraw button
2. Get the withdraw amount from the withdraw input field
2-5. Aslo make sure to convert the input into a number by using parseFloat

3. Get previous withdraw total
4. Calculate total withdraw amount
4-5. Set total withdraw amount

5. Get the previous balance total
6. calculate new balance total
6-5. Set the new balance total

7. Step-7 Clear the input field
**/

// step-1
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // Step-2
    const withdrawField = document.getElementById('withdraw-input-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step-7
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a number');
        return;
    }

    // Step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalStrinng = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalStrinng);

    // Step-5
    const balanceTotaElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotaElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap Er Bank A Ato Taka Nai');
        return;
    };

    // Step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotaElement.innerText = currentBalanceTotal;

})