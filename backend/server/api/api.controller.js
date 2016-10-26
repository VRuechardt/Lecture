/**
 * Created by Valentin on 26/10/2016.
 */
'use strict';

module.exports.sendHandshake = function(req, res) {

    return res.status(200).json({ok: true});

};

module.exports.addition = function(req, res) {

    var isNumber = function(a) {
        return a * 1 == a;
    };

    if(req.body.a && isNumber(req.body.a)
    && req.body.b && isNumber(req.body.b)) {

        return res.status(200).json({result: req.body.a * 1 + req.body.b * 1});

    } else {

        return res.sendStatus(400);

    }

};