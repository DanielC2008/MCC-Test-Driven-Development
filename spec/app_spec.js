describe("Hero", function() {

  let subject;
  beforeEach(function() {
    subject = new Hero();
    opponent = new Hero();
  });

  describe("Name", function() {

    it("has a default name of... ", function() {
      expect(subject.getName()).toBe("");
    });

    it("can set a name of...", function (){ 
      subject.setName("Bob");
      expect(subject.getName()).toBe("Bob");
    });
  });

  describe("Alignment", function(){

    it("has a default alignment of ...", function() {
      expect(subject.getAlignment()).toBe("Invalid");
    });

    it("can set alignment of...", function(){
      subject.setAlignment("Evil");
      expect(subject.getAlignment()).toBe("Evil");
    });

    it("can return Invalid alignment", function(){
      subject.setAlignment("somethingElse");
      expect(subject.getAlignment()).toBe("Invalid");
    });
  });

  describe("Armor Class & Hit Points", function() {

    it("has a default armor class of...", function() {
      expect(subject.getArmorClass()).toBe(10);
    });

    it("has default hit points of...", function() {
      expect(subject.getHitPoints()).toBe(5);
    })
  })

  describe("Character can attack...", function () {

    it("has attack of..", function() {
      expect(subject.attack()).toBe(18);
    });

    it("must meet or beat opponents AC", function() {
      subject.attack = 15;
      opponent.armorClass;
      expect.(subject.testToHit)

    })
  });

});
