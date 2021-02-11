CREATE TABLE battleMap (tokenID INTEGER NOT NULL PRIMARY KEY, tokenName VARCHAR(100), tokenPosX INT, tokenPosY INT);

CREATE TABLE playerList (playerID INTEGER NOT NULL PRIMARY KEY, isGM BOOL, playerName VARCHAR(20));

CREATE TABLE fileList (fileID INTEGER NOT NULL PRIMARY KEY, fileName VARCHAR(100), fileLocation VARCHAR(100), permissionID int);

CREATE TABLE filePermissions (permissionID INTEGER NOT NULL PRIMARY KEY, fileID INT, playerID INT, FOREIGN KEY (fileID) REFERENCES fileList(fileID), FOREIGN KEY (playerID) REFERENCES playerList(playerID));
