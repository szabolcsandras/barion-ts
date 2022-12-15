import NameInformationStructure from "../NameInformationStructure";
import UserInformation from "../UserInformation";

test('UserInformation', () => {
  const o = {
    Name: new NameInformationStructure({
      FirstName: "a"
    }),
    Email: 'b',
  };
  const r = new UserInformation(o);
  expect(r.Name.FirstName).toBe(o.Name.FirstName);
  expect(r.Email).toBe(o.Email);
  expect(Object.keys(o).sort())
    .toStrictEqual(Object.keys(r).sort());
});