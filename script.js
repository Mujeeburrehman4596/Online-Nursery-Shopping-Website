
    let cartCount = 0;

    function addToCart(plantName, price) {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
        alert(plantName + " has been added to your cart for $" + price);
    }
