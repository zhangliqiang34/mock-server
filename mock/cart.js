const Mock = require('mockjs')

let getProducts = (req) => {
    // console.log(req.query);
    return Mock.mock({
        "data|3-10": [{
            'id|+1': 1,
            'title': "@ctitle()",
            'price|100-9999.2': 1.00,
            'sku|10-30': 1
        }]
    })

}

module.exports = {

    [`GET /api/getProducts`](req, res) {
        res.status(200).json(getProducts(req))
    }
}