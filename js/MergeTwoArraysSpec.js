var expect = chai.expect;

describe("Merge Two Arrays", function() {

  describe("constructor", function() {
    // the module should return a function
    it("should return a function", function() {
      var mergeFunc = new MergeTwoArrays();
      expect(typeof mergeFunc).to.equal("function");
    });
  });

  describe("merging", function() {
    var mergeFunc = new MergeTwoArrays();

      // test case as per e-mail
    it("should merge [1,2,5] and [2,3]", function() {
      var arr1 = [1,2,5],
          arr2 = [2,3];

      expect(mergeFunc(arr1, arr2).length).to.equal(5);
      expect(mergeFunc(arr1, arr2).toString()).to.equal('1,2,2,3,5');
    });

      // let's test one more
    it("should merge [1,2,3,7,10] and [2,3,4,15]", function() {
      var arr1 = [1,2,3,7,10],
          arr2 = [2,3,4,15];
      expect(mergeFunc(arr1, arr2).length).to.equal(9);
      expect(mergeFunc(arr1, arr2).toString()).to.equal('1,2,2,3,3,4,7,10,15');
    })


  });
});
