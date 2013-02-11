// Note: don't use an object to store the inserted elements.
var makeHashTable = function(){
  var hashTable = {
    hashFunction: function(str){
    var hash = 0;
    if (str.length == 0) {
      return hash};
    for (i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      hash = ((hash<<5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash % 999;
    },
    boxOfValues: [],
    insert:function(key, value){
      var hash = this.hashFunction(key);
      this.boxOfValues[hash] = value;
      
    },
    retrieve:function(key){
      return resultValue;
    }
  };
  return hashTable;

};


// {
//   mary:'123',
//   john:'245'
// }

// insert('john',245)
// hash(john)=32876;
// values[32876]=245;

// retrieve('john');
// hash('john');
// values


// keys= ['mary','john']
// values= ['123','245']

// obj.john











// DON'T WORRY ABOUT CODE BELOW HERE
