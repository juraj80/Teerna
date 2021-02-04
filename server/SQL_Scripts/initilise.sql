
CREATE TABLE battleMap (tokenID INT AUTO_INCREMENT PRIMARY KEY, tokenName VARCHAR(100), tokenPosX INT, tokenPosY INT);

CREATE TABLE playerList (playerID INT AUTO_INCREMENT PRIMARY KEY, isGM BOOL, playerName VARCHAR(20));

CREATE TABLE fileList (fileID INT AUTO_INCREMENT PRIMARY KEY, fileName VARCHAR(100), fileLocation VARCHAR(100), permissionID int);

CREATE TABLE filePermissions (permissionID INT AUTO_INCREMENT PRIMARY KEY, fileID INT, playerID INT, FOREIGN KEY (fileID) REFERENCES fileList(fileID), FOREIGN KEY (playerID) REFERENCES playerList(playerID));