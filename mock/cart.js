const Mock = require("mockjs");

<<<<<<< HEAD
const getProducts = (req) => {
    // console.log(req.query);
    return Mock.mock({
        "data|3-10": [{
            'id|+1': 1,
            'title': "@ctitle()",
            'price|100-9999.2': 1.00,
            'sku|10-30': 1
        }],
        dataType: 'json',
    })
}

const pay = (req) => {
    // console.log(req.query);
    return Mock.mock({
        "data|1": true
    })
}
=======
let getProducts = req => {
    // console.log(req.query);
    return Mock.mock({
        "data|3-10": [{
            "id|+1": 1,
            title: "@ctitle()",
            "price|100-9999.2": 1.0,
            "sku|10-30": 1
        }]
    });
};

const pay = req => {
    // console.log(req.query);
    return Mock.mock({
        "data|1": true
    });
};
>>>>>>> 2b59ef7b5ff6319e416cb92e88695a04d08112f7

module.exports = {
    [`GET /api/getProducts`](req, res) {
<<<<<<< HEAD
        res.status(200).json(getProducts(req))
    },

    [`POST /api/pay`](req, res) {
        res.status(200).json(pay(req))
=======
        res.status(200).json(getProducts(req));
    },
    [`POST /api/pay`](req, res) {
        res.status(404).json(pay(req));
>>>>>>> 2b59ef7b5ff6319e416cb92e88695a04d08112f7
    }
};