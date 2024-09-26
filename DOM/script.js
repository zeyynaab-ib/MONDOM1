document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    function updateTotalPrice() {
        let totalPrice = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.getAttribute('data-price'));
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            totalPrice += price * quantity;
        });
        totalPriceElement.textContent = totalPrice + '€';
    }

    cartItems.forEach(item => {
        const plusButton = item.querySelector('.plus');
        const minusButton = item.querySelector('.minus');
        const quantityElement = item.querySelector('.quantity');
        const removeButton = item.querySelector('.remove-button');
        const likeButton = item.querySelector('.like-button');

        // Gérer le bouton +
        plusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });

        // Gérer le bouton -
        minusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });

        // Gérer le bouton Supprimer
        removeButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        // Gérer le bouton Aimer
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
        });
    });

    updateTotalPrice();  // Initialiser le prix total
});
