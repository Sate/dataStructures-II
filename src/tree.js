var makeTree= function(input){

var node = {
      payload:input,
      parent:null,
      children:[],
      addChild:function(thechild){
        thechild.parent = this; 
        this.children.push(thechild);
      },
      traverse:function(){
        console.log(this.payload);
        for(var i=0; i < this.children.length; i++){
          this.children[i].traverse();

        }
      },
      removeSelf:function(){
        
        var parentsChildren = this.parent.children;
        for(var DA_INDEX=0; DA_INDEX < parentsChildren.length; DA_INDEX++  ){
          var currentChildInTheLoop= parentsChildren[DA_INDEX];
          if(currentChildInTheLoop === this) {
            var beforeSelfInArray = this.parent.children.slice(0,DA_INDEX)
            var afterSelfInArray = this.parent.children.slice(DA_INDEX+1, this.parent.children.length+1);
            var MAHBABIES= this.children;
            var newArrayWeMade = beforeSelfInArray.concat(afterSelfInArray,MAHBABIES);
            this.parent.children= newArrayWeMade;
          }
        }

        for (var i in window){
              if(window[i] === this){delete window[i];}   
        }



          

      }
    };


// lionnode= {
//   payload: 'lion',
//   parent:null,
//   children:[],
//   addChild:function(bobcatnode){
//       bobcatnode.parent=this;
//   },
//   traverse,
// }

// bobcatnode={
//   payload: 'bobcat',
//   parent:lionnode,
//   children:[],
//   addChild,
//   traverse,
// }

  //       }
  //     }
  //   },

  //     }

  //   }


  // };
  return node;
}