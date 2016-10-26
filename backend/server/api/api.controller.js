/**
 * Created by Valentin on 26/10/2016.
 */
'use strict';

module.exports.sendHandshake = function(req, res) {

    return res.status(200).json({ok: true});

};

module.exports.addition = function(req, res) {

    var isNumber = function(n) {
        return a * 1 == a;
    };

    if(req.params.a && isNumber(req.params.a)
    && req.params.b && isNumber(req.params.b)) {

        return res.status(200).json({result: a * 1 + b * 1});

    } else {

        return res.sendStatus(400);

    }

};