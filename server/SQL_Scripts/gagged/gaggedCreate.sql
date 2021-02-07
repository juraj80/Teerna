insert into gagged
    (playerId, startTime)
    values
    ($player, strftime('%s', 'now'));

