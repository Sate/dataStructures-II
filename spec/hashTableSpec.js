describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = makeHashTable();
  });

  it("should have a method named 'insert'", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));

  });

  it("should have a method named 'retrieve'", function() {
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should insert a key value pair and retrieve the value by the key", function() {
    hashTable.insert('mary', 'marys_cats');
    var hashy = hashTable.hashFunction('mary');
    expect(hashTable.boxOfValues[hashy]).toEqual('marys_cats');

  });

//if the key will override the last key


  // add more tests here to test the functionality of hashTable
});