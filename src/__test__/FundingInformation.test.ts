import BankCard from "../BankCard";
import FundingInformation from "../FundingInformation";

test('FundingInformation', () => {
  const o = {
    BankCard: new BankCard({
      MaskedPan: "4444"
    }),
    AuthorizationCode: 'a',
    ProcessResult: 'b',
  };
  const r = new FundingInformation(o);
  expect(r.BankCard.MaskedPan).toBe(o.BankCard.MaskedPan);
  expect(r.AuthorizationCode).toBe(o.AuthorizationCode);
  expect(r.ProcessResult).toBe(o.ProcessResult);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});