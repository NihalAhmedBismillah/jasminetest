beforeEach(function () {
  jasmine.addMatchers({
    toBeEqual: function () {
      return {
        compare: function (actual, expected) {
          var actual = actual;
          return {
            pass: actual === expected
          }
        }
      };
    }
  });
});
