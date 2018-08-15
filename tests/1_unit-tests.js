/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai')
var assert = chai.assert
var ConvertHandler = require('../controllers/convertHandler.js')

var convertHandler = new ConvertHandler()

suite('Unit Tests', function () {
  suite('Function convertHandler.getNum(input)', function () {
    test('Whole number input', function (done) {
      var input = '32L'
      assert.equal(convertHandler.getNum(input), 32)
      done()
    })

    test('Decimal Input', function (done) {
      var input = `23.2gal`
      assert.equal(convertHandler.getNum(input), 23.2)
      done()
    })

    test('Fractional Input', function (done) {
      var input = `1/2kg`
      assert.equal(convertHandler.getNum(input), 0.5)
      done()
    })

    test('Fractional Input w/ Decimal', function (done) {
      var input = `1.5/5kg`
      assert.equal(convertHandler.getNum(input), 0.3)
      done()
    })

    test('Invalid Input (double fraction)', function (done) {
      var input = `1/5/6kg`
      assert.equal(convertHandler.getNum(input), 'invalid number')
      done()
    })

    test('No Numerical Input', function (done) {
      var input = ``
      assert.equal(convertHandler.getNum(input), 'invalid number')
      done()
    })
  })

  suite('Function convertHandler.getUnit(input)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG']
      input.forEach(function (ele) {
        assert.equal(convertHandler.getUnit('2' + ele), ele.toLowerCase())
      })
      done()
    })

    test('Unknown Unit Input', function (done) {
      assert.equal(convertHandler.getUnit('2LL'), 'invalid unit')
      done()
    })
  })

  suite('Function convertHandler.getReturnUnit(initUnit)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
      var expect = ['l', 'gal', 'km', 'mi', 'kg', 'lbs']
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i])
      })
      done()
    })
  })

  suite('Function convertHandler.spellOutUnit(unit)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
      var expect = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms']
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i])
      })
      done()
    })
  })

  suite('Function convertHandler.convert(num, unit)', function () {
    test('Gal to L', function (done) {
      var input = [5, 'gal']
      var expected = 18.9271
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) // 0.1 tolerance
      done()
    })

    test('L to Gal', function (done) {
      var input = [4, 'l']
      var expected = 1.05669
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) // 0.1 tolerance
      done()
    })

    test('Mi to Km', function (done) {
      var input = [3, 'mi']
      var expected = 4.82803
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) // 0.1 tolerance
      done()
    })

    test('Km to Mi', function (done) {
      var input = [6, 'km']
      var expected = 3.72823
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) // 0.1 tolerance
      done()
    })

    test('Lbs to Kg', function (done) {
      var input = [2, 'lbs']
      var expected = 0.907185
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) // 0.1 tolerance
      done()
    })

    test('Kg to Lbs', function (done) {
      var input = [5, 'kg']
      var expected = 11.0231
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) // 0.1 tolerance
      done()
    })
  })
})
