/**
 * Returns a list of players with pending invitations
 */

select email from playerList where playerName is null;
