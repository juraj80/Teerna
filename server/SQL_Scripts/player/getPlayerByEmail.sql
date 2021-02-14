/**
 Fetches a player by email
 */

select * from playerList
    where email =  '$email'
    limit 1
;
