document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.getElementById("addToCartBtn");
    const productCheckboxes = document.querySelectorAll(".product-checkbox");
    const quantityInputs = document.querySelectorAll(".quantity-input");
    const errorMessage = document.getElementById("error-message");

    addToCartBtn.addEventListener("click", function () {
        let error = true;

        // Check if at least one product is selected and its quantity is greater than 0
        for (let i = 0; i < productCheckboxes.length; i++) {
            if (productCheckboxes[i].checked && quantityInputs[i].value > 0) {
                error = false;
                break;
            }
        }

        if (error) {
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
            // Implement cart functionality here (e.g., adding selected products to the cart)
            alert("Products added to the cart!");
        }
    });
});
