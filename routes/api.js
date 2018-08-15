/*
*
*
*       Complete the API routing below
*
*
*/

'use strict'

var expect = require('chai').expect
var ConvertHandler = require('../controllers/convertHandler.js')

module.exports = function (app) {
  var convertHandler = new ConvertHandler()

  app.route('/api/convert')
    .get(function (req, res) {
      var input = req.query.input
      var initNum = convertHandler.getNum(input)
      var initUnit = convertHandler.getUnit(input)
      var returnNum = convertHandler.convert(initNum, initUnit)
      var returnUnit = convertHandler.getReturnUnit(initUnit)
      if (initNum === 'invalid number') {
        let resp = initUnit === 'invalid unit' ? 'invalid number and unit' : initNum
        return res.send(resp)
      }
      if (initUnit === 'invalid unit') return res.send(initUnit)
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
      var result = {initNum, initUnit, returnNum, returnUnit, string: toString}
      res.json(result)
    })
}
