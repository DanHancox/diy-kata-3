const expectExport = require("expect");
const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits("12345")).toBe[5, 4, 3, 2, 1]
    expect(numberToReversedDigits("678910")).toBe[10, 9, 8, 7, 6]
    expect(numberToReversedDigits("4828")).toBe[8, 2, 8, 4]
  });
});