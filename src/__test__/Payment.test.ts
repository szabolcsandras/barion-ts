import Payment from "../Payment";
import PaymentTransaction from "../PaymentTransaction";

test('Payment', () => {
  const o = {
    POSKey: 'a',
    PaymentType: 'b',
    ReservationPeriod: "c",
    DelayedCapturePeriod: 'd',
    PaymentWindow: "x",
    GuestCheckOut: true,
    RecurrenceId: 'e',
    FundingSources: ["f"],
    PaymentRequestId: 'g',
    RedirectUrl: 'h',
    CallbackUrl: 'i',
    Transactions: [new PaymentTransaction({
      POSTransactionId: 'j',
    })],
    Locale: "k",
    Currency: "l",
  };

  const r = new Payment(o);
  expect(r.POSKey).toBe(o.POSKey);
  expect(r.PaymentType).toBe(o.PaymentType);
  expect(r.ReservationPeriod).toBe(o.ReservationPeriod);
  expect(r.DelayedCapturePeriod).toBe(o.DelayedCapturePeriod);
  expect(r.PaymentWindow).toBe(o.PaymentWindow);
  expect(r.GuestCheckOut).toBe(o.GuestCheckOut);
  expect(r.RecurrenceId).toBe(o.RecurrenceId);
  expect(r.FundingSources).toStrictEqual(o.FundingSources);
  expect(r.PaymentRequestId).toBe(o.PaymentRequestId);
  expect(r.RedirectUrl).toBe(o.RedirectUrl);
  expect(r.CallbackUrl).toBe(o.CallbackUrl);
  expect(r.Transactions[0].POSTransactionId)
    .toBe(o.Transactions[0].POSTransactionId);
  expect(r.Locale).toBe(o.Locale);
  expect(r.Currency).toBe(o.Currency);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});