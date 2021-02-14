/**
 * Creates a new invitation in the Database.
 * 
 * An invitation is represented by an entry in the player list with the email only.
 */

insert into playerList
  (email)
  values ($email);
