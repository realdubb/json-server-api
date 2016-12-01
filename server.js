// server.js
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

var routes = require('./routes.json')



function emberResponse(req, res) {
  res.jsonp({
    data: res.locals.data,
    meta: []
  })
}

router.render = emberResponse
server.use(middlewares)
server.use(jsonServer.rewriter(routes))
server.use(router)



server.listen(3000, function () {
  console.log('JSON Server is running')
})