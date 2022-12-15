import Item from "../Item";
import PayeeTransaction from "../PayeeTransaction";
import PaymentTransaction from "../PaymentTransaction";

test('PayeeTransaction', () => {
  const o = {
    POSTransactionId: 'a',
    Payee: 'b',
    Total: 1,
    Comment: 'c',
    PayeeTransactions: [
      new PayeeTransaction({
        Payee: 'd'
      }),
    ],
    Items: [
      new Item({
        Name: 'e'
      }),
    ],
  };
  const r = new PaymentTransaction(o);
  expect(r.POSTransactionId).toBe(o.POSTransactionId);
  expect(r.Payee).toBe(o.Payee);
  expect(r.Total).toBe(o.Total);
  expect(r.Comment).toBe(o.Comment);
  expect(r.PayeeTransactions[0].Payee).toBe(o.PayeeTransactions[0].Payee);
  expect(r.Items[0].Name).toBe(o.Items[0].Name);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});