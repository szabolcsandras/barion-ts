import FundingInformation from "../FundingInformation";
import PaymentState from "../PaymentState";
import PaymentTransaction from "../PaymentTransaction";

test('PaymentState', () => {
  const o = {
    PaymentId: 'a',
    PaymentRequestId: 'b',
    POSId: 'c',
    POSName: 'd',
    POSOwnerEmail: 'e',
    POSOwnerCountry: 'f',
    Status: 'g',
    PaymentType: 'h',
    AllowedFundingSources: ["i"],
    FundingSource: 'j',
    FundingInformation: new FundingInformation({
      AuthorizationCode: "k",
    }),
    RecurrenceType: 'l',
    TraceId: 'm',
    GuestCheckout: true,
    CreatedAt: 'n',
    StartedAt: 'p',
    CompletedAt: 'q',
    ValidUntil: 'r',
    ReservedUntil: 's',
    DelayedCaptureUntil: 't',
    Transactions: [
      new PaymentTransaction({
        POSTransactionId: "u",
      })
    ],
    Total: 1,
    Currency: "v",
    SuggestedLocale: "x",
    FraudRiskScore: 2,
    CallbackUrl: "y",
    RedirectUrl: "z",
  };
  const r = new PaymentState(o);
  expect(r.PaymentId).toBe(o.PaymentId);
  expect(r.PaymentRequestId).toBe(o.PaymentRequestId);
  expect(r.POSId).toBe(o.POSId);
  expect(r.POSName).toBe(o.POSName);
  expect(r.POSOwnerEmail).toBe(o.POSOwnerEmail);
  expect(r.POSOwnerCountry).toBe(o.POSOwnerCountry);
  expect(r.Status).toBe(o.Status);
  expect(r.PaymentType).toBe(o.PaymentType);
  expect(r.AllowedFundingSources).toStrictEqual(o.AllowedFundingSources);
  expect(r.FundingSource).toStrictEqual(o.FundingSource);
  expect(r.FundingSource).toStrictEqual(o.FundingSource);
  expect(r.FundingSource).toStrictEqual(o.FundingSource);
  expect(r.FundingInformation.AuthorizationCode)
    .toBe(o.FundingInformation.AuthorizationCode);
  expect(r.RecurrenceType).toBe(o.RecurrenceType);
  expect(r.TraceId).toBe(o.TraceId);
  expect(r.GuestCheckout).toBe(o.GuestCheckout);
  expect(r.CreatedAt).toBe(o.CreatedAt);
  expect(r.StartedAt).toBe(o.StartedAt);
  expect(r.CompletedAt).toBe(o.CompletedAt);
  expect(r.ValidUntil).toBe(o.ValidUntil);
  expect(r.ReservedUntil).toBe(o.ReservedUntil);
  expect(r.DelayedCaptureUntil).toBe(o.DelayedCaptureUntil);
  expect(r.ReservedUntil).toBe(o.ReservedUntil);
  expect(r.Transactions[0].POSTransactionId)
    .toBe(o.Transactions[0].POSTransactionId);
  expect(r.Total).toBe(o.Total);
  expect(r.Currency).toBe(o.Currency);
  expect(r.SuggestedLocale).toBe(o.SuggestedLocale);
  expect(r.FraudRiskScore).toBe(o.FraudRiskScore);
  expect(r.CallbackUrl).toBe(o.CallbackUrl);
  expect(r.RedirectUrl).toBe(o.RedirectUrl);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});