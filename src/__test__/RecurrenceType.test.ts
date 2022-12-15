import RecurrenceType from "../RecurrenceType";

test('RecurrenceType', () => {
  const o = {
    RecurrenceType: 1,
    MerchantInitiatedPayment: 2,
    RecurringPayment: 3,
  };
  const r = new RecurrenceType(o);
  expect(r.RecurrenceType).toBe(o.RecurrenceType);
  expect(r.MerchantInitiatedPayment).toBe(o.MerchantInitiatedPayment);
  expect(r.RecurringPayment).toBe(o.RecurringPayment);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});