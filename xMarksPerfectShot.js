const finalPosition = function (moves) {
    // Your code in here ...
    let northvar = 0;
    let svar = 0;
    let wvar = 0;
    let evar = 0;
    let arrayIndex = [];
    let x = 0,
      y = 0;
  
    for (let i = 0; i < moves.length; i++) {
      if (moves[i] === "north") {
        x++;
      } else if (moves[i] === "west") {
        y--;
      } else if (moves[i] === "south") {
        x--;
      } else if (moves[i] === "east") {
        y++;
      }
    }
    return [y, x];
  };
  
  const moves = ["north", "north", "west", "west", "north", "east", "north"];
  
  console.log(finalPosition(moves));
  