// iPhone 11 Silicone Case - Black====Select ProductQuantity========// .01***
// Case Button event handler======///

// document.getElementById("CasePlusBtn").addEventListener("click", () =>{
//     // Before Call a function=============///
//         // const casePrice = document.getElementById("casePrice");
//         // const CaseProduct = document.getElementById("CaseCurrentProduct");
//         // const productIncrease = parseInt(CaseProduct.value); //  parseInt include--1
//         // const productNewCount = productIncrease + 1; //  parseInt include--2
//         // CaseProduct.value = productNewCount; //  parseInt include--3
//         // const caseTotal =  productNewCount * 59;
//         // casePrice.innerText = caseTotal; 
//     // After Call a function===============///
//          caseEventHandler(true);     

//    })

// document.getElementById("CaseMinusBtn").addEventListener("click", () =>{
//     // Before Call a function=============///
//         // const casePrice = document.getElementById("casePrice");
//         // const CaseProduct = document.getElementById("CaseCurrentProduct");
//         // const productIncrease = parseInt(CaseProduct.value); //  parseInt include--1
//         // const productNewCount = productIncrease - 1; //  parseInt include--2
//         // CaseProduct.value = productNewCount; //  parseInt include--3
//         // const caseTotal =  productNewCount * 59;
//         // casePrice.innerText = caseTotal;  
//    // After Call a function===============///
//          caseEventHandler(false);
//    })

//*******/ All About Function===================================////   
//    function caseEventHandler(isIncrease) {
//     const casePrice = document.getElementById("casePrice"); // Product Price Id Get
//     const CaseProduct = document.getElementById("CaseCurrentProduct"); // input Id Get
//     const productIncrease = parseInt(CaseProduct.value);
//     // const productNewCount = productIncrease + 1; 
//     let CaseProductCount = productIncrease;     
//     if (isIncrease == true ) {
//         CaseProductCount = productIncrease + 1;
//     } else if( isIncrease == false ) {
//         CaseProductCount = productIncrease - 1;   
//     }
//     CaseProduct.value = CaseProductCount;
//     const caseTotal =  CaseProductCount * 59;
//     casePrice.innerText = caseTotal; 
//    }




// ===============================xxxxx================================xxxxx================================////

 // iPhone 11 Silicone Case - Black====Select ProductQuantity========// .02***
 // Case Button event handler======///

// document.getElementById("CasePlusBtn").addEventListener("click", () =>{
//     // Before Call a function=============///
//         // const casePrice = document.getElementById("casePrice"); // Product Price Id Get
//         // const CaseProduct = document.getElementById("CaseCurrentProduct"); // input Id Get
//         // CaseProduct.value = parseInt(CaseProduct.value) + 1; // parseInt include in a one line
//         // casePrice.innerText = (CaseProduct.value) * 59;
    
//     // After Call a function===============///
//          caseEventHandler(true);
//    })  

// document.getElementById("CaseMinusBtn").addEventListener("click", () =>{
//     // Before Call a function=============///
//         // const casePrice = document.getElementById("casePrice"); // Product Price Id Get
//         // const CaseProduct = document.getElementById("CaseCurrentProduct"); // input Id Get
//         // CaseProduct.value = parseInt(CaseProduct.value) - 1; // parseInt include in a one line
//         // casePrice.innerText = (CaseProduct.value) * 59;

//     // After Call a function===============///
//          caseEventHandler(false);
//    }) 


//*******/ All About Function===================================////   
   
//    function caseEventHandler(isIncrease) {
//     const casePrice = document.getElementById("casePrice"); // Product Price Id Get
//     const CaseProduct = document.getElementById("CaseCurrentProduct"); // input Id Get

//     if (isIncrease == true ) {
//         CaseProduct.value = parseInt(CaseProduct.value) + 1; // parseInt include in a one line
//     } else if( CaseProduct.value == 0) { 
//         alert("You are on a wrong track");
//     }
//     else if (isIncrease == false) {  
//         CaseProduct.value = parseInt(CaseProduct.value) - 1; // parseInt include in a one line 
        
//     }
//     casePrice.innerText = (CaseProduct.value) * 59;
//    }

// iPhone 11 128GB Black====Select ProductQuantity================//

// function phoneEventHandler(isIncrease) {
//     const phonePrice = document.getElementById("phonePrice"); // Product Price Id Get
//     const phoneProduct = document.getElementById("phoneCurrentProduct"); // input Id Get

//     if (isIncrease == true ) {
//         phoneProduct.value = parseInt(phoneProduct.value) + 1; // parseInt include in a one line
//     } else if( phoneProduct.value == 0) { 
//         alert("You are on a wrong track");
//     }
//     else if (isIncrease == false) {  
//         phoneProduct.value = parseInt(phoneProduct.value) - 1; // parseInt include in a one line 
        
//     }
//     phonePrice.innerText = (phoneProduct.value) * 1219;
//     }


    // Combination Two function include in a function===============******=============/////////////////////////

    function productEventHandler(product, isIncrease) {
        const productPrice = document.getElementById(product + 'Price'); //  Get Product Price Id
        const productInput = document.getElementById(product + 'Product'); // Get input Id 
    
        if (isIncrease == true ) {
            productInput.value = parseInt(productInput.value) + 1; // parseInt include in a one line
        } else if( productInput.value == 0) { 
            alert("You are on a wrong track");
        }
        else if (isIncrease == false) {  
            productInput.value = parseInt(productInput.value) - 1; // parseInt include in a one line 
            
        }
        // Product Price condition***
         if (product == 'phone') {
            productPrice.innerText = (productInput.value) * 1219; 
         }
         else if (product == 'case'){
            productPrice.innerText = (productInput.value) * 59;
         }

        //  Total Price Calculation****
        const productSubTotal = document.getElementById("subTotalAmount");
        const productTaxAmount = document.getElementById("taxAmount");
        const productTotalAmount = document.getElementById("totalAmount");
        
        productSubTotal.innerText = document.getElementById("phoneProduct").value * 1219 + document.getElementById("caseProduct").value * 59;
        productTaxAmount.innerText = Math.round(productSubTotal.innerText * 0.1);
        productTotalAmount.innerText = parseInt(productSubTotal.innerText) + parseInt(productTaxAmount.innerText);
        
        
        }
