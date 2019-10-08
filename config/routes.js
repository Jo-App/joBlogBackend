var home = require('../app/controllers/home');
var board = require('../app/controllers/board');
var index = require('../app/controllers/index.js')
var devBoard = require('../app/controllers/devBoard.js');
var user = require('../app/controllers/user.js');

//you can include all your controllers

module.exports = function (app, passport) {

  // app.get('/login', home.login);
  // app.get('/signup', home.signup);

  // app.get('/test', board.boardList);

  // app.get('/', home.loggedIn, home.home);//home
  // app.get('/home', home.loggedIn, home.home);//home

  app.get('/', index.index);
  app.get('/devBoardList', devBoard.boardList);
  app.get('/userList', user.list); //유저 목록
  app.post('/userSave', user.save); //유저 생성
  app.post('/userDetail', user.detail); //유저 상세
  app.post('/userUpdate', user.update); //유저 수정
  app.post('/userDelete', user.delete); //유저 삭제





}