/**
  Replaces the Game Master of the game.
  @params $player: The id of the player that will be the next Game Master.
 */
    update playerList set isGM=TRUE where playerID=$player ;