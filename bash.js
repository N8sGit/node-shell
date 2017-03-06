var done = function(output) {
  process.stdout.write(output)

  process.stdout.write('prompt > ')
}

module.exports = {
  done:done
}



var pwd = require('./commands.js')['pwd']
var fs = require('fs')
var ls = require('./commands.js')['ls']
var echo = require('./commands.js')['echo']
var cat = require('./commands.js')['cat']
var head = require ('./commands.js')['head']
var tail = require('./commands.js')['tail']
var rq = require('./commands.js')['rq']



process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
  var command = data.toString().trim(); // remove the newline
  var splitData = command.split(' ')
  command = splitData[0]
  var args = splitData.slice(1)

  if(command.toLowerCase() === 'pwd') pwd()
  if(command.toLowerCase() === 'ls') ls()
  if(command.toLowerCase() === 'echo') echo(args)
  if(command.toLowerCase() === 'cat') cat(args[0])
  if(command.toLowerCase() ==='head') head(args[0], args[1])
  if(command.toLowerCase() === 'tail') tail(args[0],args[1])
  if(command.toLowerCase()=== 'rq')rq(args[0])

})
