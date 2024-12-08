// document.getElementById("login")
// login button 
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function(){
    // console.log("click my btn");
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";

})

//deposit Btn
const depositBtn = document.getElementById("deposit-btn");


depositBtn.addEventListener("click", function(){
        // console.log("click my btn");
        const depositAmount = document.getElementById("deposit-amount").value;

        if (isNaN(depositAmount) || depositAmount === "") {
            alert("Please enter a valid deposit amount");
            return;
        }

        const depositNumber = parseFloat(depositAmount);

        const currentDeposit = document.getElementById("currentDeposit").innerText;
        const currentDepositNumber = parseFloat(currentDeposit);
        const totalDeposit = depositNumber + currentDepositNumber;

        document.getElementById("currentDeposit").innerText = totalDeposit;

        const currentBalance = document.getElementById("currentBalance").innerText;
        const currentBalanceDepositNumber = parseFloat(currentBalance);
        const totalBalanceDeposit = depositNumber + currentBalanceDepositNumber;

        document.getElementById("currentBalance").innerText = totalBalanceDeposit;

        
        document.getElementById("deposit-amount").value = "";

        // if(depositBtn==true){
        //     document.getElementById("currentDeposit").innerText ="";
        // }

})

//withdraw Btn
const withdrawBtn = document.getElementById("withdraw-btn");

withdrawBtn.addEventListener("click", function(){
        // console.log("click my btn");
        const withdrawAmount = document.getElementById("withdrawAmount").value;

        if (isNaN(withdrawAmount) || withdrawAmount === "") {
            alert("Please enter a valid withdraw amount");
            return;
        }

        const withdrawNumber = parseFloat(withdrawAmount);

        const currentWithdraw = document.getElementById("currentWithdraw").innerText;
        const currentWithdrawNumber = parseFloat(currentWithdraw);
        const totalWithdraw = withdrawNumber + currentWithdrawNumber;

        document.getElementById("currentWithdraw").innerText = totalWithdraw;

        const currentBalance = document.getElementById("currentBalance").innerText;
        const currentBalanceWithdrawNumber = parseFloat(currentBalance);
        const totalBalanceWithdraw = currentBalanceWithdrawNumber -withdrawNumber;

        document.getElementById("currentBalance").innerText = totalBalanceWithdraw;

        
        document.getElementById("withdrawAmount").value = "";

})

