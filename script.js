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
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositeNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositeNumber;
    // console.log(totalDeposit);
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    updateSpanText("currentDeposit", depositNumber);

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance); 
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;

    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current); 
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;

}





