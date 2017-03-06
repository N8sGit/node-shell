//Output a prompt
var fs = require('fs')



function ls(){fs.readdir('.', function(err, files) {
  if (err) throw err;
  files.forEach(function(file) {
    process.stdout.write(file.toString() + "\n");
  })
  process.stdout.write("prompt > ");
});

}





 function pwd() {

// The stdin 'data' event fires after a user types in a line

   process.stdout.write(process.env['PWD']);
  // if(cmd.toLowerCase() === 'date') process.stdout.write(Date())

  process.stdout.write('prompt > ');

}

var cmds = {
  pwd: pwd,

  ls: ls
}


module.exports = cmds
