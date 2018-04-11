window.onload=function(){
    setTimeout(function() {
        var orderbutton = document.getElementById("place_order");
        
        if (orderbutton) {
            orderbutton.addEventListener("click", function() {
                var pricespan = document.querySelector(".order-total .woocommerce-Price-amount").textContent;
                pricespan = parseFloat(pricespan.replace('€', ''));
                gtag('event', 'Submit', {
                    'event_category': 'Order',
                    'value': pricespan
                });
            });
        }

    }, 5000);

    setTimeout(function() {
        var cartbutton = document.getElementsByClassName("single_add_to_cart_button ");
        if (cartbutton.length > 0) {
            cartbutton[0].addEventListener("click", function() {
                gtag('event', 'Submit', {
                    'event_category': 'AddToCart'
                });
            });
        }
    }, 2000);

};