import ProcessedTransaction from "../ProcessedTransaction";

test('ProcessedTransaction', () => {
  const o = {
    POSTransactionId: 'a',
    TransactionId: 'b',
    Status: 'c',
    Currency: 'd',
    TransactionTime: 'e',
  };
  const r = new ProcessedTransaction(o);
  expect(r.POSTransactionId).toBe(o.POSTransactionId);
  expect(r.TransactionId).toBe(o.TransactionId);
  expect(r.Status).toBe(o.Status);
  expect(r.Currency).toBe(o.Currency);
  expect(r.TransactionTime).toBe(o.TransactionTime);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});