var express = require('express');
var app = express();

function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  return err;
}

app.set('port', process.env.PORT || 3000);

app.use('/api', function (req, res, next) {
  var key = req.query['api-key'];

  // key isn't present
  if (!key) return next(error(400, 'api key required'));
  // key is invalid
  if (!apiKeys.indexOf(key)) return next(error(401, 'invalid api key'));

  // all good,store req.key for route access
  req.key = key;
  next();
});

var apiKeys = ['foo', 'bar', 'baz'];

var repos = [
  { name: 'express', url: 'http://github.com/expressjs/express' },
  { name: 'stylus', url: 'http://github.com/learnboost/stylus' },
  { name: 'cluster', url: 'http://github.com/learnboost/cluster' }
];

var users = [
  { name: 'tobi' },
  { name: 'loki' },
  { name: 'jane' }
];

var userRepos = {
  tobi: [repos[0], repos[1]],
  loki: [repos[1]],
  jane: [repos[2]]
};

// we now can assume the api key is valid,
// and simply expose the data


app.get('/api/users', function (req, res, next) {
  res.send(repos);
});

app.get('/api/repos', function (req, res, next) {
  var name = req.params.name;
  var user = userRepos[name];
  if (user) res.send(user);
  else next();
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({ error: err.message});
});

app.use(function(req, res){
  res.status(404);
  res.send({ error: "Lame, can't find that" });
});

app.listen(app.get('port'), function () {
  console.log('server listening on port ' + app.get('port'));
});