var express = require('express');
var router = express.Router();
var mongo = require('mongodb-curd');
var dbBase = 'zk2JN';
var dbColl = 'list'
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/api/list', function(req, res, next) {
    mongo.find(dbBase, dbColl, function(result) {
        if (!result) {
            res.send({ code: 1, data: result })
        } else {
            res.send({ code: 0, message: '查询失败' })
        }
    })
})

module.exports = router;