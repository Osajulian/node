const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// console.log(process.argv);

yargs.command({
  command: 'add',
  describe: 'adding new note',
  builder: {
    title: {
      describe: 'Note taking',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    console.log('title: ' + argv.title);
    console.log('body: ' + argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'remove note',
  handler: function() {
    console.log('Removing new note');
  }
});

yargs.command({
  command: 'list',
  describe: 'list notes',
  handler: function() {
    console.log('Listing notes');
  }
});

yargs.command({
  command: 'read',
  describe: 'read notes',
  handler: function() {
    console.log('Reading notes');
  }
});

// console.log(yargs.argv);
yargs.parse();
