/**
  Replaces the Game Master of the game.
  @params $player: The id of the player that will be the next Game Master.
 */
begin transaction ;
    update playerList set isGM=false where isGM=true;
    update playerList set isGM=true where playerID = $player;
commit;