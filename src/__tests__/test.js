import calculateTotal from '../calculate';

test('basic_test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test('calculateTotal sum', () => {
  const list = [
    {
      id: 1235,
      name: 'Something',
      count: 3,
      price: 1000,
    },
    {
      id: 179,
      name: 'Something else',
      count: 5,
      price: 1000,
    },
  ];

  const result = calculateTotal(list);
  expect(result).toBe(8000);
});
