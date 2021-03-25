select *
    from gagged
    where endTime is null
    and playerId=$player;
