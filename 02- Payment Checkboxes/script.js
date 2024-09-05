const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const submitBtn = document.getElementById("submitBtn");
const paymentSelected = document.getElementById("paymentSelected");

submitBtn.onclick = function(){
    if(visabtn.checked){
        paymentSelected.textContent = "You are using VISA !";
    }
    else if(mastercardbtn.checked){
        paymentSelected.textContent = "You are using MasterCard !";
    }
    else if(paypalbtn.checked){
        paymentSelected.textContent = "You are using PayPal !";
    }
    else{
        paymentSelected.textContent = "Please select a payment method.";
    }

}
