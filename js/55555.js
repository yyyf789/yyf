 const quantityInputs = document.querySelectorAll('.quantity-input');
    const priceElements = document.querySelectorAll('.price');
    
   
    quantityInputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            
            const quantity = parseInt(input.value);
            
            const basePrice = parseFloat(priceElements[index].textContent.replace('$', ''));
           
            const totalPrice = quantity * basePrice;
            
            priceElements[index].textContent = `$${totalPrice.toFixed(2)}`;
        });
    });