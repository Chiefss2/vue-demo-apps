/**
 * Mocking client-server processing
 */
function shop(method) {
  let res = null;
  switch (method) {
    case 'GET':
      res = [
        { id: 1, title: 'HUAWEI Mate 20', price: 3999, inventory: 2 },
        { id: 2, title: 'APPLE 8s', price: 2999, inventory: 0 },
        { id: 3, title: 'OPPO R17', price: 2999, inventory: 5 }
      ];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = shop;
