require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing' ? require('./webpack.prod.conf') : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
    // automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: () => {}
    })
    // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = {
            target: options
        }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
        // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
    _resolve()
})

// 引入数据库文件
var indexData = require('../mock/swiper.json'),
    navList = require('../mock/navList.json'),
    fullData = require('../mock/fullData.json'),
    jujiaSwiper = require('../mock/jujiaSwiper.json'),
    jujiaData = require('../mock/jujiaData.json'),
    beautyData = require('../mock/beautyData.json'),
    personSwiper = require('../mock/personSwiper.json'),
    personData = require('../mock/personData.json'),
    bagSwiper = require('../mock/bagSwiper.json'),
    bagData = require('../mock/bagData.json'),
    electricData = require('../mock/electricData.json'),
    KitchenSwiper = require('../mock/KitchenSwiper.json'),
    KitchenData = require('../mock/KitchenData.json'),
    AccessoriesSwiper = require('../mock/AccessoriesSwiper.json'),
    AccessoriesData = require('../mock/AccessoriesData.json'),
    snacksSwiper = require('../mock/snacksSwiper.json'),
    snacksData = require('../mock/snacksData.json'),
    babySwiper = require('../mock/babySwiper.json'),
    babyData = require('../mock/babyData.json'),
    furnitureSwiper = require('../mock/furnitureSwiper.json'),
    furnitureData = require('../mock/furnitureData.json'),
    categpryData = require('../mock/categpry.json'),
    pinpaiData = require('../mock/pinpaiData.json'),
    shopcarData = require('../mock/shopcarData.json');
// 引入数据库
var apiRoutes = express.Router()
    // 使用api的方法来创建连接时候的请求
apiRoutes.get('/navList', function (req, res) {
    res.json(navList)
})
apiRoutes.get('/indexData', function (req, res) {
    res.json(indexData)
})
apiRoutes.get('/fullData', function (req, res) {
    res.json(fullData)
})
apiRoutes.get('/jujiaSwiper', function (req, res) {
    res.json(jujiaSwiper)
})
apiRoutes.get('/jujiaData', function (req, res) {
    res.json(jujiaData)
})
apiRoutes.get('/beautyData', function (req, res) {
    res.json(beautyData)
})
apiRoutes.get('/personSwiper', function (req, res) {
    res.json(personSwiper)
})
apiRoutes.get('/personData', function (req, res) {
    res.json(personData)
})
apiRoutes.get('/bagSwiper', function (req, res) {
    res.json(bagSwiper)
})
apiRoutes.get('/bagData', function (req, res) {
    res.json(bagData)
})
apiRoutes.get('/electricData', function (req, res) {
    res.json(electricData)
})
apiRoutes.get('/KitchenSwiper', function (req, res) {
    res.json(KitchenSwiper)
})
apiRoutes.get('/KitchenData', function (req, res) {
    res.json(KitchenData)
})
apiRoutes.get('/AccessoriesSwiper', function (req, res) {
    res.json(AccessoriesSwiper)
})
apiRoutes.get('/AccessoriesData', function (req, res) {
    res.json(AccessoriesData)
})
apiRoutes.get('/snacksSwiper', function (req, res) {
    res.json(snacksSwiper)
})
apiRoutes.get('/snacksData', function (req, res) {
    res.json(snacksData)
})
apiRoutes.get('/babySwiper', function (req, res) {
    res.json(babySwiper)
})
apiRoutes.get('/babyData', function (req, res) {
    res.json(babyData)
})
apiRoutes.get('/furnitureSwiper', function (req, res) {
    res.json(furnitureSwiper)
})
apiRoutes.get('/furnitureData', function (req, res) {
    res.json(furnitureData)
})
apiRoutes.get('/categpry', function (req, res) {
    res.json(categpryData)
})
apiRoutes.get('/pinpaiData', function (req, res) {
    res.json(pinpaiData)
})
apiRoutes.get('/shopcarData', function (req, res) {
    res.json(shopcarData)
})
    // 调用api
app.use('/api', apiRoutes)

var server = app.listen(port)

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}