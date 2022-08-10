function superbowlWin(arr) {
  const game = arr.find(({ result }) => result === 'W');
  if(game) {
  return game.year;
  } else {
    return undefined;
  }
}