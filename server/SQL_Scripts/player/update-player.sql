/**
 * Updates the name of a player in the player list
 * Updating the player name also removes it from the pending invitations.
 */

update playerList 
  set playerName = '$name'
  where email = '$email'
