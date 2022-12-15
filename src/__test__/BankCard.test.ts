import BankCard from "../BankCard";

test('BankCard', () => {
  const o = {
    MaskedPan: "a",
    BankCardType: 'b',
    ValidThruYear: 'c',
    ValidThruMonth: 'd',
  };
  const r = new BankCard(o);
  expect(r.MaskedPan).toBe(o.MaskedPan);
  expect(r.BankCardType).toBe(o.BankCardType);
  expect(r.ValidThruYear).toBe(o.ValidThruYear);
  expect(r.ValidThruMonth).toBe(o.ValidThruMonth);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});