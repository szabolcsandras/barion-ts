import PaymentCompletion from "../PaymentCompletion";

test('PaymentCompletion', () => {
  const o = {
    PaymentId: 'a',
    PaymentRequestId: 'b',
    PaymentStatus: 'c',
    IsSuccessful: false,
    TraceId: 'd',
  };
  const r = new PaymentCompletion(o);
  expect(r.PaymentId).toBe(o.PaymentId);
  expect(r.PaymentRequestId).toBe(o.PaymentRequestId);
  expect(r.PaymentStatus).toBe(o.PaymentStatus);
  expect(r.TraceId).toBe(o.TraceId);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});