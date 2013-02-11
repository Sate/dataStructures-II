// Note: don't use an array to do this.
var makeLinkedList = function(){
  var linkedList = {
  	
    head: null,
  	insert: function(contents){
      var newNode = {
        contents:contents,
        next: this.head,
        search: function(search){
          return (this === search) || this.next.search(search);
        }
      }
      
        this.head = newNode;
    },
   
    contains: function(search){
      if (search === this.head){
        return true;
      }else{
        return this.head.next.search(search);
      }


    }

};
  return linkedList;
};

// //head will be 94
// linkedList.insert(52);

// var newnode1= {
//   contents:52,
//   next: null;
// }

// linkedList.head= newnode1;

// linkedList.insert('cat');

// var newnode2={
//   contents:'cat',
//   next: newnode1
// }
// linkedList.head= newnode2;

