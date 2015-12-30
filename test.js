var Mws = require('./middleware');
var mws = new Mws();

mws.use('/first', function(req, res, next) {
  console.log('Matched /first - got request: ', req.url);
  next();
});

mws.use(function(req, res, next) {
  console.log('Matched / - got request: ', req.url);
  next();
});

mws.use(function(req, res, next) {
  console.log('Closing response stream');
  res.end();
  next();
});

var port = 3000;

console.log('Listening on port', port);
mws.listen(port);
