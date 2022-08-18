   function getValueFromText(elementId) {
      const elementBody = document.getElementById(elementId);
      const elementValueString = elementBody.innerText;
      const elementValue = parseFloat(elementValueString);
      return elementValue;
   };

   function calculateDiscount(value, discount){
      const discountAmount = value * (discount / 100);
      const priceAfterPrice = value - discountAmount;
      return priceAfterPrice;
   }

   function setPrice(elementId, value){
      const targetElement = document.getElementById(elementId);
      targetElement.innerText = value;
   }

   document.getElementById('discount-button').addEventListener('click', function () {
      // get main price
      const currentPrice = getValueFromText('price');

      // get discount amount in percentage
      const discount = getValueFromText('discount');

      // get discount code from buyer
      const inputCodeElement = document.getElementById('discout-code');
      const inputCode = inputCodeElement.value;

      // console.log(inputCode);
      const discountCode = 'DOM';
      if(!(inputCode === discountCode)){
         alert('Discount Code is not available')
         inputCodeElement.value = '';
         return;
      }

      
      // set the input
      inputCodeElement.value = 'You Already Got The Offer';
      inputCodeElement.disabled = "true";

      // set the final price for buying
      const offerPrice = calculateDiscount(currentPrice, discount)
      setPrice('price', offerPrice)
   });