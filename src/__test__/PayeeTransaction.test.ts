import PayeeTransaction from "../PayeeTransaction";

test('PayeeTransaction', () => {
  const o = {
    POSTransactionId: 'a',
    Payee: 'b',
    Total: 1,
    Comment: 'c',
  };
  const r = new PayeeTransaction(o);
  expect(r.POSTransactionId).toBe(o.POSTransactionId);
  expect(r.Payee).toBe(o.Payee);
  expect(r.Total).toBe(o.Total);
  expect(r.Comment).toBe(o.Comment);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});