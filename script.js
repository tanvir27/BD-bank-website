// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");

    loginArea.style.display = "none";

    const transactionArea = document.getElementById('transaction-area');

    transactionArea.style.display = 'block';
    
})

// deposite button event handler
    const depositBtn = document.getElementById('addDeposit');
    depositBtn.addEventListener("click", function(){
    const depositNumber = getInputNumber("depositAmount");

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositeNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositeNumber;
    // console.log(totalDeposit);
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    if (depositNumber < 0){
        alert("Deposite Number Can not Be Deposit")
    }
    else{
        updateSpanText("currentDeposit", depositNumber);
        updateSpanText("currentBalance", depositNumber);
        document.getElementById("depositAmount").value = "";
    }
   

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance); 
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;

    
})

// withdraw button event handler 
    const withdrawBtn = document.getElementById("addWithdraw");
    withdrawBtn.addEventListener("click", function(){
        const withdrawNumber = getInputNumber("withdrawAmount");
        updateSpanText("currentWithdraw", withdrawNumber);
        updateSpanText("currentBalance", -1 * withdrawNumber);
        document.getElementById("withdrawAmount").value = "";
    })
    
    function getInputNumber(id){
        const Amount = document.getElementById(id).value;
        const AmountNumber = parseFloat(Amount);
        return AmountNumber;
    }

    function updateSpanText(id, addedNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current); 
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;

}





