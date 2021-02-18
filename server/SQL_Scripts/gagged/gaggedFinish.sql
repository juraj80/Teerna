update gagged
    set endTime = strftime('%s','now')
    where playerId = $player and endTime is null
;
