// GLOBAL OBJECTS //
// let time = 0

// let timer = setInterval(function() {
//     time +=2
//     console.log(time + " seconds have passed")
//     if (time > 5) {
//         clearInterval(timer)
//     }
// }, 2000);

// console.log(__dirname)
// console.log(__filename)


//FUNCTION EXPRESSION //
// function callFunction(fun) {
//     fun()
// }

// let sayHi = function(){
//     console.log("hi")
// }

// callFunction(sayHi)

// let counter = require('./stuff');
// let stuff = require('./stuff');

// // console.log(counter(['hu','sa','asd']));
// console.log(stuff.counter(['hu','sa','asd']))
// console.log(stuff.adder(5,6))
// console.log(stuff.adder(stuff.pi,5))

// METHOD #4
// let {counter, adder, pi} = require('./stuff')

// console.log(counter(['hu','sa','asd']));
// console.log(counter(['hu','sa','asd']))
// console.log(adder(5,6))
// console.log(adder(pi,5))


// #8 - The Node Event Emitter 
// const events = require('events')

// class EventEmitter{
//     constructor(){
//         this.eventCallbacks = {};
//     }

//     registerEvent(eventName, callback){
//         this.eventCallbacks[eventName] = callback;
//     }

//     emit(eventName, parameter){
//         const functionToBeCalled = this.eventCallbacks[eventName];
//         functionToBeCalled(parameter);
//     }
// }

// class Person extends events.EventEmitter{
//     constructor(name){
//         super();
//         this.name = name;

//         const myNameWasChangedLog = (newName) => console.log("My Name was changed, my new name is: ", newName);
//         this.on('nameChange', myNameWasChangedLog);

//         const logMsg = (msg) => console.log(this.name + ' said: ' + msg);
//         this.on('speak', logMsg);
//     }

//     changeName(newName){
//         this.name = newName;
//         this.emit('nameChange', newName);
//     }
// }

// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this.name = name;

//         const myNameWasChangedLog = (newName) => console.log("My Name was changed, my new name is: ", newName);
//         this.registerEvent('nameChange', myNameWasChangedLog);

//         const logMsg = (msg) => console.log(this.name + ' said: ' + msg);
//         this.registerEvent('speak', logMsg);
//     }

//     changeName(newName){
//         this.name = newName;
//         this.emit('nameChange', newName);
//     }
// }

// let James = new Person('James');
// let Mary = new Person('Mary');
// let Ryu = new Person('Ryu');
// let people = [James, Mary, Ryu];

// James.changeName("Ray");

// // people.forEach(hito => {
// //     hito.on('speak', msg =>{
// //         console.log(hito.name + ' said: ' + msg);
// //     });
// // });

// James.emit('speak','My Name is Test')

// class Player {
//     constructor(firstName, lastName, playerNumber) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.number = playerNumber;
//         // this.getFullName = () => {
//         //     return firstName + " " + this.lastName;
//         // }
//     }
    
//     getFullName() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// class BasketBallPlayer extends Player{
//     constructor(firstName, lastName, playerNumber, height) {
//         super(firstName, lastName, playerNumber);
//         this.height = height;
//     }

//     getHeight() {
//         return this.height;
//     }
// }

// const messi = new Player("Leonel", "Messi", 7);
// messi.firstName = "Ronaldo";
// messi.lastName = "New";
// console.log(messi);
// console.log(messi.getFullName());

// const king = new BasketBallPlayer("Lebron", "James", 21, 200);
// console.log(king);
// console.log(king.getFullName());
// console.log(king.getHeight());

// #9 - Reading & Writing Files (fs)

// const fs = require('fs')

//sync:
// const readMe = fs.readFileSync('readme.txt', 'utf8')

// fs.writeFileSync('writeMe.txt', readMe)

//async:
// fs.readFile('readme.txt', 'utf8', function(err, data){
//     // fs.writeFile('writeMe.txt', data);
//     fs.writeFile('writeMe.txt' , data , (err)=>{ })
// });

// #10 - Creating & Removing Directories

// const fs = require('fs');

// fs.unlink('writeme.txt', function(err) {
//     if (err) throw err;
//     console.log('File deleted');
//    });
// const sad = 'sadasdasdasda'
// CREATE DIR AND FILE :

// fs.mkdirSync('Stuff')
// fs.writeFileSync('stuff/writeme.txt', sad)

// REMOVE DIR AND FILE : 

// fs.unlink('stuff/writeme.txt', function(err) {
//     // if (err) throw err;
//     // console.log('deleted')
// })
// fs.rmdir('stuff', function(err){
//     console.log('dir delented')
// })

// CREATE AND MOVE :

// fs.mkdir('stuff', function(){
//     // const file = fs.readFileSync('readMe.txt')
//     fs.readFile('readMe.txt', 'utf8', function(err, data){
//         console.log('read it')
//         fs.writeFile('stuff/writeMe.txt', data, (err)=>{})
//     })
//     // fs.writeFileSync('stuff/writeMe.txt', file)
// })

// #12 - Creating a Server

// const http = require('http')

// const server = http.createServer(function(req, res){
//     console.log("A reqeust was made: " + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hey Ninjaaas');
// })

// server.listen(3000, '127.0.0.1')
// console.log('Listening to port 3000')


// #14 - Readable Streams

// const http = require('http')
// const fs = require('fs')

// var readMyStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')

// readMyStream.on('data', function(chunck){
//     console.log('new chunck recieved: ')
//     console.log(chunck)
// })


// #15 - Writable Streams

// const http = require('http')
// const fs = require('fs')

// var readMyStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')
// var writeMyStream = fs.createWriteStream(__dirname + '/writeme.txt')

// readMyStream.on('data', function(chunck){
//     console.log('new chunck recieved: ')
//     writeMyStream.write(chunck)
// })
 
// #16 - Pipes
// same as #15 but quicker + combining this with server

// const http = require('http')
// const fs = require('fs')

// var readMyStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')
// var writeMyStream = fs.createWriteStream(__dirname + '/writeme.txt')

// readMyStream.pipe(writeMyStream)

// combining this with server


// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var readMyStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')
//     readMyStream.pipe(res);
// })

// server.listen(3000, '127.0.0.1');
// console.log('Now listening')

// #17 - Serving HTML Pages

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     let readMyStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
//     readMyStream.pipe(res);
// })

// server.listen(3000, '127.0.0.1');
// console.log('Now listening')

// #18 - Serving JSON Data

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     let myObj = {
//         name: 'Hyu',
//         job: 'Nija',
//         age: 25    
//     }
//     res.end(JSON.stringify(myObj))
// })

// server.listen(3000, '127.0.0.1');
// console.log('Now listening')

// #19 - Basic Routing

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'Text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if(req.url == '/contact') {
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     } else if(req.url === '/api/ninjas'){
//         let ninjas = [{name: 'ran', age: 23}, {name:'ron',job: 'wizard'}]
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(ninjas))
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
// })

// server.listen(3000, '127.0.0.1');
// console.log('Now listening')

// #20 - The Node Package Manager
// to install, write in console: npm install express
// to uninstall, write in console : npm uninstall express 


// #21 - The package.json File
// to create package tracker file
// write in console : npm init
// install and log package to file as dependency: npm install express -save
// install all packages that are dependency: npm install


// #22 - Installing Nodemon
// to refresh server auto
// to install: npm install nodemon -g
// to run nodemon app.js


// #23 - Introduction to Express

// const express = require('express');
// // set an express app to get all the functionalities
// const app = express();

// app.get('/', function(req,res){
//     res.send('this is home');
// });

// app.get('/contact', function(req,res){
//     res.send('this is contacts');
// });

// app.listen(3000); 

//  #24 - Express Route Params

// const express = require('express');
// const app = express();

// app.get('/', function(req,res){
//     res.send('this is home');
// });

// app.get('/contact', function(req,res){
//     res.send('this is contacts');
// });

// // app.get('/profile/:id', function(req, res){
// //     res.send("You requested to see a profile with the id of " + req.params.id)
// // })

// app.get('/profile/:name', function(req, res){
//     res.send("You requested to see a profile with the name of " + req.params.name)
// })

// app.listen(3000); 

// #25 - Template Engines

// const express = require('express');
// const app = express();

// // install https://ejs.co/
// // tell express that we want ejs as our view engine (template engine)
// app.set('view engine', 'ejs')
// // create view folder as express will know where to look 

// app.get('/', function(req,res){
//     res.render(__dirname + '/index.html');
// });

// app.get('/contact', function(req,res){
//     res.sendFile(__dirname + '/contact.html');
// });

// app.get('/profile/:name', function(req, res){
//     let data = {age: 29, job: 'ninja', hobbies: ['eating', 'sleeping', 'playing']};
//     res.render('profile', {person: req.params.name, data: data});
// })

// app.listen(3000); 

// #26 - Template Engines ( part 2 )
// added profile.ejs and added jav script and data 


// #27 - Partial Templates

// const express = require('express');
// const app = express();

// app.set('view engine', 'ejs')

// app.get('/', function(req,res){
//     res.render('index');
// });

// app.get('/contact', function(req,res){
//     res.render('contact');
// });

// app.get('/profile/:name', function(req, res){
//     let data = {age: 29, job: 'ninja', hobbies: ['eating', 'sleeping', 'playing']};
//     res.render('profile', {person: req.params.name, data: data});
// })

// app.listen(3000); 

// #28 - Middleware & Static Files

// const express = require('express');
// const app = express();

// how to use middleware 
// app.use('/assets', function(req, res, next){
//     console.log(req.url);
//     // let it know that we finished from this middleware and ask it to go on to the next middleware
//     next();
// })

// how to use static files
// app.use('/assets', express.static('assets'))

// app.set('view engine', 'ejs')

// app.get('/', function(req,res){
//     res.render('index');
// });

// app.get('/contact', function(req,res){
//     res.render('contact');
// });

// app.get('/profile/:name', function(req, res){
//     let data = {age: 29, job: 'ninja', hobbies: ['eating', 'sleeping', 'playing']};
//     res.render('profile', {person: req.params.name, data: data});
// })

// app.listen(3000); 

// #29 - Query Strings
// query start after inisial url with ? sign
// example: http://127.0.0.1:3000/contact/?dept=marketing&person=joe
// added form and inserted values in contact.ejs

// const express = require('express');
// const app = express();

// app.use('/assets', express.static('assets'))

// app.set('view engine', 'ejs')

// app.get('/', function(req,res){
//     res.render('index');
// });

// app.get('/contact', function(req,res){
//     res.render('contact', {qs: req.query});
// });

// app.get('/profile/:name', function(req, res){
//     let data = {age: 29, job: 'ninja', hobbies: ['eating', 'sleeping', 'playing']};
//     res.render('profile', {person: req.params.name, data: data});
// })

// app.listen(3000); 

// #30 - Handling POST Requests
// npm install body-parser

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/assets', express.static('assets'))

app.set('view engine', 'ejs')

app.get('/', function(req,res){
    res.render('index');
});

app.get('/contact', function(req,res){
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req,res){
    res.render('contact-sucess', {data: req.body});
});

app.get('/profile/:name', function(req, res){
    let data = {age: 29, job: 'ninja', hobbies: ['eating', 'sleeping', 'playing']};
    res.render('profile', {person: req.params.name, data: data});
})

app.listen(3000); 
