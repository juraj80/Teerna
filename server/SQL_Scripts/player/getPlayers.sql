/**
 Fetches up to N players from the database.

  N is $limit - $offset

  @param $offset: the number of players to skip from the beginning
  @param $limit: the
 */

select * from playerList
    where playerName like $partialName
    order by playerName
    limit $offset, $limit
;
