import PaymentResult from "../PaymentResult";
import ProcessedTransaction from "../ProcessedTransaction";

test('PaymentResult', () => {
  const o = {
    PaymentId: 'a',
    PaymentRequestId: 'b',
    Status: 'c',
    QRUrl: 'd',
    Transactions: [
      new ProcessedTransaction({
        POSTransactionId: 'e'
      }),
    ],
    GatewayUrl: 'f',
    CallbackUrl: 'g',
    RedirectUrl: 'h',
    ThreeDSAuthClientData: 'i',
    TraceId: 'j',
  };

  const r = new PaymentResult(o);
  expect(r.PaymentId).toBe(o.PaymentId);
  expect(r.PaymentRequestId).toBe(o.PaymentRequestId);
  expect(r.Status).toBe(o.Status);
  expect(r.QRUrl).toBe(o.QRUrl);
  expect(r.Transactions[0].POSTransactionId)
    .toBe(o.Transactions[0].POSTransactionId);
  expect(r.GatewayUrl).toBe(o.GatewayUrl);
  expect(r.CallbackUrl).toBe(o.CallbackUrl);
  expect(r.RedirectUrl).toBe(o.RedirectUrl);
  expect(r.ThreeDSAuthClientData).toBe(o.ThreeDSAuthClientData);
  expect(r.TraceId).toBe(o.TraceId);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});