var _ = require('lodash');

var prompt = require('prompt');

prompt.start();

prompt.get('board', function (err, result) {
  if (err) { return onErr(err); }
 
  var boardComponents = parseInput(result.board)
  displayBoard(boardComponents);

  //console.log(result.board.replace(/\|/g,'\n').replace(/-/g,' '));
});

// #|#.@-#-#|#$*-$-#|#3-$-#|#-..--#|#--*--#|7#
// #|#.@-#-#|#$*-$-#|#3-$-#|#-..--#|#--*--#|7#8
function parseInput(input){
  var boardRows = input.split("|")
  var boardComponents = boardRows.map(function(row){ 
    var components = row.split('') 
    var rowPositions = [];
    for(var i=0; i < components.length; i++){
      if(isNaN(components[i])){
        rowPositions.push(components[i]);
      }else{
        _.times(components[i], function(){
          rowPositions.push(components[i+1]);
        });
        i++;
      }
    }

    console.log(rowPositions);
    return rowPositions;
  });
  return boardComponents;
}

function displayBoard(boardComponents){
  boardComponents.forEach(function(row){
    console.log(row.join('').replace(/-/g, ' '));
  });
}


function onErr(err) {
  console.log(err);
  return 1;
}
