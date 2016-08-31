var _ = require('lodash');

var prompt = require('prompt');

prompt.start();

prompt.get('board', function(err, result) {
  if (err) { return onErr(err); }
 
  var boardComponents = parseInput(result.board)
  playGame(boardComponents);
  
});

function playGame(boardComponents){
  if(isWon(boardComponents)){
    console.log("You win!");
    return;
  };

  displayBoard(boardComponents);
  prompt.get('move', function(err, result){
    playGame(getNextBoard(boardComponents, result.move));
  });
};

function keeperBoardPosition(boardComponents){
  var position = {};
  boardComponents.forEach(function(row, rowIndex){
    row.forEach(function(column, columnIndex){
      if(_.includes(["@","+"], column)){
        position.rowIndex = rowIndex;
        position.columnIndex = columnIndex;
      }
    });
  });
  return position;
};

function newPosition(coordinates, move){
  var rowIndex = coordinates.rowIndex;
  var columnIndex = coordinates.columnIndex;
  switch(move){
    case 'up':
      return {rowIndex: rowIndex - 1, columnIndex: columnIndex};
    case 'down':
      return {rowIndex: rowIndex + 1, columnIndex: columnIndex};
    case 'left':
      return {rowIndex: rowIndex, columnIndex: columnIndex - 1};
    case 'right':
      return {rowIndex: rowIndex, columnIndex: columnIndex + 1};
  };
};

function positionValue(boardComponents, rowIndex, columnIndex){
  return boardComponents[rowIndex][columnIndex];
};

function isValidMove(boardComponents, coordinates){
  var rowIndex = coordinates.rowIndex;
  var columnIndex = coordinates.columnIndex;
  return positionValue(boardComponents, rowIndex, columnIndex) != '#';
};

function updateBoard(boardComponents, keeperPosition, targetPosition){
  boardComponents[keeperPosition.rowIndex][keeperPosition.columnIndex] = '-';
  boardComponents[targetPosition.rowIndex][targetPosition.columnIndex] = '@';
  return boardComponents;
};

function getNextBoard(boardComponents, move){
  var keeperPosition = keeperBoardPosition(boardComponents);
  var targetPosition = newPosition(keeperPosition, move);
  if(!isValidMove(boardComponents, targetPosition)){
    return boardComponents;
  };

  boardComponents = updateBoard(boardComponents, keeperPosition, targetPosition)

  //switch(move){
  //  case 'up':
  //    moveUp(boardComponents)
  //  case 'down':
  //  case 'left':
  //  case 'right':
  //  default :
  //    console.log('invalid move');
  //    return boardComponents;
  //};
  return boardComponents;
};

function isWon(boardComponents){
  return !_.includes(_.flattenDeep(boardComponents), '$');
};

// #|#.@-#-#|#$*-$-#|#3-$-#|#-..--#|#--*--#|7#
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
