/**
  Creates a new player in the database;

  Players are not created as GM. This need to be set later in order to use an atomic operation that guarantees that there will only be one Game Master.
 */

insert into playerList
    (playerName, isGM)
     values ($name, FALSE);
