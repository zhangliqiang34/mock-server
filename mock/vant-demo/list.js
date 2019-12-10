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
            'picture': '@Image(250x250)',
            'quota|1-10': 1,
            'quota-used|1-10': 1,
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

const getGoodsSku = (req) => {
    // console.log(req.query);
    return Mock.mock({
        'code': 200,
        "data": {
            tree: [{
                    k: '颜色', // skuKeyName：规格类目名称
                    v: [{
                            id: '100', // skuValueId：规格值 id
                            name: '红色', // skuValueName：规格值名称
                            imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                            previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
                        },
                        {
                            id: '200',
                            name: '蓝色',
                            imgUrl: 'https://img.yzcdn.cn/2.jpg',
                            previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
                        }
                    ],
                    k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                },
                {
                    k: '尺寸', // skuKeyName：规格类目名称
                    v: [{
                            id: '300', // skuValueId：规格值 id
                            name: '41', // skuValueName：规格值名称
                        },
                        {
                            id: '400',
                            name: '42',
                        }
                    ],
                    k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                }
            ],
            // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
            list: [{
                    id: 2259, // skuId，下单时后端需要
                    price: 100, // 价格（单位分）
                    s1: '100', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '300', // 规格类目 k_s 为 s2 的对应规格值 id
                    // s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 10 // 当前 sku 组合对应的库存
                },
                {
                    id: 2260, // skuId，下单时后端需要
                    price: 200, // 价格（单位分）
                    s1: '100', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '400', // 规格类目 k_s 为 s2 的对应规格值 id
                    // s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 5 // 当前 sku 组合对应的库存
                },
                {
                    id: 2261, // skuId，下单时后端需要
                    price: 400, // 价格（单位分）
                    s1: '200', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '300', // 规格类目 k_s 为 s2 的对应规格值 id
                    // s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 9 // 当前 sku 组合对应的库存
                },
                {
                    id: 2262, // skuId，下单时后端需要
                    price: 300, // 价格（单位分）
                    s1: '200', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '400', // 规格类目 k_s 为 s2 的对应规格值 id
                    // s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 8 // 当前 sku 组合对应的库存
                }
            ],
            price: '111.00', // 默认价格（单位元）
            stock_num: 227, // 商品总库存
            collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
            'none_sku|1-3': true, // 是否无规格商品
            messages: [],
            hide_stock: false // 是否隐藏剩余库存

        },
        dataType: 'json',
    })
}

const getCartGoodsList = (req) => {
    return Mock.mock({
        "code": 200,
        "data|4-10": [{
            'id|+1': 1,
            'title': '@ctitle()',
            'desc': '@cparagraph()',
            'price|1-9999.2': 1.00,
            'thumb': '@Image(250x250)',
        }]
    })
}


module.exports = {

    [`GET /api/getGoodsList`](req, res) {
        res.status(200).json(getGoodsList(req))
    },

    [`GET /api/getGoodsDetail`](req, res) {
        res.status(200).json(getGoodsDetail(req))
    },
    [`GET /api/getGoodsSku`](req, res) {
        res.status(200).json(getGoodsSku(req))
    },
    [`POST /api/addToCart`](req, res) {
        res.status(200).send(true)
    },
    [`GET /api/getCartGoodsList`](req, res) {
        res.status(200).json(getCartGoodsList(req))
    },
    [`POST /api/pay`](req, res) {
        res.status(200).send(true)
    },


}