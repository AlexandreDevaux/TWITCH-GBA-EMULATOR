const tmi = require('tmi.js');
const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: '**************', // replace *** by your twitch username
		password: 'oauth:**************' // replace *** by your oauth code
	},
	channels: [ '***************' ] /// replace *** by your twitch username
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
	if(self) return;
    if(message.toLowerCase() === '!down') 
    {
        console.log(tags.username);
        const spawn = require("child_process").spawn; // lance le sous-process
        const pythonProcess = spawn('python',["keys/DOWN.py"]); // execute le script script.py
		client.say(channel, `@${tags.username}, DOWN received !`);
	}
	if(message.toLowerCase() === '!r') 
    {
        console.log(tags.username);
        const spawn = require("child_process").spawn; // lance le sous-process
        const pythonProcess = spawn('python',["keys/E.py"]); // execute le script script.py
		client.say(channel, `@${tags.username}, R received !`);
	}
	if(message.toLowerCase() === '!left') 
    {
        console.log(tags.username);
        const spawn = require("child_process").spawn; // lance le sous-process
        const pythonProcess = spawn('python',["keys/LEFT.py"]); // execute le script script.py
		client.say(channel, `@${tags.username}, LEFT received !`);
	}
	if(message.toLowerCase() === '!right') 
    {
        console.log(tags.username);
        const spawn = require("child_process").spawn; // lance le sous-process
        const pythonProcess = spawn('python',["keys/RIGHT.py"]); // execute le script script.py
		client.say(channel, `@${tags.username}, RIGHT received !`);
	}
	if(message.toLowerCase() === '!up') 
    {
        console.log(tags.username);
        const spawn = require("child_process").spawn; // lance le sous-process
        const pythonProcess = spawn('python',["keys/UP.py"]); // execute le script script.py
		client.say(channel, `@${tags.username}, UP received !`);
	}
	if(message.toLowerCase() === '!a') 
    {
        console.log(tags.username);
        const spawn = require("child_process").spawn; // lance le sous-process
        const pythonProcess = spawn('python',["keys/X.py"]); // execute le script script.py
		client.say(channel, `@${tags.username}, A received !`);
	}
	if(message.toLowerCase() === '!b') 
    {
        console.log(tags.username);
        const spawn = require("child_process").spawn; // lance le sous-process
        const pythonProcess = spawn('python',["keys/Z.py"]); // execute le script script.py
		client.say(channel, `@${tags.username}, B received !`);
	}
	if(message.toLowerCase() === '!l') 
    {
        console.log(tags.username);
        const spawn = require("child_process").spawn; // lance le sous-process
        const pythonProcess = spawn('python',["keys/W.py"]); // execute le script script.py
		client.say(channel, `@${tags.username}, L received !`);
	}
	if(message.toLowerCase() === '!start') 
    {
        console.log(tags.username);
        const spawn = require("child_process").spawn; // lance le sous-process
        const pythonProcess = spawn('python',["keys/ENTER.py"]); // execute le script script.py
		client.say(channel, `@${tags.username}, START received !`);
    }
    if(message.toLowerCase() === '!select') 
    {
        console.log(tags.username);
        const spawn = require("child_process").spawn; // lance le sous-process
        const pythonProcess = spawn('python',["keys/SPACE.py"]); // execute le script script.py
		client.say(channel, `@${tags.username}, SELECT received !`);
	}
});
