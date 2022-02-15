

function getClick(clickId, updateId, price){
   document.getElementById(clickId).addEventListener('click', function(){
      updatePrice(updateId, price);
      
   })
}
getClick('sixteenGB', 'memory-cost', 350);
getClick('eightGB', 'memory-cost', 0);
getClick('ssd1', 'storage-cost', 0);
getClick('ssd2', 'storage-cost', 300);
getClick('ssd3', 'storage-cost', 500)
getClick('paid-delivery', 'delivery-cost', 20)
getClick('free-delivery', 'delivery-cost', 0)

function updatePrice(updateId, price){
   // memory cost calculation
   const inputMemoryCost = document.getElementById(updateId);
   inputMemoryCost.innerText = price;
//    total price calculation
   const bestPrice = document.getElementById('best-price').innerText;
   const extraMemoryCost = document.getElementById('memory-cost').innerText;
   const extraStorageCost = document.getElementById('storage-cost').innerText;
   const extraDeliveryCost = document.getElementById('delivery-cost').innerText;
   const totalPrice = parseFloat(bestPrice)+parseFloat(extraMemoryCost)+parseFloat(extraStorageCost)+parseFloat(extraDeliveryCost);

   const totalPriceDefault = document.getElementById('total-price');
   totalPriceDefault.innerText = totalPrice;
}

// Promo code 
document.getElementById('apply-btn').addEventListener('click', function(){
   const input = document.getElementById('promo-input');
   const totalPrice = document.getElementById('total-price');
   if(input.value === 'pHero'){
      const discount = parseFloat(totalPrice.innerText)*0.2;
      const discountPrice = parseFloat(totalPrice.innerText)-discount;

      totalPrice.innerText = discountPrice;
      input.value = ''
   }
   else{
      alert("Coupon code doesn't match")
   }
})

