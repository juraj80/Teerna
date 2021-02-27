import { Command } from './Message';

const playerSpecificOptional = "This command can be player specific.";
const playerSpecific = "This command accepts player names as parameters to restrict the action to them.";
const sceneSpecificOptional = "This command can be scene specific";
const crudOptional = "This command accepts create/read/update/delete arguments";

export function registerDiceCommands() {
  [
    ['coin', 'Throw a 2 sided coin.', {sides: 2}],
    ['d2', 'Throw a 2 sided coin.', {sides: 2}],
    ['d4', 'Throw a 4 sided dice.', {sides: 4}],
    ['d6', 'Throw a 6 sided dice.', {sides: 6}],
    ['d8', 'Throw a 8 sided dice.', {sides: 8}],
    ['d10', 'Throw a 10 sided dice.', {sides: 10}],
    ['d12', 'Throw a 12 sided dice.', {sides: 12}],
    ['d20', 'Throw a 20 sided dice.', {sides: 20}]
  ].forEach(d => Command.register(d[0], 'dice', d[1], d[2]));
}

export function registerAccessControlCommands() {
  [
    ['gag', "Gag a player that will no longer be able to chat in this game"],
    ['ungag', "Allow a gagged player to chat in this game again."],
    ['kick', "Log a player out of the game and block the player to log in again"],
    ['unkick',"Allow a blocked player to log in to this game."],
    ['invite', "Invite a player to join the game"],
    ['uninvite', "Cancel the invitation for a player to join the game"]
  ].forEach(d => Command.register(d[0], 'accessControl', d[1]));
}

export function communicationControlCommands() {
  [
    ['whisper', `Whisper to a player. ${playerSpecificOptional}`],
    ['talk', `Talk to a player. ${playerSpecificOptional}`],
    ['shout', `Shout to anyone who can hear. ${sceneSpecificOptional}`],
  ].forEach(d => Command.register(d[0], 'accessControl', d[1]));
}

export function playerCommands() {
  [
    ["list", "list of players CRUD"]
  ].forEach(d => Command.register(d[0], 'player', d[1]));
}

export function sceneCommands() {
  [
    ['play', "Start playing the provided media to all players. You can specify which player should the media be played to by adding their names after the media"],
    ['scene', "Sets the scene for the game. You can specify"],
  ].forEach(c => Command.register(c[0], 'scene', c[1]));
}

export function documentCommands() {
  [
    ["doc", `Manages documents. ${crudOptional}`],
    ["docSend", `Sends a given document.  ${playerSpecificOptional}`],
    ["docHide", `Hides a given document. ${playerSpecificOptional}`],
    ["docShow", `Displays a given document. ${playerSpecificOptional}`],
  ].forEach(c => Command.register(c[0], 'document', c[1]));
}

export function allCommands() {
  registerDiceCommands();
  registerAccessControlCommands();
  communicationControlCommands();
  playerCommands();
  sceneCommands();
  documentCommands();
}
