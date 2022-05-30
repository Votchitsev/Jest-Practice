export function calculateTotal(purchases) {
    return purchases.reduce((total, item) => {
        return total + (item.count * item.price); 
    }, 0);
}


module.exports = {
    calculateTotal
}
