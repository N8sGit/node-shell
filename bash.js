var pwd = require('./commands.js')['pwd']
var fs = require('fs')
var ls = require('./commands.js')['ls']

process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
  var command = data.toString().trim(); // remove the newline
if(command.toLowerCase() === 'pwd') pwd()
})



pwd()
ls()
