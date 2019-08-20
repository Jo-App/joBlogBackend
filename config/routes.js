var home = require('../app/controllers/home');
var board = require('../app/controllers/board');
var index = require('../app/controllers/index.js')
var devBoard = require('../app/controllers/devBoard.js');

//you can include all your controllers

module.exports = function (app, passport) {

    // app.get('/login', home.login);
    // app.get('/signup', home.signup);

    // app.get('/test', board.boardList);

    // app.get('/', home.loggedIn, home.home);//home
    // app.get('/home', home.loggedIn, home.home);//home

    app.get('/', index.index);
    app.get('/devBoardList', devBoard.boardList);


}
