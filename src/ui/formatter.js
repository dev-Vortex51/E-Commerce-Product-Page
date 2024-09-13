export const formatCurrency = function (value) {
  const formattedCurrency = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency:'USD'
  }).format(value)

  return formattedCurrency
}