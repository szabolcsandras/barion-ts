import BarionError from "../BarionError";

test('BarionError', () => {
  const o = {
    ErrorCode: 'a',
    Title: 'b',
    Description: "c",
    EndPoint: 'd',
    AuthData: 'e',
    HappenedAt: 'f',
    PaymentId: 'g',
  };
  const r = new BarionError(o);
  expect(r.ErrorCode).toBe(o.ErrorCode);
  expect(r.Title).toBe(o.Title);
  expect(r.Description).toBe(o.Description);
  expect(r.EndPoint).toBe(o.EndPoint);
  expect(r.AuthData).toBe(o.AuthData);
  expect(r.HappenedAt).toBe(o.HappenedAt);
  expect(r.PaymentId).toBe(o.PaymentId);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});