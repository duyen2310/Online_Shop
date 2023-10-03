<?php
$products = array(
    // Define your product information here
    // Example:
    array(
        "name" => "Product 1",
        "price" => 19.99,
        "description" => "Description of Product 1",
        "image" => "product1.jpg",
        "onSale" => true,
        "regularPrice" => 24.99,
        "salePrice" => 19.99,
        "quantity" => 10
    ),
    // Add more product entries
);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Store</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<h1>Welcome to the Online Store</h1>
<div class="product-list">
    <?php foreach ($products as $product): ?>
        <div class="product">
            <img src="<?php echo $product["image"]; ?>" alt="<?php echo $product["name"]; ?>">
            <h2><?php echo $product["name"]; ?></h2>
            <p>Price: $<?php echo $product["price"]; ?></p>
            <label for="quantity_<?php echo $product["name"]; ?>">Quantity:</label>
            <input type="number" id="quantity_<?php echo $product["name"]; ?>" class="quantity-input" value="1">
            <input type="checkbox" id="checkbox_<?php echo $product["name"]; ?>" class="product-checkbox">
        </div>
    <?php endforeach; ?>
</div>
<button id="addToCartBtn">Add to Cart</button>
<div id="error-message" class="hidden">Please select at least one product and ensure quantity is greater than 0.</div>
<script src="script.js"></script>
</body>
</html>
