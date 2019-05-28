/**
 * Mocking client-server processing
 */

function cart(method) {
  let res = null;
  switch (method) {
    case 'POST':
      res = 'checkout successful';
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = cart;
