jQuery( document ).ready(function() {
    var orderbutton, cartbutton;

    setTimeout(function(){ 

  var orderbutton2 = document.getElementById("place_order");
} , 5000); 

  if (orderbutton) {
  orderbutton.addEventListener("click", function() {
    var pricespan = document.querySelector(".order-total .woocommerce-Price-amount").textContent;
    pricespan = parseFloat(pricespan.replace('€', ''));
    event.preventDefault();
    window.alert("sometext");
 /*   gtag('event', 'Submit', {
        'event_category': 'Order',
        'value': pricespan       
      }); */
      
  });



  }



setTimeout(function(){

    var cartbutton = document.getElementsByClassName("single_add_to_cart_button ");  


  if (cartbutton.length > 0) {
    cartbutton[0].addEventListener("click", function() {
        event.preventDefault();
        console.log("cart");
     /*   gtag('event', 'Submit', {
            'event_category': 'AddToCart'
          }); */
    });
    }

} , 1000);
  
});


