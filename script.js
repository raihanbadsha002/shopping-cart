// iPhone 11 128GB Black====Select ProductQuantity================//
document.getElementById("PhonePlusBtn").addEventListener("click", () =>{
IncreaseProductQuantity("PhoneCurrentProduct", "phonePrice");

  
})
document.getElementById("PhoneMinusBtn").addEventListener("click", () =>{
    DecreaseProductQuantity("PhoneCurrentProduct", "phonePrice");
    
})


// iPhone 11 Silicone Case - Black====Select ProductQuantity========// 

document.getElementById("CasePlusBtn").addEventListener("click", () =>{
    const casePrice = document.getElementById("casePrice");
    const product = document.getElementById("CaseCurrentProduct");
   if (product.value >= 5) {
       product.value = 5;
       alert("Can buy maximum five phones");
       product.style.background = "black";
       product.style.color = "white";     
   } else {
      product.value = parseInt(product.value) + 1; 
      casePrice.innerText = parseInt(casePrice.innerText) + 59;
      productTotalAmount.innerText = parseInt(productTotalAmount.innerText) + 59;
      totalAmount.innerText = parseInt(productTotalAmount.innerText)
   }

// const casePrice = document.getElementById("casePrice");
// casePrice.innerText = parseInt(casePrice.innerText) + 59; 

// IncreaseProductQuantity("CaseCurrentProduct");
  
})

document.getElementById("CaseMinusBtn").addEventListener("click", () =>{ 
    const casePrice = document.getElementById("casePrice");
    const product = document.getElementById("CaseCurrentProduct");
    if (product.value <=0) {
        product.value = 0;
        alert("Negative quantity not allowed")
    } else {
        product.style.background = "#F6F5FA";
        product.style.color = "black"; 
        product.value = parseInt(product.value) - 1;
       casePrice.innerText = parseInt(casePrice.innerText) - 59;
       productTotalAmount.innerText = parseInt(productTotalAmount.innerText) -59; 
       totalAmount.innerText = parseInt(productTotalAmount.innerText)
      
   }


// const casePrice = document.getElementById("casePrice");
// casePrice.innerText = parseInt(phonePrice.innerText) - 59; 

// DecreaseProductQuantity("CaseCurrentProduct");
})

// Add Total Amount===================//
const productTotalAmount = document.getElementById("productTotalAmount");
const productTax = document.getElementById("productTax");
const totalAmount = document.getElementById("totalAmount");



// All About Function=============////

function IncreaseProductQuantity(id, phone) {
    const product = document.getElementById(id);
    const phonePrice = document.getElementById(phone);
   if (product.value >= 5) {
       product.value = 5;
       alert("Can buy maximum five phones");
       product.style.background = "black";
       product.style.color = "white";     
   } else {
      product.value = parseInt(product.value) + 1; 
      phonePrice.innerText = parseInt(phonePrice.innerText) + 1219;
      productTotalAmount.innerText = parseInt(productTotalAmount.innerText) + 1219;
      totalAmount.innerText = parseInt(productTotalAmount.innerText) + parseInt(productTax.innerText);
   }
}

function DecreaseProductQuantity(id, phone) {
    const product = document.getElementById(id);
    const phonePrice = document.getElementById(phone);
    if (product.value <=0) {
        product.value = 0;
        alert("Negative quantity not allowed")
    } else {
        product.style.background = "#F6F5FA";
        product.style.color = "black"; 
        product.value = parseInt(product.value) - 1;
        phonePrice.innerText = parseInt(phonePrice.innerText) - 1219;
        productTotalAmount.innerText = parseInt(productTotalAmount.innerText) - 1219;
        totalAmount.innerText = parseInt(productTotalAmount.innerText) + parseInt(productTax.innerText);
    } 
}
