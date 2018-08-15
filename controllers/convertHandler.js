/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler () {
  this.getNum = function (input) {
    var reg = /[a-zA-Z]/
    var result = input.slice(0, input.search(reg))
    let frac = result.indexOf('/')
    if (frac !== -1) {
      result = Number(result.slice(0, frac)) / Number(result.slice(frac + 1))
    }
    if (isNaN(result) || result === '') result = 'invalid number'
    return result
  }

  this.getUnit = function (input) {
    var units = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
    var reg = /[a-zA-Z]/
    var unit = input.toLowerCase().slice(input.search(reg))
    if (!units.includes(unit)) unit = 'invalid unit'
    return unit
  }

  this.getReturnUnit = function (initUnit) {
    var uhash = {gal: 'l', l: 'gal', mi: 'km', km: 'mi', lbs: 'kg', kg: 'lbs'}
    return uhash[initUnit]
  }

  this.spellOutUnit = function (unit) {
    var shash = {gal: 'gallons',
      l: 'liters',
      mi: 'miles',
      km: 'kilometers',
      lbs: 'pounds',
      kg: 'kilograms'}
    return shash[unit]
  }

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    switch (initUnit) {
      case 'gal':
        return initNum * galToL
      case 'l':
        return initNum / galToL
      case 'lbs':
        return initNum * lbsToKg
      case 'kg':
        return initNum / lbsToKg
      case 'mi':
        return initNum * miToKm
      case 'km':
        return initNum / miToKm
    }
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  }
}

module.exports = ConvertHandler
