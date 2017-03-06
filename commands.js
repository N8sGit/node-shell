//Output a prompt
var request = require('request')
var fs = require('fs')
var done = require('./bash.js')['done']


function rq(param){
 request(param, function (error, response, body) {
   done(body); // Print the HTML for the Google homepage.
});


}

function ls(param){fs.readdir('.', function(err, files) {
  if (err) throw err;
  files.forEach(function(file) {
    done(file.toString() + "\n");
  })
});

}


function echo(param){

  done(param.join(' '))

}


function cat (param){
  var content
  fs.readFile(param, function read(err, data){
    if(err){
      throw err;
    }
    content = data
    //console.log(Object.keys(content), 'HERE!')


   done(content)
  })

}


function head(param, param2){
  var content
  fs.readFile(param, function read(err, data){
    if(err){
      throw err;
    }
     content = data

    if(param2){
    //  console.log('GOT THERE')
    var result = content.toString().split('\n').slice(0, param2)
  }else{
    // console.log('Else Satement')
    // console.log(typeof content, 'TYPE OF')
    var result =  content.toString().split('\n').slice(0, 6)
    //console.log(result, 'RESULT')
  }

  done(result.join('\n'))
})



}


function tail(param, param2){
  var content
  fs.readFile(param, function read(err, data){
    if(err){
      throw err;
    }
     content = data

    if(param2){
    //  console.log('GOT THERE')
    var result = content.toString().split('\n').slice(-param2)
  }else{
    // console.log('Else Satement')
    // console.log(typeof content, 'TYPE OF')
    var result =  content.toString().split('\n').slice(-5)
    //console.log(result, 'RESULT')
  }

  done(result.join('\n'))
  })


}







 function pwd(param) {

// The stdin 'data' event fires after a user types in a line

   done(process.env['PWD']);
  // if(cmd.toLowerCase() === 'date') process.stdout.write(Date())



}

var cmds = {
  pwd: pwd,

  ls: ls,

  echo: echo,

  cat: cat,

  head: head,

  tail : tail,

  rq: rq

}


module.exports = cmds
