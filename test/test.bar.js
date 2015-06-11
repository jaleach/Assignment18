describe("Bar", function(){

  beforeEach(function() {
    bar = new Bar();
  });

  describe("squared", function(){
    it("Squares a given number", function(){
      expect(bar.squared(2)).eq(4);
    });
  });
  describe("cubed", function(){
    it("Cubes a given number", function(){
      expect(bar.cubed(3)).eq(27);
    });
  });
  describe("exponentOf", function(){
    it("Exponent a given number", function(){
      // expect(bar.exponentOf(2)).to.equal(4)
    });
  });
  describe("reverseString", function(){
    it("Reverses the string", function(){
      expect()

    });
  });
  describe("cipher", function(){
    it("Should return a cipher string", function(){
      // expect(bar.cipher("h")).eq("p");
    });
  });
  describe("decipher", function(){
    it("Should return a decipher string", function(){
    });
  });

  describe("rot13", function(){
    it("Should return a string", function(){
      expect(bar.rot13("Elvis is alive")).to.equal();
    });
  });
});
