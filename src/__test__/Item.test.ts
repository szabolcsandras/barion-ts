import Item from "../Item";

test('Item', () => {
  const o = {
    Name: 'a',
    Description: 'b',
    ImageUrl: 'c',
    Quantity: 1,
    Unit: 'd',
    UnitPrice: 2,
    ItemTotal: 3,
    SKU: 'e',
  };
  const r = new Item(o);
  expect(r.Name).toBe(o.Name);
  expect(r.Description).toBe(o.Description);
  expect(r.ImageUrl).toBe(o.ImageUrl);
  expect(r.Quantity).toBe(o.Quantity);
  expect(r.Unit).toBe(o.Unit);
  expect(r.UnitPrice).toBe(o.UnitPrice);
  expect(r.ItemTotal).toBe(o.ItemTotal);
  expect(r.SKU).toBe(o.SKU);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});