const Mock = require('mockjs')

let getGoodsList = (req) => {
    // console.log(req.query);
    return Mock.mock({
        'code|1': [200, 500],
        "isLast|1-10": true,
        "data|10": [{
            'id|+1': (req.query.pageNum - 1) * 10 + 1,
            'title': '@cword(4)',
            'price|1-9999.2': 1.00,
            'origin-price|1-9999.2': 1.00,
            'express|1-100': 1,
            'sale|0-999': 1,
            'thumb': '@Image(250x250)'

            // [
            // 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
            //  'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg']
            ,
            'tag|1': ['促销', '双11', ''],
            'tags|1-3': ['@cword(2,4)'],
            'desc': '@cparagraph()',
            'city': '@city()'

        }],
        dataType: 'json',
    })
}
let getGoodsDetail = (req) => {
    // console.log(req.query);
    return Mock.mock({
        'code': 200,
        "data": {
            'id|+1': req.query.id,
            'title': '@cword(4)',
            'price|1-9999.2': 1.00,
            'origin-price|1-9999.2': 1.00,
            'express|1-100': 1,
            'sale|0-999': 1,
            'thumb|2-8': ['@Image(640x640)'],
            'tag|1': ['促销', '双11', ''],
            'tags|1-3': ['@cword(2,4)'],
            'desc': '@cparagraph()',
            'city': '@city()'

        },
        dataType: 'json',
    })
}


module.exports = {

    [`GET /api/getGoodsList`](req, res) {
        res.status(200).json(getGoodsList(req))
    },

    [`GET /api/getGoodsDetail`](req, res) {
        res.status(200).json(getGoodsDetail(req))
    },


}