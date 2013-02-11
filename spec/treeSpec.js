describe("tree", function() {
  var lionnode;

  beforeEach(function() {
    lionnode = makeTree('lion');
  });

  it("should have an array of children", function() {
    expect(lionnode.children).toEqual(jasmine.any(Array));
  });

  it("should have a method named 'addChild'", function() {
    expect(lionnode.addChild).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'traverse'", function() {
    expect(lionnode.traverse).toEqual(jasmine.any(Function));
  });

  describe("addChild", function(){
    it("should add a child to the var node", function() {
      var bobcatnode= makeTree('bobcat');
      lionnode.addChild(bobcatnode);
      expect(bobcatnode.parent).toEqual(lionnode);
      expect(lionnode.children[0]).toEqual(bobcatnode);
    });
  });


  describe("traverse", function(){
    it("should log all the payloads in the tree", function(){
      var bobcatnode = makeTree('bobcat');
      var bobcatsisternode = makeTree('bobcatsister');
      lionnode.addChild(bobcatnode);
      lionnode.addChild(bobcatsisternode);
      lionnode.traverse();
      // check the console, it works!
    });
  });

  describe("removeSelf", function(){
      it("should remove the child from the parent", function(){
        var bobcatnode = makeTree('bobcat');
        var bobcatsisternode = makeTree('bobcatsister');
        lionnode.addChild(bobcatnode);
        lionnode.addChild(bobcatsisternode);
        var childrenBeforeRemoving = bobcatnode.parent.children;
        bobcatnode.removeSelf();
        expect(lionnode.children).not.toEqual(childrenBeforeRemoving);
      });

      it("should add the removed node's children to it's parent node's children", function(){
        var bobcatnode = makeTree('bobcat');
        var bobcatsisternode = makeTree('bobcatsister');
        var bobcatbabynode = makeTree('bobcatbaby');
        lionnode.addChild(bobcatnode);
        lionnode.addChild(bobcatsisternode);
        bobcatnode.addChild(bobcatbabynode);
        bobcatnode.removeSelf();
        for (var child in lionnode.children){if (lionnode.children[child].payload === 'bobcatbaby') {var bobcatbabyfound = true;}}
        expect(bobcatbabyfound).toEqual(true);




      });

  });
// is the last index cut at the end


  // Add more tests here to test the functionality of tree.
  // If you're feeling frisky, have your tree nodes track their
  // parent and add a function called removeFromParent.
});