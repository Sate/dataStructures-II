describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head which is null at first", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(linkedList.head).toEqual(null);
  });

  // its head should be null at first

  it("should have a method named 'insert'", function() {
    expect(linkedList.insert).toEqual(jasmine.any(Function));
  });

  it("should change the head after insert", function(){
    var headBeforeInsert = linkedList.head;
    linkedList.insert(52);
    var headAfterInsert = linkedList.head;
    expect(headBeforeInsert).not.toEqual(headAfterInsert);
    expect(headAfterInsert.contents).toEqual(52);
    expect(headAfterInsert).not.toEqual(null);
  });

  
  it ("should have a method `contains`", function(){
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should after you insert something, the list should `contains` that thing", function() {
    linkedList.insert(87);
    linkedList.insert(82);
    var thenode= linkedList.head;
    linkedList.insert(55);
    expect(linkedList.contains(thenode)).toEqual(true);
  });
  //after you insert many things, the list should `contains` one of those thing things
});