import NameInformationStructure from "../NameInformationStructure";

test('Item', () => {
  const o = {
    LoginName: 'a',
    FirstName: 'b',
    LastName: 'c',
    OrganizationName: 'd',
  };
  const r = new NameInformationStructure(o);
  expect(r.LoginName).toBe(o.LoginName);
  expect(r.FirstName).toBe(o.FirstName);
  expect(r.LastName).toBe(o.LastName);
  expect(r.OrganizationName).toBe(o.OrganizationName);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});