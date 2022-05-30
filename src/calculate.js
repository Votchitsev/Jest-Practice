export default function calculateTotal(purchases) {
  return purchases.reduce((total, item) => total + (item.count * item.price), 0);
}

module.exports = {
  calculateTotal,
};
