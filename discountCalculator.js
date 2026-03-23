function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger
    for (let i = 1; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}
module.exports = calculateDiscountedPrice;

/*Loop starts at 1 instead of 0
Loop runs quantity - 1 times
So one item is missing from total price calculation*/

/*debugging steps include:
debug> cont
debug> next
debug> repl
> quantity
> pricePerItem
> i
> totalPrice*/

//Fixed code would be 
function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger;

    for (let i = 0; i < quantity; i++) { 
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}
module.exports = calculateDiscountedPrice;