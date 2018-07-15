const MathOp = require('../../lib/jasmine_examples/MathOp');

describe("Math operation :", () => {

  let math;

  beforeEach(() => {
    math = new MathOp();
  });

  it("should be able to add to num", () => {
    expect(math.add(1, 3)).toEqual(4);
  });

  it("should be able to sub to num", () => {
    expect(math.sub(4, 2)).toEqual(2);
  });

  it("should be able to mult to num", () => {
    expect(math.mult(3, 3)).toEqual(9);
  });

  it("should be able to div to num", () => {
    expect(math.div(4, 2)).toEqual(2);
  });
});

