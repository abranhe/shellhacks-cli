#!/usr/bin/env node
'use strict';
const meow = require('meow');
const open = require('opn');

const web = 'https://shellhacks.net';
const wtp = 'https://shellhacks-2018.devpost.com/';
const github = 'https://github.com/ShellHackFIU';
const discord = 'https://discordapp.com/invite/upefiu';
const badges = 'https://github.com/abranhe/shellhacks';

const cli = meow(`
	Usage:
	 $ shellhacks [options|flags...]

	Options:
    web             Opens ShellHack website
    wtp             Where to post your projects (devpost)
    badges          View how to add a Shellhacks badge
    github          Opens ShellHack Github Account
    discord         Opens UPEFIU discord server

  Flags:
		-f, --feedback  Send a feedback
		-h, --help      Show help message and close
		-v, --version   View package Version

	Example
	 $ shellhacks --feedback
    Join the Discord server app for support!
   $ shellhacks web
`,{
	flags: {
		help: {
			type: 'boolean',
			alias: 'h'
		},
		version: {
			type: 'boolean',
			alias: 'v'
		},
		feedback: {
			type: 'boolean',
			alias: 'f'
		}
	}
});

if(!cli.input.length == 1 || cli.input.length > 1) {
  cli.showHelp();
}

if(cli.flags.feedback) {
  console.log('Join the Discord server app for support!\n');
  cli.showHelp();
}

if(cli.input[0] === 'badges') {
  open(badges);
  process.exit();
} else {
  cli.showHelp();
}

if(cli.input[0] === 'wtp') {
  open(wtp);
  process.exit();
} else {
  cli.showHelp();
}

if(cli.input[0] === 'discord') {
  open(discord);
  process.exit();
} else {
  cli.showHelp();
}

if(cli.input[0] === 'web') {
  open(web);
  process.exit();
} else {
  cli.showHelp();
}

if(cli.input[0] === 'github') {
  open(github);
  process.exit();
} else {
  cli.showHelp();
}
