import {Command} from "./Message.js";
import {registerDiceCommands} from "./Commands.js";



test('Parses dice commands.', () => {
  registerDiceCommands();
  const tests = [
    {command: 'd4', quantity: 1, arguments: [], text: '/d4'},
    {command: 'd4', quantity: 5, arguments: [], text: '/5d4'},
    {command: 'd4', quantity: 5, arguments: ['foo', 'bar'], text: '/5d4 foo bar'},
    {command: 'd4', quantity: 5, arguments: ['foo', 'bar'], text: '/5d4    foo    bar'},
  ];
  tests.forEach(t => {
    const parsed = Command.fromText(t.text);
    expect(parsed.name).toEqual(t.command);
    expect(parsed.args).toEqual(t.arguments);
    expect(parsed.quantity).toEqual(t.quantity);
  });
});

test('Warns about possible errors in commands', () => {
  const tests = [
    { message: 'Should not separate the slash and the command.', text: '/ d4'},
    { message: 'Slash should be in the start of the line.', text: ' /5d4'},
    { message: 'Command arguments can only use alphanumeric characters.', text: '/5d4 foo -bar'},
    { message: 'Command arguments can only use alphanumeric characters.', text: '/5d4  foo=bar'},
  ];
  tests.forEach(t => {
    expect(Command.findErrors(t.text))
      .toEqual(t.message);
  });
});

//test('Parses gag commands.');
//test('Parses whisper commands.');
//test('Parses shout commands.');
//test('Parses scenes commands.');