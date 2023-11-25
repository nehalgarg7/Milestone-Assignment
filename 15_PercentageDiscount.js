function calculatePercentageDiscount (originalPrice, discountedPrice) 
{
    return  (( (originalPrice - discountedPrice) / originalPrice ) * 100 ).toFixed(2);
}

console.log('Discount: ' + calculatePercentageDiscount(400,300) + ' %');