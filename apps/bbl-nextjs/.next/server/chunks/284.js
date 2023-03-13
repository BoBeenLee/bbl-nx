"use strict";
exports.id = 284;
exports.ids = [284];
exports.modules = {

/***/ 2733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ format)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/isDate/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/toDate/index.js
function toDate_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { toDate_typeof = function _typeof(obj) { return typeof obj; }; } else { toDate_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return toDate_typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || toDate_typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/isValid/index.js



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  requiredArgs(1, arguments);

  if (!isDate(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/addMilliseconds/index.js



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/subMilliseconds/index.js



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js


function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js



function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js



function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/defaultOptions/index.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/getUTCWeek/index.js




var getUTCWeek_MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / getUTCWeek_MILLISECONDS_IN_WEEK) + 1;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/format/lightFormatters/index.js

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const lightFormatters = (formatters);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/format/formatters/index.js







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters_formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date); // Padding

    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = getUTCISOWeek(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return lightFormatters.m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const format_formatters = (formatters_formatters);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const format_longFormatters = (longFormatters);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/protectedTokens/index.js
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/en-US/index.js + 5 modules
var en_US = __webpack_require__(8440);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/_lib/defaultLocale/index.js

/* harmony default export */ const defaultLocale = (en_US/* default */.Z);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/format/index.js










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = getDefaultOptions();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = toDate(dirtyDate);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = format_longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = format_formatters[firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ 9623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ 778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ 2638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ 3628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ 8440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ en_US)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const _lib_formatDistance = (formatDistance);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
var buildFormatLongFn = __webpack_require__(9623);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,buildFormatLongFn/* default */.Z)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,buildFormatLongFn/* default */.Z)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,buildFormatLongFn/* default */.Z)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const _lib_formatLong = (formatLong);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const _lib_formatRelative = (formatRelative);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
var buildLocalizeFn = __webpack_require__(778);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,buildLocalizeFn/* default */.Z)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,buildLocalizeFn/* default */.Z)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,buildLocalizeFn/* default */.Z)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,buildLocalizeFn/* default */.Z)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,buildLocalizeFn/* default */.Z)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const _lib_localize = (localize);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
var buildMatchFn = __webpack_require__(2638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
var buildMatchPatternFn = __webpack_require__(3628);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/en-US/_lib/match/index.js


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,buildMatchPatternFn/* default */.Z)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,buildMatchFn/* default */.Z)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,buildMatchFn/* default */.Z)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,buildMatchFn/* default */.Z)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,buildMatchFn/* default */.Z)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,buildMatchFn/* default */.Z)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const _lib_match = (match);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/en-US/index.js






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance,
  formatLong: _lib_formatLong,
  formatRelative: _lib_formatRelative,
  localize: _lib_localize,
  match: _lib_match,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const en_US = (locale);

/***/ }),

/***/ 9520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ko)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/ko/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: '1초 미만',
    other: '{{count}}초 미만'
  },
  xSeconds: {
    one: '1초',
    other: '{{count}}초'
  },
  halfAMinute: '30초',
  lessThanXMinutes: {
    one: '1분 미만',
    other: '{{count}}분 미만'
  },
  xMinutes: {
    one: '1분',
    other: '{{count}}분'
  },
  aboutXHours: {
    one: '약 1시간',
    other: '약 {{count}}시간'
  },
  xHours: {
    one: '1시간',
    other: '{{count}}시간'
  },
  xDays: {
    one: '1일',
    other: '{{count}}일'
  },
  aboutXWeeks: {
    one: '약 1주',
    other: '약 {{count}}주'
  },
  xWeeks: {
    one: '1주',
    other: '{{count}}주'
  },
  aboutXMonths: {
    one: '약 1개월',
    other: '약 {{count}}개월'
  },
  xMonths: {
    one: '1개월',
    other: '{{count}}개월'
  },
  aboutXYears: {
    one: '약 1년',
    other: '약 {{count}}년'
  },
  xYears: {
    one: '1년',
    other: '{{count}}년'
  },
  overXYears: {
    one: '1년 이상',
    other: '{{count}}년 이상'
  },
  almostXYears: {
    one: '거의 1년',
    other: '거의 {{count}}년'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + ' 후';
    } else {
      return result + ' 전';
    }
  }

  return result;
};

/* harmony default export */ const _lib_formatDistance = (formatDistance);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
var buildFormatLongFn = __webpack_require__(9623);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/ko/_lib/formatLong/index.js

var dateFormats = {
  full: 'y년 M월 d일 EEEE',
  long: 'y년 M월 d일',
  medium: 'y.MM.dd',
  short: 'y.MM.dd'
};
var timeFormats = {
  full: 'a H시 mm분 ss초 zzzz',
  long: 'a H:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: '{{date}} {{time}}',
  long: '{{date}} {{time}}',
  medium: '{{date}} {{time}}',
  short: '{{date}} {{time}}'
};
var formatLong = {
  date: (0,buildFormatLongFn/* default */.Z)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,buildFormatLongFn/* default */.Z)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,buildFormatLongFn/* default */.Z)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const _lib_formatLong = (formatLong);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/ko/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'지난' eeee p",
  yesterday: "'어제' p",
  today: "'오늘' p",
  tomorrow: "'내일' p",
  nextWeek: "'다음' eeee p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const _lib_formatRelative = (formatRelative);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
var buildLocalizeFn = __webpack_require__(778);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/ko/_lib/localize/index.js

var eraValues = {
  narrow: ['BC', 'AD'],
  abbreviated: ['BC', 'AD'],
  wide: ['기원전', '서기']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1분기', '2분기', '3분기', '4분기']
};
var monthValues = {
  narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  abbreviated: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  wide: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
};
var dayValues = {
  narrow: ['일', '월', '화', '수', '목', '금', '토'],
  short: ['일', '월', '화', '수', '목', '금', '토'],
  abbreviated: ['일', '월', '화', '수', '목', '금', '토'],
  wide: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
};
var dayPeriodValues = {
  narrow: {
    am: '오전',
    pm: '오후',
    midnight: '자정',
    noon: '정오',
    morning: '아침',
    afternoon: '오후',
    evening: '저녁',
    night: '밤'
  },
  abbreviated: {
    am: '오전',
    pm: '오후',
    midnight: '자정',
    noon: '정오',
    morning: '아침',
    afternoon: '오후',
    evening: '저녁',
    night: '밤'
  },
  wide: {
    am: '오전',
    pm: '오후',
    midnight: '자정',
    noon: '정오',
    morning: '아침',
    afternoon: '오후',
    evening: '저녁',
    night: '밤'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: '오전',
    pm: '오후',
    midnight: '자정',
    noon: '정오',
    morning: '아침',
    afternoon: '오후',
    evening: '저녁',
    night: '밤'
  },
  abbreviated: {
    am: '오전',
    pm: '오후',
    midnight: '자정',
    noon: '정오',
    morning: '아침',
    afternoon: '오후',
    evening: '저녁',
    night: '밤'
  },
  wide: {
    am: '오전',
    pm: '오후',
    midnight: '자정',
    noon: '정오',
    morning: '아침',
    afternoon: '오후',
    evening: '저녁',
    night: '밤'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = String(options === null || options === void 0 ? void 0 : options.unit);

  switch (unit) {
    case 'minute':
    case 'second':
      return String(number);

    case 'date':
      return number + '일';

    default:
      return number + '번째';
  }
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,buildLocalizeFn/* default */.Z)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,buildLocalizeFn/* default */.Z)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,buildLocalizeFn/* default */.Z)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,buildLocalizeFn/* default */.Z)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,buildLocalizeFn/* default */.Z)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const _lib_localize = (localize);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
var buildMatchFn = __webpack_require__(2638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
var buildMatchPatternFn = __webpack_require__(3628);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/ko/_lib/match/index.js


var matchOrdinalNumberPattern = /^(\d+)(일|번째)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(기원전|서기)/i
};
var parseEraPatterns = {
  any: [/^(bc|기원전)/i, /^(ad|서기)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]사?분기/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(1[012]|[123456789])/,
  abbreviated: /^(1[012]|[123456789])월/i,
  wide: /^(1[012]|[123456789])월/i
};
var parseMonthPatterns = {
  any: [/^1월?$/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]
};
var matchDayPatterns = {
  narrow: /^[일월화수목금토]/,
  short: /^[일월화수목금토]/,
  abbreviated: /^[일월화수목금토]/,
  wide: /^[일월화수목금토]요일/
};
var parseDayPatterns = {
  any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/]
};
var matchDayPeriodPatterns = {
  any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^(am|오전)/i,
    pm: /^(pm|오후)/i,
    midnight: /^자정/i,
    noon: /^정오/i,
    morning: /^아침/i,
    afternoon: /^오후/i,
    evening: /^저녁/i,
    night: /^밤/i
  }
};
var match = {
  ordinalNumber: (0,buildMatchPatternFn/* default */.Z)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,buildMatchFn/* default */.Z)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,buildMatchFn/* default */.Z)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,buildMatchFn/* default */.Z)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,buildMatchFn/* default */.Z)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,buildMatchFn/* default */.Z)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const _lib_match = (match);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/esm/locale/ko/index.js





/**
 * @type {Locale}
 * @category Locales
 * @summary Korean locale.
 * @language Korean
 * @iso-639-2 kor
 * @author Hong Chulju [@angdev]{@link https://github.com/angdev}
 * @author Lee Seoyoen [@iamssen]{@link https://github.com/iamssen}
 * @author Taiki IKeda [@so99ynoodles]{@link https://github.com/so99ynoodles}
 */

var locale = {
  code: 'ko',
  formatDistance: _lib_formatDistance,
  formatLong: _lib_formatLong,
  formatRelative: _lib_formatRelative,
  localize: _lib_localize,
  match: _lib_match,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const ko = (locale);

/***/ }),

/***/ 7248:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _tslib = __webpack_require__(4605);
var utils = __webpack_require__(3574);
var serviceScope = __webpack_require__(5350);
function createNullActor(id) {
    var _a;
    return _a = {
        id: id,
        send: function() {
            return void 0;
        },
        subscribe: function() {
            return {
                unsubscribe: function() {
                    return void 0;
                }
            };
        },
        getSnapshot: function() {
            return undefined;
        },
        toJSON: function() {
            return {
                id: id
            };
        }
    }, _a[utils.symbolObservable] = function() {
        return this;
    }, _a;
}
/**
 * Creates a deferred actor that is able to be invoked given the provided
 * invocation information in its `.meta` value.
 *
 * @param invokeDefinition The meta information needed to invoke the actor.
 */ function createInvocableActor(invokeDefinition, machine, context, _event) {
    var _a;
    var invokeSrc = utils.toInvokeSource(invokeDefinition.src);
    var serviceCreator = (_a = machine === null || machine === void 0 ? void 0 : machine.options.services) === null || _a === void 0 ? void 0 : _a[invokeSrc.type];
    var resolvedData = invokeDefinition.data ? utils.mapContext(invokeDefinition.data, context, _event) : undefined;
    var tempActor = serviceCreator ? createDeferredActor(serviceCreator, invokeDefinition.id, resolvedData) : createNullActor(invokeDefinition.id); // @ts-ignore
    tempActor.meta = invokeDefinition;
    return tempActor;
}
function createDeferredActor(entity, id, data) {
    var tempActor = createNullActor(id); // @ts-ignore
    tempActor.deferred = true;
    if (utils.isMachine(entity)) {
        // "mute" the existing service scope so potential spawned actors within the `.initialState` stay deferred here
        var initialState_1 = tempActor.state = serviceScope.provide(undefined, function() {
            return (data ? entity.withContext(data) : entity).initialState;
        });
        tempActor.getSnapshot = function() {
            return initialState_1;
        };
    }
    return tempActor;
}
function isActor(item) {
    try {
        return typeof item.send === "function";
    } catch (e) {
        return false;
    }
}
function isSpawnedActor(item) {
    return isActor(item) && "id" in item;
} // TODO: refactor the return type, this could be written in a better way but it's best to avoid unneccessary breaking changes now
function toActorRef(actorRefLike) {
    var _a;
    return _tslib.__assign((_a = {
        subscribe: function() {
            return {
                unsubscribe: function() {
                    return void 0;
                }
            };
        },
        id: "anonymous",
        getSnapshot: function() {
            return undefined;
        }
    }, _a[utils.symbolObservable] = function() {
        return this;
    }, _a), actorRefLike);
}
exports.createDeferredActor = createDeferredActor;
exports.createInvocableActor = createInvocableActor;
exports.createNullActor = createNullActor;
exports.isActor = isActor;
exports.isSpawnedActor = isSpawnedActor;
exports.toActorRef = toActorRef;


/***/ }),

/***/ 2115:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var StateNode = __webpack_require__(3418);
var environment = __webpack_require__(6783);
var warned = false;
function Machine(config, options, initialContext) {
    if (initialContext === void 0) {
        initialContext = config.context;
    }
    return new StateNode.StateNode(config, options, initialContext);
}
function createMachine(config, options) {
    if (!environment.IS_PRODUCTION && !("predictableActionArguments" in config) && !warned) {
        warned = true;
        console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html");
    }
    return new StateNode.StateNode(config, options);
}
exports.Machine = Machine;
exports.createMachine = createMachine;


/***/ }),

/***/ 9716:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _tslib = __webpack_require__(4605);
var constants = __webpack_require__(6903);
var utils = __webpack_require__(3574);
var stateUtils = __webpack_require__(6350);
var actions = __webpack_require__(9717);
var environment = __webpack_require__(6783);
function stateValuesEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a === undefined || b === undefined) {
        return false;
    }
    if (utils.isString(a) || utils.isString(b)) {
        return a === b;
    }
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    return aKeys.length === bKeys.length && aKeys.every(function(key) {
        return stateValuesEqual(a[key], b[key]);
    });
}
function isStateConfig(state) {
    if (typeof state !== "object" || state === null) {
        return false;
    }
    return "value" in state && "_event" in state;
}
/**
 * @deprecated Use `isStateConfig(object)` or `state instanceof State` instead.
 */ var isState = isStateConfig;
function bindActionToState(action, state) {
    var exec = action.exec;
    var boundAction = _tslib.__assign(_tslib.__assign({}, action), {
        exec: exec !== undefined ? function() {
            return exec(state.context, state.event, {
                action: action,
                state: state,
                _event: state._event
            });
        } : undefined
    });
    return boundAction;
}
var State = /*#__PURE__*/ /** @class */ function() {
    /**
   * Creates a new State instance.
   * @param value The state value
   * @param context The extended state
   * @param historyValue The tree representing historical values of the state nodes
   * @param history The previous state
   * @param actions An array of action objects to execute as side-effects
   * @param activities A mapping of activities and whether they are started (`true`) or stopped (`false`).
   * @param meta
   * @param events Internal event queue. Should be empty with run-to-completion semantics.
   * @param configuration
   */ function State(config) {
        var _this = this;
        var _a;
        this.actions = [];
        this.activities = constants.EMPTY_ACTIVITY_MAP;
        this.meta = {};
        this.events = [];
        this.value = config.value;
        this.context = config.context;
        this._event = config._event;
        this._sessionid = config._sessionid;
        this.event = this._event.data;
        this.historyValue = config.historyValue;
        this.history = config.history;
        this.actions = config.actions || [];
        this.activities = config.activities || constants.EMPTY_ACTIVITY_MAP;
        this.meta = stateUtils.getMeta(config.configuration);
        this.events = config.events || [];
        this.matches = this.matches.bind(this);
        this.toStrings = this.toStrings.bind(this);
        this.configuration = config.configuration;
        this.transitions = config.transitions;
        this.children = config.children;
        this.done = !!config.done;
        this.tags = (_a = Array.isArray(config.tags) ? new Set(config.tags) : config.tags) !== null && _a !== void 0 ? _a : new Set();
        this.machine = config.machine;
        Object.defineProperty(this, "nextEvents", {
            get: function() {
                return stateUtils.nextEvents(_this.configuration);
            }
        });
    }
    /**
   * Creates a new State instance for the given `stateValue` and `context`.
   * @param stateValue
   * @param context
   */ State.from = function(stateValue, context) {
        if (stateValue instanceof State) {
            if (stateValue.context !== context) {
                return new State({
                    value: stateValue.value,
                    context: context,
                    _event: stateValue._event,
                    _sessionid: null,
                    historyValue: stateValue.historyValue,
                    history: stateValue.history,
                    actions: [],
                    activities: stateValue.activities,
                    meta: {},
                    events: [],
                    configuration: [],
                    transitions: [],
                    children: {}
                });
            }
            return stateValue;
        }
        var _event = actions.initEvent;
        return new State({
            value: stateValue,
            context: context,
            _event: _event,
            _sessionid: null,
            historyValue: undefined,
            history: undefined,
            actions: [],
            activities: undefined,
            meta: undefined,
            events: [],
            configuration: [],
            transitions: [],
            children: {}
        });
    };
    /**
   * Creates a new State instance for the given `config`.
   * @param config The state config
   */ State.create = function(config) {
        return new State(config);
    };
    /**
   * Creates a new `State` instance for the given `stateValue` and `context` with no actions (side-effects).
   * @param stateValue
   * @param context
   */ State.inert = function(stateValue, context) {
        if (stateValue instanceof State) {
            if (!stateValue.actions.length) {
                return stateValue;
            }
            var _event = actions.initEvent;
            return new State({
                value: stateValue.value,
                context: context,
                _event: _event,
                _sessionid: null,
                historyValue: stateValue.historyValue,
                history: stateValue.history,
                activities: stateValue.activities,
                configuration: stateValue.configuration,
                transitions: [],
                children: {}
            });
        }
        return State.from(stateValue, context);
    };
    /**
   * Returns an array of all the string leaf state node paths.
   * @param stateValue
   * @param delimiter The character(s) that separate each subpath in the string state node path.
   */ State.prototype.toStrings = function(stateValue, delimiter) {
        var _this = this;
        if (stateValue === void 0) {
            stateValue = this.value;
        }
        if (delimiter === void 0) {
            delimiter = ".";
        }
        if (utils.isString(stateValue)) {
            return [
                stateValue
            ];
        }
        var valueKeys = Object.keys(stateValue);
        return valueKeys.concat.apply(valueKeys, _tslib.__spreadArray([], _tslib.__read(valueKeys.map(function(key) {
            return _this.toStrings(stateValue[key], delimiter).map(function(s) {
                return key + delimiter + s;
            });
        })), false));
    };
    State.prototype.toJSON = function() {
        var _a = this;
        _a.configuration;
        _a.transitions;
        var tags = _a.tags;
        _a.machine;
        var jsonValues = _tslib.__rest(_a, [
            "configuration",
            "transitions",
            "tags",
            "machine"
        ]);
        return _tslib.__assign(_tslib.__assign({}, jsonValues), {
            tags: Array.from(tags)
        });
    };
    State.prototype.matches = function(parentStateValue) {
        return utils.matchesState(parentStateValue, this.value);
    };
    /**
   * Whether the current state configuration has a state node with the specified `tag`.
   * @param tag
   */ State.prototype.hasTag = function(tag) {
        return this.tags.has(tag);
    };
    /**
   * Determines whether sending the `event` will cause a non-forbidden transition
   * to be selected, even if the transitions have no actions nor
   * change the state value.
   *
   * @param event The event to test
   * @returns Whether the event will cause a transition
   */ State.prototype.can = function(event) {
        var _a;
        if (environment.IS_PRODUCTION) {
            utils.warn(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
        }
        var transitionData = (_a = this.machine) === null || _a === void 0 ? void 0 : _a.getTransitionData(this, event);
        return !!(transitionData === null || transitionData === void 0 ? void 0 : transitionData.transitions.length) && // Check that at least one transition is not forbidden
        transitionData.transitions.some(function(t) {
            return t.target !== undefined || t.actions.length;
        });
    };
    return State;
}();
exports.State = State;
exports.bindActionToState = bindActionToState;
exports.isState = isState;
exports.isStateConfig = isStateConfig;
exports.stateValuesEqual = stateValuesEqual;


/***/ }),

/***/ 3418:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _tslib = __webpack_require__(4605);
var utils = __webpack_require__(3574);
var State = __webpack_require__(9716);
var actionTypes = __webpack_require__(3486);
var actions = __webpack_require__(9717);
var environment = __webpack_require__(6783);
var constants = __webpack_require__(6903);
var stateUtils = __webpack_require__(6350);
var Actor = __webpack_require__(7248);
var invokeUtils = __webpack_require__(2134);
var NULL_EVENT = "";
var STATE_IDENTIFIER = "#";
var WILDCARD = "*";
var EMPTY_OBJECT = {};
var isStateId = function(str) {
    return str[0] === STATE_IDENTIFIER;
};
var createDefaultOptions = function() {
    return {
        actions: {},
        guards: {},
        services: {},
        activities: {},
        delays: {}
    };
};
var validateArrayifiedTransitions = function(stateNode, event, transitions) {
    var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function(transition) {
        return !("cond" in transition) && !("in" in transition) && (utils.isString(transition.target) || utils.isMachine(transition.target));
    });
    var eventText = event === NULL_EVENT ? "the transient event" : "event '".concat(event, "'");
    utils.warn(!hasNonLastUnguardedTarget, "One or more transitions for ".concat(eventText, " on state '").concat(stateNode.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
};
var StateNode = /*#__PURE__*/ /** @class */ function() {
    function StateNode(/**
   * The raw config used to create the machine.
   */ config, options, /**
   * The initial extended state
   */ _context, _stateInfo) {
        if (_context === void 0) {
            _context = "context" in config ? config.context : undefined;
        }
        var _this = this;
        var _a;
        this.config = config;
        this._context = _context;
        /**
     * The order this state node appears. Corresponds to the implicit SCXML document order.
     */ this.order = -1;
        this.__xstatenode = true;
        this.__cache = {
            events: undefined,
            relativeValue: new Map(),
            initialStateValue: undefined,
            initialState: undefined,
            on: undefined,
            transitions: undefined,
            candidates: {},
            delayedTransitions: undefined
        };
        this.idMap = {};
        this.tags = [];
        this.options = Object.assign(createDefaultOptions(), options);
        this.parent = _stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.parent;
        this.key = this.config.key || (_stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.key) || this.config.id || "(machine)";
        this.machine = this.parent ? this.parent.machine : this;
        this.path = this.parent ? this.parent.path.concat(this.key) : [];
        this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : constants.STATE_DELIMITER);
        this.id = this.config.id || _tslib.__spreadArray([
            this.machine.key
        ], _tslib.__read(this.path), false).join(this.delimiter);
        this.version = this.parent ? this.parent.version : this.config.version;
        this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic");
        this.schema = this.parent ? this.machine.schema : (_a = this.config.schema) !== null && _a !== void 0 ? _a : {};
        this.description = this.config.description;
        if (!environment.IS_PRODUCTION) {
            utils.warn(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead."));
        }
        this.initial = this.config.initial;
        this.states = this.config.states ? utils.mapValues(this.config.states, function(stateConfig, key) {
            var _a;
            var stateNode = new StateNode(stateConfig, {}, undefined, {
                parent: _this,
                key: key
            });
            Object.assign(_this.idMap, _tslib.__assign((_a = {}, _a[stateNode.id] = stateNode, _a), stateNode.idMap));
            return stateNode;
        }) : EMPTY_OBJECT; // Document order
        var order = 0;
        function dfs(stateNode) {
            var e_1, _a;
            stateNode.order = order++;
            try {
                for(var _b = _tslib.__values(stateUtils.getAllChildren(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()){
                    var child = _c.value;
                    dfs(child);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }
        dfs(this); // History config
        this.history = this.config.history === true ? "shallow" : this.config.history || false;
        this._transient = !!this.config.always || (!this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function(_a) {
            var event = _a.event;
            return event === NULL_EVENT;
        }) : NULL_EVENT in this.config.on);
        this.strict = !!this.config.strict; // TODO: deprecate (entry)
        this.onEntry = utils.toArray(this.config.entry || this.config.onEntry).map(function(action) {
            return actions.toActionObject(action);
        }); // TODO: deprecate (exit)
        this.onExit = utils.toArray(this.config.exit || this.config.onExit).map(function(action) {
            return actions.toActionObject(action);
        });
        this.meta = this.config.meta;
        this.doneData = this.type === "final" ? this.config.data : undefined;
        this.invoke = utils.toArray(this.config.invoke).map(function(invokeConfig, i) {
            var _a, _b;
            if (utils.isMachine(invokeConfig)) {
                var invokeId = utils.createInvokeId(_this.id, i);
                _this.machine.options.services = _tslib.__assign((_a = {}, _a[invokeId] = invokeConfig, _a), _this.machine.options.services);
                return invokeUtils.toInvokeDefinition({
                    src: invokeId,
                    id: invokeId
                });
            } else if (utils.isString(invokeConfig.src)) {
                var invokeId = invokeConfig.id || utils.createInvokeId(_this.id, i);
                return invokeUtils.toInvokeDefinition(_tslib.__assign(_tslib.__assign({}, invokeConfig), {
                    id: invokeId,
                    src: invokeConfig.src
                }));
            } else if (utils.isMachine(invokeConfig.src) || utils.isFunction(invokeConfig.src)) {
                var invokeId = invokeConfig.id || utils.createInvokeId(_this.id, i);
                _this.machine.options.services = _tslib.__assign((_b = {}, _b[invokeId] = invokeConfig.src, _b), _this.machine.options.services);
                return invokeUtils.toInvokeDefinition(_tslib.__assign(_tslib.__assign({
                    id: invokeId
                }, invokeConfig), {
                    src: invokeId
                }));
            } else {
                var invokeSource = invokeConfig.src;
                return invokeUtils.toInvokeDefinition(_tslib.__assign(_tslib.__assign({
                    id: utils.createInvokeId(_this.id, i)
                }, invokeConfig), {
                    src: invokeSource
                }));
            }
        });
        this.activities = utils.toArray(this.config.activities).concat(this.invoke).map(function(activity) {
            return actions.toActivityDefinition(activity);
        });
        this.transition = this.transition.bind(this);
        this.tags = utils.toArray(this.config.tags); // TODO: this is the real fix for initialization once
    // state node getters are deprecated
    // if (!this.parent) {
    //   this._init();
    // }
    }
    StateNode.prototype._init = function() {
        if (this.__cache.transitions) {
            return;
        }
        stateUtils.getAllStateNodes(this).forEach(function(stateNode) {
            return stateNode.on;
        });
    };
    /**
   * Clones this state machine with custom options and context.
   *
   * @param options Options (actions, guards, activities, services) to recursively merge with the existing options.
   * @param context Custom context (will override predefined context)
   */ StateNode.prototype.withConfig = function(options, context) {
        var _a = this.options, actions = _a.actions, activities = _a.activities, guards = _a.guards, services = _a.services, delays = _a.delays;
        return new StateNode(this.config, {
            actions: _tslib.__assign(_tslib.__assign({}, actions), options.actions),
            activities: _tslib.__assign(_tslib.__assign({}, activities), options.activities),
            guards: _tslib.__assign(_tslib.__assign({}, guards), options.guards),
            services: _tslib.__assign(_tslib.__assign({}, services), options.services),
            delays: _tslib.__assign(_tslib.__assign({}, delays), options.delays)
        }, context !== null && context !== void 0 ? context : this.context);
    };
    /**
   * Clones this state machine with custom context.
   *
   * @param context Custom context (will override predefined context, not recursive)
   */ StateNode.prototype.withContext = function(context) {
        return new StateNode(this.config, this.options, context);
    };
    Object.defineProperty(StateNode.prototype, "context", {
        get: function() {
            return utils.isFunction(this._context) ? this._context() : this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "definition", {
        /**
     * The well-structured state node definition.
     */ get: function() {
            return {
                id: this.id,
                key: this.key,
                version: this.version,
                context: this.context,
                type: this.type,
                initial: this.initial,
                history: this.history,
                states: utils.mapValues(this.states, function(state) {
                    return state.definition;
                }),
                on: this.on,
                transitions: this.transitions,
                entry: this.onEntry,
                exit: this.onExit,
                activities: this.activities || [],
                meta: this.meta,
                order: this.order || -1,
                data: this.doneData,
                invoke: this.invoke,
                description: this.description,
                tags: this.tags
            };
        },
        enumerable: false,
        configurable: true
    });
    StateNode.prototype.toJSON = function() {
        return this.definition;
    };
    Object.defineProperty(StateNode.prototype, "on", {
        /**
     * The mapping of events to transitions.
     */ get: function() {
            if (this.__cache.on) {
                return this.__cache.on;
            }
            var transitions = this.transitions;
            return this.__cache.on = transitions.reduce(function(map, transition) {
                map[transition.eventType] = map[transition.eventType] || [];
                map[transition.eventType].push(transition);
                return map;
            }, {});
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "after", {
        get: function() {
            return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "transitions", {
        /**
     * All the transitions that can be taken from this state node.
     */ get: function() {
            return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
        },
        enumerable: false,
        configurable: true
    });
    StateNode.prototype.getCandidates = function(eventName) {
        if (this.__cache.candidates[eventName]) {
            return this.__cache.candidates[eventName];
        }
        var transient = eventName === NULL_EVENT;
        var candidates = this.transitions.filter(function(transition) {
            var sameEventType = transition.eventType === eventName; // null events should only match against eventless transitions
            return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
        });
        this.__cache.candidates[eventName] = candidates;
        return candidates;
    };
    /**
   * All delayed transitions from the config.
   */ StateNode.prototype.getDelayedTransitions = function() {
        var _this = this;
        var afterConfig = this.config.after;
        if (!afterConfig) {
            return [];
        }
        var mutateEntryExit = function(delay, i) {
            var delayRef = utils.isFunction(delay) ? "".concat(_this.id, ":delay[").concat(i, "]") : delay;
            var eventType = actions.after(delayRef, _this.id);
            _this.onEntry.push(actions.send(eventType, {
                delay: delay
            }));
            _this.onExit.push(actions.cancel(eventType));
            return eventType;
        };
        var delayedTransitions = utils.isArray(afterConfig) ? afterConfig.map(function(transition, i) {
            var eventType = mutateEntryExit(transition.delay, i);
            return _tslib.__assign(_tslib.__assign({}, transition), {
                event: eventType
            });
        }) : utils.flatten(Object.keys(afterConfig).map(function(delay, i) {
            var configTransition = afterConfig[delay];
            var resolvedTransition = utils.isString(configTransition) ? {
                target: configTransition
            } : configTransition;
            var resolvedDelay = !isNaN(+delay) ? +delay : delay;
            var eventType = mutateEntryExit(resolvedDelay, i);
            return utils.toArray(resolvedTransition).map(function(transition) {
                return _tslib.__assign(_tslib.__assign({}, transition), {
                    event: eventType,
                    delay: resolvedDelay
                });
            });
        }));
        return delayedTransitions.map(function(delayedTransition) {
            var delay = delayedTransition.delay;
            return _tslib.__assign(_tslib.__assign({}, _this.formatTransition(delayedTransition)), {
                delay: delay
            });
        });
    };
    /**
   * Returns the state nodes represented by the current state value.
   *
   * @param state The state value or State instance
   */ StateNode.prototype.getStateNodes = function(state) {
        var _a;
        var _this = this;
        if (!state) {
            return [];
        }
        var stateValue = state instanceof State.State ? state.value : utils.toStateValue(state, this.delimiter);
        if (utils.isString(stateValue)) {
            var initialStateValue = this.getStateNode(stateValue).initial;
            return initialStateValue !== undefined ? this.getStateNodes((_a = {}, _a[stateValue] = initialStateValue, _a)) : [
                this,
                this.states[stateValue]
            ];
        }
        var subStateKeys = Object.keys(stateValue);
        var subStateNodes = [
            this
        ];
        subStateNodes.push.apply(subStateNodes, _tslib.__spreadArray([], _tslib.__read(utils.flatten(subStateKeys.map(function(subStateKey) {
            return _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);
        }))), false));
        return subStateNodes;
    };
    /**
   * Returns `true` if this state node explicitly handles the given event.
   *
   * @param event The event in question
   */ StateNode.prototype.handles = function(event) {
        var eventType = utils.getEventType(event);
        return this.events.includes(eventType);
    };
    /**
   * Resolves the given `state` to a new `State` instance relative to this machine.
   *
   * This ensures that `.events` and `.nextEvents` represent the correct values.
   *
   * @param state The state to resolve
   */ StateNode.prototype.resolveState = function(state) {
        var stateFromConfig = state instanceof State.State ? state : State.State.create(state);
        var configuration = Array.from(stateUtils.getConfiguration([], this.getStateNodes(stateFromConfig.value)));
        return new State.State(_tslib.__assign(_tslib.__assign({}, stateFromConfig), {
            value: this.resolve(stateFromConfig.value),
            configuration: configuration,
            done: stateUtils.isInFinalState(configuration, this),
            tags: stateUtils.getTagsFromConfiguration(configuration),
            machine: this.machine
        }));
    };
    StateNode.prototype.transitionLeafNode = function(stateValue, state, _event) {
        var stateNode = this.getStateNode(stateValue);
        var next = stateNode.next(state, _event);
        if (!next || !next.transitions.length) {
            return this.next(state, _event);
        }
        return next;
    };
    StateNode.prototype.transitionCompoundNode = function(stateValue, state, _event) {
        var subStateKeys = Object.keys(stateValue);
        var stateNode = this.getStateNode(subStateKeys[0]);
        var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);
        if (!next || !next.transitions.length) {
            return this.next(state, _event);
        }
        return next;
    };
    StateNode.prototype.transitionParallelNode = function(stateValue, state, _event) {
        var e_2, _a;
        var transitionMap = {};
        try {
            for(var _b = _tslib.__values(Object.keys(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()){
                var subStateKey = _c.value;
                var subStateValue = stateValue[subStateKey];
                if (!subStateValue) {
                    continue;
                }
                var subStateNode = this.getStateNode(subStateKey);
                var next = subStateNode._transition(subStateValue, state, _event);
                if (next) {
                    transitionMap[subStateKey] = next;
                }
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
        var stateTransitions = Object.keys(transitionMap).map(function(key) {
            return transitionMap[key];
        });
        var enabledTransitions = utils.flatten(stateTransitions.map(function(st) {
            return st.transitions;
        }));
        var willTransition = stateTransitions.some(function(st) {
            return st.transitions.length > 0;
        });
        if (!willTransition) {
            return this.next(state, _event);
        }
        var configuration = utils.flatten(Object.keys(transitionMap).map(function(key) {
            return transitionMap[key].configuration;
        }));
        return {
            transitions: enabledTransitions,
            exitSet: utils.flatten(stateTransitions.map(function(t) {
                return t.exitSet;
            })),
            configuration: configuration,
            source: state,
            actions: utils.flatten(Object.keys(transitionMap).map(function(key) {
                return transitionMap[key].actions;
            }))
        };
    };
    StateNode.prototype._transition = function(stateValue, state, _event) {
        // leaf node
        if (utils.isString(stateValue)) {
            return this.transitionLeafNode(stateValue, state, _event);
        } // hierarchical node
        if (Object.keys(stateValue).length === 1) {
            return this.transitionCompoundNode(stateValue, state, _event);
        } // orthogonal node
        return this.transitionParallelNode(stateValue, state, _event);
    };
    StateNode.prototype.getTransitionData = function(state, event) {
        return this._transition(state.value, state, utils.toSCXMLEvent(event));
    };
    StateNode.prototype.next = function(state, _event) {
        var e_3, _a;
        var _this = this;
        var eventName = _event.name;
        var actions = [];
        var nextStateNodes = [];
        var selectedTransition;
        try {
            for(var _b = _tslib.__values(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()){
                var candidate = _c.value;
                var cond = candidate.cond, stateIn = candidate.in;
                var resolvedContext = state.context;
                var isInState = stateIn ? utils.isString(stateIn) && isStateId(stateIn) ? state.matches(utils.toStateValue(this.getStateNodeById(stateIn).path, this.delimiter)) : utils.matchesState(utils.toStateValue(stateIn, this.delimiter), utils.path(this.path.slice(0, -2))(state.value)) : true;
                var guardPassed = false;
                try {
                    guardPassed = !cond || utils.evaluateGuard(this.machine, cond, resolvedContext, _event, state);
                } catch (err) {
                    throw new Error("Unable to evaluate guard '".concat(cond.name || cond.type, "' in transition for event '").concat(eventName, "' in state node '").concat(this.id, "':\n").concat(err.message));
                }
                if (guardPassed && isInState) {
                    if (candidate.target !== undefined) {
                        nextStateNodes = candidate.target;
                    }
                    actions.push.apply(actions, _tslib.__spreadArray([], _tslib.__read(candidate.actions), false));
                    selectedTransition = candidate;
                    break;
                }
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
        if (!selectedTransition) {
            return undefined;
        }
        if (!nextStateNodes.length) {
            return {
                transitions: [
                    selectedTransition
                ],
                exitSet: [],
                configuration: state.value ? [
                    this
                ] : [],
                source: state,
                actions: actions
            };
        }
        var allNextStateNodes = utils.flatten(nextStateNodes.map(function(stateNode) {
            return _this.getRelativeStateNodes(stateNode, state.historyValue);
        }));
        var isInternal = !!selectedTransition.internal;
        return {
            transitions: [
                selectedTransition
            ],
            exitSet: isInternal ? [] : utils.flatten(nextStateNodes.map(function(targetNode) {
                return _this.getPotentiallyReenteringNodes(targetNode);
            })),
            configuration: allNextStateNodes,
            source: state,
            actions: actions
        };
    }; // even though the name of this function mentions reentry nodes
    // we are pushing its result into `exitSet`
    // that's because what we exit might be reentered (it's an invariant of reentrancy)
    StateNode.prototype.getPotentiallyReenteringNodes = function(targetNode) {
        if (this.order < targetNode.order) {
            return [
                this
            ];
        }
        var nodes = [];
        var marker = this;
        var possibleAncestor = targetNode;
        while(marker && marker !== possibleAncestor){
            nodes.push(marker);
            marker = marker.parent;
        }
        if (marker !== possibleAncestor) {
            // we never got to `possibleAncestor`, therefore the initial `marker` "escapes" it
            // it's in a different part of the tree so no states will be reentered for such an external transition
            return [];
        }
        nodes.push(possibleAncestor);
        return nodes;
    };
    StateNode.prototype.getActions = function(resolvedConfig, isDone, transition, currentContext, _event, prevState, predictableExec) {
        var e_4, _a, e_5, _b;
        var _this = this;
        var prevConfig = prevState ? stateUtils.getConfiguration([], this.getStateNodes(prevState.value)) : [];
        var entrySet = new Set();
        try {
            for(var _c = _tslib.__values(Array.from(resolvedConfig).sort(function(a, b) {
                return a.order - b.order;
            })), _d = _c.next(); !_d.done; _d = _c.next()){
                var sn = _d.value;
                if (!stateUtils.has(prevConfig, sn) || stateUtils.has(transition.exitSet, sn) || sn.parent && entrySet.has(sn.parent)) {
                    entrySet.add(sn);
                }
            }
        } catch (e_4_1) {
            e_4 = {
                error: e_4_1
            };
        } finally{
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            } finally{
                if (e_4) throw e_4.error;
            }
        }
        try {
            for(var prevConfig_1 = _tslib.__values(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()){
                var sn = prevConfig_1_1.value;
                if (!stateUtils.has(resolvedConfig, sn) || stateUtils.has(transition.exitSet, sn.parent)) {
                    transition.exitSet.push(sn);
                }
            }
        } catch (e_5_1) {
            e_5 = {
                error: e_5_1
            };
        } finally{
            try {
                if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return)) _b.call(prevConfig_1);
            } finally{
                if (e_5) throw e_5.error;
            }
        }
        transition.exitSet.sort(function(a, b) {
            return b.order - a.order;
        });
        var entryStates = Array.from(entrySet).sort(function(a, b) {
            return a.order - b.order;
        });
        var exitStates = new Set(transition.exitSet);
        var doneEvents = utils.flatten(entryStates.map(function(sn) {
            var events = [];
            if (sn.type !== "final") {
                return events;
            }
            var parent = sn.parent;
            if (!parent.parent) {
                return events;
            }
            events.push(actions.done(sn.id, sn.doneData), actions.done(parent.id, sn.doneData ? utils.mapContext(sn.doneData, currentContext, _event) : undefined));
            var grandparent = parent.parent;
            if (grandparent.type === "parallel") {
                if (stateUtils.getChildren(grandparent).every(function(parentNode) {
                    return stateUtils.isInFinalState(transition.configuration, parentNode);
                })) {
                    events.push(actions.done(grandparent.id));
                }
            }
            return events;
        }));
        var entryActions = entryStates.map(function(stateNode) {
            var entryActions = stateNode.onEntry;
            var invokeActions = stateNode.activities.map(function(activity) {
                return actions.start(activity);
            });
            return {
                type: "entry",
                actions: actions.toActionObjects(predictableExec ? _tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(entryActions), false), _tslib.__read(invokeActions), false) : _tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(invokeActions), false), _tslib.__read(entryActions), false), _this.machine.options.actions)
            };
        }).concat({
            type: "state_done",
            actions: doneEvents.map(function(event) {
                return actions.raise(event);
            })
        });
        var exitActions = Array.from(exitStates).map(function(stateNode) {
            return {
                type: "exit",
                actions: actions.toActionObjects(_tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(stateNode.onExit), false), _tslib.__read(stateNode.activities.map(function(activity) {
                    return actions.stop(activity);
                })), false), _this.machine.options.actions)
            };
        });
        var actions$1 = exitActions.concat({
            type: "transition",
            actions: actions.toActionObjects(transition.actions, this.machine.options.actions)
        }).concat(entryActions);
        if (isDone) {
            var stopActions = actions.toActionObjects(utils.flatten(_tslib.__spreadArray([], _tslib.__read(resolvedConfig), false).sort(function(a, b) {
                return b.order - a.order;
            }).map(function(stateNode) {
                return stateNode.onExit;
            })), this.machine.options.actions).filter(function(action) {
                return !utils.isRaisableAction(action);
            });
            return actions$1.concat({
                type: "stop",
                actions: stopActions
            });
        }
        return actions$1;
    };
    /**
   * Determines the next state given the current `state` and sent `event`.
   *
   * @param state The current State instance or state value
   * @param event The event that was sent at the current state
   * @param context The current context (extended state) of the current state
   */ StateNode.prototype.transition = function(state, event, context, exec) {
        if (state === void 0) {
            state = this.initialState;
        }
        var _event = utils.toSCXMLEvent(event);
        var currentState;
        if (state instanceof State.State) {
            currentState = context === undefined ? state : this.resolveState(State.State.from(state, context));
        } else {
            var resolvedStateValue = utils.isString(state) ? this.resolve(utils.pathToStateValue(this.getResolvedPath(state))) : this.resolve(state);
            var resolvedContext = context !== null && context !== void 0 ? context : this.machine.context;
            currentState = this.resolveState(State.State.from(resolvedStateValue, resolvedContext));
        }
        if (!environment.IS_PRODUCTION && _event.name === WILDCARD) {
            throw new Error("An event cannot have the wildcard type ('".concat(WILDCARD, "')"));
        }
        if (this.strict) {
            if (!this.events.includes(_event.name) && !utils.isBuiltInEvent(_event.name)) {
                throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(_event.name, "'"));
            }
        }
        var stateTransition = this._transition(currentState.value, currentState, _event) || {
            transitions: [],
            configuration: [],
            exitSet: [],
            source: currentState,
            actions: []
        };
        var prevConfig = stateUtils.getConfiguration([], this.getStateNodes(currentState.value));
        var resolvedConfig = stateTransition.configuration.length ? stateUtils.getConfiguration(prevConfig, stateTransition.configuration) : prevConfig;
        stateTransition.configuration = _tslib.__spreadArray([], _tslib.__read(resolvedConfig), false);
        return this.resolveTransition(stateTransition, currentState, currentState.context, exec, _event);
    };
    StateNode.prototype.resolveRaisedTransition = function(state, _event, originalEvent, predictableExec) {
        var _a;
        var currentActions = state.actions;
        state = this.transition(state, _event, undefined, predictableExec); // Save original event to state
        // TODO: this should be the raised event! Delete in V5 (breaking)
        state._event = originalEvent;
        state.event = originalEvent.data;
        (_a = state.actions).unshift.apply(_a, _tslib.__spreadArray([], _tslib.__read(currentActions), false));
        return state;
    };
    StateNode.prototype.resolveTransition = function(stateTransition, currentState, context, predictableExec, _event) {
        var e_6, _a, e_7, _b;
        var _this = this;
        if (_event === void 0) {
            _event = actions.initEvent;
        }
        var configuration = stateTransition.configuration; // Transition will "apply" if:
        // - this is the initial state (there is no current state)
        // - OR there are transitions
        var willTransition = !currentState || stateTransition.transitions.length > 0;
        var resolvedConfiguration = willTransition ? stateTransition.configuration : currentState ? currentState.configuration : [];
        var isDone = stateUtils.isInFinalState(resolvedConfiguration, this);
        var resolvedStateValue = willTransition ? stateUtils.getValue(this.machine, configuration) : undefined;
        var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : undefined : undefined;
        var actionBlocks = this.getActions(new Set(resolvedConfiguration), isDone, stateTransition, context, _event, currentState, predictableExec);
        var activities = currentState ? _tslib.__assign({}, currentState.activities) : {};
        try {
            for(var actionBlocks_1 = _tslib.__values(actionBlocks), actionBlocks_1_1 = actionBlocks_1.next(); !actionBlocks_1_1.done; actionBlocks_1_1 = actionBlocks_1.next()){
                var block = actionBlocks_1_1.value;
                try {
                    for(var _c = (e_7 = void 0, _tslib.__values(block.actions)), _d = _c.next(); !_d.done; _d = _c.next()){
                        var action = _d.value;
                        if (action.type === actionTypes.start) {
                            activities[action.activity.id || action.activity.type] = action;
                        } else if (action.type === actionTypes.stop) {
                            activities[action.activity.id || action.activity.type] = false;
                        }
                    }
                } catch (e_7_1) {
                    e_7 = {
                        error: e_7_1
                    };
                } finally{
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    } finally{
                        if (e_7) throw e_7.error;
                    }
                }
            }
        } catch (e_6_1) {
            e_6 = {
                error: e_6_1
            };
        } finally{
            try {
                if (actionBlocks_1_1 && !actionBlocks_1_1.done && (_a = actionBlocks_1.return)) _a.call(actionBlocks_1);
            } finally{
                if (e_6) throw e_6.error;
            }
        }
        var _e = _tslib.__read(actions.resolveActions(this, currentState, context, _event, actionBlocks, predictableExec, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), resolvedActions = _e[0], updatedContext = _e[1];
        var _f = _tslib.__read(utils.partition(resolvedActions, utils.isRaisableAction), 2), raisedEvents = _f[0], nonRaisedActions = _f[1];
        var invokeActions = resolvedActions.filter(function(action) {
            var _a;
            return action.type === actionTypes.start && ((_a = action.activity) === null || _a === void 0 ? void 0 : _a.type) === actionTypes.invoke;
        });
        var children = invokeActions.reduce(function(acc, action) {
            acc[action.activity.id] = Actor.createInvocableActor(action.activity, _this.machine, updatedContext, _event);
            return acc;
        }, currentState ? _tslib.__assign({}, currentState.children) : {});
        var nextState = new State.State({
            value: resolvedStateValue || currentState.value,
            context: updatedContext,
            _event: _event,
            // Persist _sessionid between states
            _sessionid: currentState ? currentState._sessionid : null,
            historyValue: resolvedStateValue ? historyValue ? utils.updateHistoryValue(historyValue, resolvedStateValue) : undefined : currentState ? currentState.historyValue : undefined,
            history: !resolvedStateValue || stateTransition.source ? currentState : undefined,
            actions: resolvedStateValue ? nonRaisedActions : [],
            activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
            events: [],
            configuration: resolvedConfiguration,
            transitions: stateTransition.transitions,
            children: children,
            done: isDone,
            tags: stateUtils.getTagsFromConfiguration(resolvedConfiguration),
            machine: this
        });
        var didUpdateContext = context !== updatedContext;
        nextState.changed = _event.name === actionTypes.update || didUpdateContext; // Dispose of penultimate histories to prevent memory leaks
        var history = nextState.history;
        if (history) {
            delete history.history;
        } // There are transient transitions if the machine is not in a final state
        // and if some of the state nodes have transient ("always") transitions.
        var hasAlwaysTransitions = !isDone && (this._transient || configuration.some(function(stateNode) {
            return stateNode._transient;
        })); // If there are no enabled transitions, check if there are transient transitions.
        // If there are transient transitions, continue checking for more transitions
        // because an transient transition should be triggered even if there are no
        // enabled transitions.
        //
        // If we're already working on an transient transition then stop to prevent an infinite loop.
        //
        // Otherwise, if there are no enabled nor transient transitions, we are done.
        if (!willTransition && (!hasAlwaysTransitions || _event.name === NULL_EVENT)) {
            return nextState;
        }
        var maybeNextState = nextState;
        if (!isDone) {
            if (hasAlwaysTransitions) {
                maybeNextState = this.resolveRaisedTransition(maybeNextState, {
                    type: actionTypes.nullEvent
                }, _event, predictableExec);
            }
            while(raisedEvents.length){
                var raisedEvent = raisedEvents.shift();
                maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event, predictableExec);
            }
        } // Detect if state changed
        var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || didUpdateContext || typeof history.value !== typeof maybeNextState.value || !State.stateValuesEqual(maybeNextState.value, history.value) : undefined);
        maybeNextState.changed = changed; // Preserve original history after raised events
        maybeNextState.history = history;
        return maybeNextState;
    };
    /**
   * Returns the child state node from its relative `stateKey`, or throws.
   */ StateNode.prototype.getStateNode = function(stateKey) {
        if (isStateId(stateKey)) {
            return this.machine.getStateNodeById(stateKey);
        }
        if (!this.states) {
            throw new Error("Unable to retrieve child state '".concat(stateKey, "' from '").concat(this.id, "'; no child states exist."));
        }
        var result = this.states[stateKey];
        if (!result) {
            throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
        }
        return result;
    };
    /**
   * Returns the state node with the given `stateId`, or throws.
   *
   * @param stateId The state ID. The prefix "#" is removed.
   */ StateNode.prototype.getStateNodeById = function(stateId) {
        var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;
        if (resolvedStateId === this.id) {
            return this;
        }
        var stateNode = this.machine.idMap[resolvedStateId];
        if (!stateNode) {
            throw new Error("Child state node '#".concat(resolvedStateId, "' does not exist on machine '").concat(this.id, "'"));
        }
        return stateNode;
    };
    /**
   * Returns the relative state node from the given `statePath`, or throws.
   *
   * @param statePath The string or string array relative path to the state node.
   */ StateNode.prototype.getStateNodeByPath = function(statePath) {
        if (typeof statePath === "string" && isStateId(statePath)) {
            try {
                return this.getStateNodeById(statePath.slice(1));
            } catch (e) {
            // throw e;
            }
        }
        var arrayStatePath = utils.toStatePath(statePath, this.delimiter).slice();
        var currentStateNode = this;
        while(arrayStatePath.length){
            var key = arrayStatePath.shift();
            if (!key.length) {
                break;
            }
            currentStateNode = currentStateNode.getStateNode(key);
        }
        return currentStateNode;
    };
    /**
   * Resolves a partial state value with its full representation in this machine.
   *
   * @param stateValue The partial state value to resolve.
   */ StateNode.prototype.resolve = function(stateValue) {
        var _a;
        var _this = this;
        if (!stateValue) {
            return this.initialStateValue || EMPTY_OBJECT; // TODO: type-specific properties
        }
        switch(this.type){
            case "parallel":
                return utils.mapValues(this.initialStateValue, function(subStateValue, subStateKey) {
                    return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
                });
            case "compound":
                if (utils.isString(stateValue)) {
                    var subStateNode = this.getStateNode(stateValue);
                    if (subStateNode.type === "parallel" || subStateNode.type === "compound") {
                        return _a = {}, _a[stateValue] = subStateNode.initialStateValue, _a;
                    }
                    return stateValue;
                }
                if (!Object.keys(stateValue).length) {
                    return this.initialStateValue || {};
                }
                return utils.mapValues(stateValue, function(subStateValue, subStateKey) {
                    return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
                });
            default:
                return stateValue || EMPTY_OBJECT;
        }
    };
    StateNode.prototype.getResolvedPath = function(stateIdentifier) {
        if (isStateId(stateIdentifier)) {
            var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];
            if (!stateNode) {
                throw new Error("Unable to find state node '".concat(stateIdentifier, "'"));
            }
            return stateNode.path;
        }
        return utils.toStatePath(stateIdentifier, this.delimiter);
    };
    Object.defineProperty(StateNode.prototype, "initialStateValue", {
        get: function() {
            var _a;
            if (this.__cache.initialStateValue) {
                return this.__cache.initialStateValue;
            }
            var initialStateValue;
            if (this.type === "parallel") {
                initialStateValue = utils.mapFilterValues(this.states, function(state) {
                    return state.initialStateValue || EMPTY_OBJECT;
                }, function(stateNode) {
                    return !(stateNode.type === "history");
                });
            } else if (this.initial !== undefined) {
                if (!this.states[this.initial]) {
                    throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
                }
                initialStateValue = stateUtils.isLeafNode(this.states[this.initial]) ? this.initial : (_a = {}, _a[this.initial] = this.states[this.initial].initialStateValue, _a);
            } else {
                // The finite state value of a machine without child states is just an empty object
                initialStateValue = {};
            }
            this.__cache.initialStateValue = initialStateValue;
            return this.__cache.initialStateValue;
        },
        enumerable: false,
        configurable: true
    });
    StateNode.prototype.getInitialState = function(stateValue, context) {
        this._init(); // TODO: this should be in the constructor (see note in constructor)
        var configuration = this.getStateNodes(stateValue);
        return this.resolveTransition({
            configuration: configuration,
            exitSet: [],
            transitions: [],
            source: undefined,
            actions: []
        }, undefined, context !== null && context !== void 0 ? context : this.machine.context, undefined);
    };
    Object.defineProperty(StateNode.prototype, "initialState", {
        /**
     * The initial State instance, which includes all actions to be executed from
     * entering the initial state.
     */ get: function() {
            var initialStateValue = this.initialStateValue;
            if (!initialStateValue) {
                throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
            }
            return this.getInitialState(initialStateValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "target", {
        /**
     * The target state value of the history state node, if it exists. This represents the
     * default state value to transition to if no history value exists yet.
     */ get: function() {
            var target;
            if (this.type === "history") {
                var historyConfig = this.config;
                if (utils.isString(historyConfig.target)) {
                    target = isStateId(historyConfig.target) ? utils.pathToStateValue(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
                } else {
                    target = historyConfig.target;
                }
            }
            return target;
        },
        enumerable: false,
        configurable: true
    });
    /**
   * Returns the leaf nodes from a state path relative to this state node.
   *
   * @param relativeStateId The relative state path to retrieve the state nodes
   * @param history The previous state to retrieve history
   * @param resolve Whether state nodes should resolve to initial child state nodes
   */ StateNode.prototype.getRelativeStateNodes = function(relativeStateId, historyValue, resolve) {
        if (resolve === void 0) {
            resolve = true;
        }
        return resolve ? relativeStateId.type === "history" ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [
            relativeStateId
        ];
    };
    Object.defineProperty(StateNode.prototype, "initialStateNodes", {
        get: function() {
            var _this = this;
            if (stateUtils.isLeafNode(this)) {
                return [
                    this
                ];
            } // Case when state node is compound but no initial state is defined
            if (this.type === "compound" && !this.initial) {
                if (!environment.IS_PRODUCTION) {
                    utils.warn(false, "Compound state node '".concat(this.id, "' has no initial state."));
                }
                return [
                    this
                ];
            }
            var initialStateNodePaths = utils.toStatePaths(this.initialStateValue);
            return utils.flatten(initialStateNodePaths.map(function(initialPath) {
                return _this.getFromRelativePath(initialPath);
            }));
        },
        enumerable: false,
        configurable: true
    });
    /**
   * Retrieves state nodes from a relative path to this state node.
   *
   * @param relativePath The relative path from this state node
   * @param historyValue
   */ StateNode.prototype.getFromRelativePath = function(relativePath) {
        if (!relativePath.length) {
            return [
                this
            ];
        }
        var _a = _tslib.__read(relativePath), stateKey = _a[0], childStatePath = _a.slice(1);
        if (!this.states) {
            throw new Error("Cannot retrieve subPath '".concat(stateKey, "' from node with no states"));
        }
        var childStateNode = this.getStateNode(stateKey);
        if (childStateNode.type === "history") {
            return childStateNode.resolveHistory();
        }
        if (!this.states[stateKey]) {
            throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
        }
        return this.states[stateKey].getFromRelativePath(childStatePath);
    };
    StateNode.prototype.historyValue = function(relativeStateValue) {
        if (!Object.keys(this.states).length) {
            return undefined;
        }
        return {
            current: relativeStateValue || this.initialStateValue,
            states: utils.mapFilterValues(this.states, function(stateNode, key) {
                if (!relativeStateValue) {
                    return stateNode.historyValue();
                }
                var subStateValue = utils.isString(relativeStateValue) ? undefined : relativeStateValue[key];
                return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
            }, function(stateNode) {
                return !stateNode.history;
            })
        };
    };
    /**
   * Resolves to the historical value(s) of the parent state node,
   * represented by state nodes.
   *
   * @param historyValue
   */ StateNode.prototype.resolveHistory = function(historyValue) {
        var _this = this;
        if (this.type !== "history") {
            return [
                this
            ];
        }
        var parent = this.parent;
        if (!historyValue) {
            var historyTarget = this.target;
            return historyTarget ? utils.flatten(utils.toStatePaths(historyTarget).map(function(relativeChildPath) {
                return parent.getFromRelativePath(relativeChildPath);
            })) : parent.initialStateNodes;
        }
        var subHistoryValue = utils.nestedPath(parent.path, "states")(historyValue).current;
        if (utils.isString(subHistoryValue)) {
            return [
                parent.getStateNode(subHistoryValue)
            ];
        }
        return utils.flatten(utils.toStatePaths(subHistoryValue).map(function(subStatePath) {
            return _this.history === "deep" ? parent.getFromRelativePath(subStatePath) : [
                parent.states[subStatePath[0]]
            ];
        }));
    };
    Object.defineProperty(StateNode.prototype, "stateIds", {
        /**
     * All the state node IDs of this state node and its descendant state nodes.
     */ get: function() {
            var _this = this;
            var childStateIds = utils.flatten(Object.keys(this.states).map(function(stateKey) {
                return _this.states[stateKey].stateIds;
            }));
            return [
                this.id
            ].concat(childStateIds);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "events", {
        /**
     * All the event types accepted by this state node and its descendants.
     */ get: function() {
            var e_8, _a, e_9, _b;
            if (this.__cache.events) {
                return this.__cache.events;
            }
            var states = this.states;
            var events = new Set(this.ownEvents);
            if (states) {
                try {
                    for(var _c = _tslib.__values(Object.keys(states)), _d = _c.next(); !_d.done; _d = _c.next()){
                        var stateId = _d.value;
                        var state = states[stateId];
                        if (state.states) {
                            try {
                                for(var _e = (e_9 = void 0, _tslib.__values(state.events)), _f = _e.next(); !_f.done; _f = _e.next()){
                                    var event_1 = _f.value;
                                    events.add("".concat(event_1));
                                }
                            } catch (e_9_1) {
                                e_9 = {
                                    error: e_9_1
                                };
                            } finally{
                                try {
                                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                } finally{
                                    if (e_9) throw e_9.error;
                                }
                            }
                        }
                    }
                } catch (e_8_1) {
                    e_8 = {
                        error: e_8_1
                    };
                } finally{
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    } finally{
                        if (e_8) throw e_8.error;
                    }
                }
            }
            return this.__cache.events = Array.from(events);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateNode.prototype, "ownEvents", {
        /**
     * All the events that have transitions directly from this state node.
     *
     * Excludes any inert events.
     */ get: function() {
            var events = new Set(this.transitions.filter(function(transition) {
                return !(!transition.target && !transition.actions.length && transition.internal);
            }).map(function(transition) {
                return transition.eventType;
            }));
            return Array.from(events);
        },
        enumerable: false,
        configurable: true
    });
    StateNode.prototype.resolveTarget = function(_target) {
        var _this = this;
        if (_target === undefined) {
            // an undefined target signals that the state node should not transition from that state when receiving that event
            return undefined;
        }
        return _target.map(function(target) {
            if (!utils.isString(target)) {
                return target;
            }
            var isInternalTarget = target[0] === _this.delimiter; // If internal target is defined on machine,
            // do not include machine key on target
            if (isInternalTarget && !_this.parent) {
                return _this.getStateNodeByPath(target.slice(1));
            }
            var resolvedTarget = isInternalTarget ? _this.key + target : target;
            if (_this.parent) {
                try {
                    var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);
                    return targetStateNode;
                } catch (err) {
                    throw new Error("Invalid transition definition for state node '".concat(_this.id, "':\n").concat(err.message));
                }
            } else {
                return _this.getStateNodeByPath(resolvedTarget);
            }
        });
    };
    StateNode.prototype.formatTransition = function(transitionConfig) {
        var _this = this;
        var normalizedTarget = utils.normalizeTarget(transitionConfig.target);
        var internal = "internal" in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function(_target) {
            return utils.isString(_target) && _target[0] === _this.delimiter;
        }) : true;
        var guards = this.machine.options.guards;
        var target = this.resolveTarget(normalizedTarget);
        var transition = _tslib.__assign(_tslib.__assign({}, transitionConfig), {
            actions: actions.toActionObjects(utils.toArray(transitionConfig.actions)),
            cond: utils.toGuard(transitionConfig.cond, guards),
            target: target,
            source: this,
            internal: internal,
            eventType: transitionConfig.event,
            toJSON: function() {
                return _tslib.__assign(_tslib.__assign({}, transition), {
                    target: transition.target ? transition.target.map(function(t) {
                        return "#".concat(t.id);
                    }) : undefined,
                    source: "#".concat(_this.id)
                });
            }
        });
        return transition;
    };
    StateNode.prototype.formatTransitions = function() {
        var e_10, _a;
        var _this = this;
        var onConfig;
        if (!this.config.on) {
            onConfig = [];
        } else if (Array.isArray(this.config.on)) {
            onConfig = this.config.on;
        } else {
            var _b = this.config.on, _c = WILDCARD, _d = _b[_c], wildcardConfigs = _d === void 0 ? [] : _d, strictTransitionConfigs_1 = _tslib.__rest(_b, [
                typeof _c === "symbol" ? _c : _c + ""
            ]);
            onConfig = utils.flatten(Object.keys(strictTransitionConfigs_1).map(function(key) {
                if (!environment.IS_PRODUCTION && key === NULL_EVENT) {
                    utils.warn(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(_this.id, '".'));
                }
                var transitionConfigArray = utils.toTransitionConfigArray(key, strictTransitionConfigs_1[key]);
                if (!environment.IS_PRODUCTION) {
                    validateArrayifiedTransitions(_this, key, transitionConfigArray);
                }
                return transitionConfigArray;
            }).concat(utils.toTransitionConfigArray(WILDCARD, wildcardConfigs)));
        }
        var eventlessConfig = this.config.always ? utils.toTransitionConfigArray("", this.config.always) : [];
        var doneConfig = this.config.onDone ? utils.toTransitionConfigArray(String(actions.done(this.id)), this.config.onDone) : [];
        if (!environment.IS_PRODUCTION) {
            utils.warn(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
        }
        var invokeConfig = utils.flatten(this.invoke.map(function(invokeDef) {
            var settleTransitions = [];
            if (invokeDef.onDone) {
                settleTransitions.push.apply(settleTransitions, _tslib.__spreadArray([], _tslib.__read(utils.toTransitionConfigArray(String(actions.doneInvoke(invokeDef.id)), invokeDef.onDone)), false));
            }
            if (invokeDef.onError) {
                settleTransitions.push.apply(settleTransitions, _tslib.__spreadArray([], _tslib.__read(utils.toTransitionConfigArray(String(actions.error(invokeDef.id)), invokeDef.onError)), false));
            }
            return settleTransitions;
        }));
        var delayedTransitions = this.after;
        var formattedTransitions = utils.flatten(_tslib.__spreadArray(_tslib.__spreadArray(_tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(doneConfig), false), _tslib.__read(invokeConfig), false), _tslib.__read(onConfig), false), _tslib.__read(eventlessConfig), false).map(function(transitionConfig) {
            return utils.toArray(transitionConfig).map(function(transition) {
                return _this.formatTransition(transition);
            });
        }));
        try {
            for(var delayedTransitions_1 = _tslib.__values(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()){
                var delayedTransition = delayedTransitions_1_1.value;
                formattedTransitions.push(delayedTransition);
            }
        } catch (e_10_1) {
            e_10 = {
                error: e_10_1
            };
        } finally{
            try {
                if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a = delayedTransitions_1.return)) _a.call(delayedTransitions_1);
            } finally{
                if (e_10) throw e_10.error;
            }
        }
        return formattedTransitions;
    };
    return StateNode;
}();
exports.StateNode = StateNode;


/***/ }),

/***/ 4605:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ exports.__assign = function() {
    exports.__assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
exports.__read = __read;
exports.__rest = __rest;
exports.__spreadArray = __spreadArray;
exports.__values = __values;


/***/ }),

/***/ 3486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var types = __webpack_require__(6187);
var start = types.ActionTypes.Start;
var stop = types.ActionTypes.Stop;
var raise = types.ActionTypes.Raise;
var send = types.ActionTypes.Send;
var cancel = types.ActionTypes.Cancel;
var nullEvent = types.ActionTypes.NullEvent;
var assign = types.ActionTypes.Assign;
var after = types.ActionTypes.After;
var doneState = types.ActionTypes.DoneState;
var log = types.ActionTypes.Log;
var init = types.ActionTypes.Init;
var invoke = types.ActionTypes.Invoke;
var errorExecution = types.ActionTypes.ErrorExecution;
var errorPlatform = types.ActionTypes.ErrorPlatform;
var error = types.ActionTypes.ErrorCustom;
var update = types.ActionTypes.Update;
var choose = types.ActionTypes.Choose;
var pure = types.ActionTypes.Pure;
exports.after = after;
exports.assign = assign;
exports.cancel = cancel;
exports.choose = choose;
exports.doneState = doneState;
exports.error = error;
exports.errorExecution = errorExecution;
exports.errorPlatform = errorPlatform;
exports.init = init;
exports.invoke = invoke;
exports.log = log;
exports.nullEvent = nullEvent;
exports.pure = pure;
exports.raise = raise;
exports.send = send;
exports.start = start;
exports.stop = stop;
exports.update = update;


/***/ }),

/***/ 9717:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _tslib = __webpack_require__(4605);
var types = __webpack_require__(6187);
var actionTypes = __webpack_require__(3486);
var utils = __webpack_require__(3574);
var environment = __webpack_require__(6783);
var initEvent = /*#__PURE__*/ utils.toSCXMLEvent({
    type: actionTypes.init
});
function getActionFunction(actionType, actionFunctionMap) {
    return actionFunctionMap ? actionFunctionMap[actionType] || undefined : undefined;
}
function toActionObject(action, actionFunctionMap) {
    var actionObject;
    if (utils.isString(action) || typeof action === "number") {
        var exec = getActionFunction(action, actionFunctionMap);
        if (utils.isFunction(exec)) {
            actionObject = {
                type: action,
                exec: exec
            };
        } else if (exec) {
            actionObject = exec;
        } else {
            actionObject = {
                type: action,
                exec: undefined
            };
        }
    } else if (utils.isFunction(action)) {
        actionObject = {
            // Convert action to string if unnamed
            type: action.name || action.toString(),
            exec: action
        };
    } else {
        var exec = getActionFunction(action.type, actionFunctionMap);
        if (utils.isFunction(exec)) {
            actionObject = _tslib.__assign(_tslib.__assign({}, action), {
                exec: exec
            });
        } else if (exec) {
            var actionType = exec.type || action.type;
            actionObject = _tslib.__assign(_tslib.__assign(_tslib.__assign({}, exec), action), {
                type: actionType
            });
        } else {
            actionObject = action;
        }
    }
    return actionObject;
}
var toActionObjects = function(action, actionFunctionMap) {
    if (!action) {
        return [];
    }
    var actions = utils.isArray(action) ? action : [
        action
    ];
    return actions.map(function(subAction) {
        return toActionObject(subAction, actionFunctionMap);
    });
};
function toActivityDefinition(action) {
    var actionObject = toActionObject(action);
    return _tslib.__assign(_tslib.__assign({
        id: utils.isString(action) ? action : actionObject.id
    }, actionObject), {
        type: actionObject.type
    });
}
/**
 * Raises an event. This places the event in the internal event queue, so that
 * the event is immediately consumed by the machine in the current step.
 *
 * @param eventType The event to raise.
 */ function raise(event, options) {
    return {
        type: actionTypes.raise,
        event: typeof event === "function" ? event : utils.toEventObject(event),
        delay: options ? options.delay : undefined,
        id: options === null || options === void 0 ? void 0 : options.id
    };
}
function resolveRaise(action, ctx, _event, delaysMap) {
    var meta = {
        _event: _event
    };
    var resolvedEvent = utils.toSCXMLEvent(utils.isFunction(action.event) ? action.event(ctx, _event.data, meta) : action.event);
    var resolvedDelay;
    if (utils.isString(action.delay)) {
        var configDelay = delaysMap && delaysMap[action.delay];
        resolvedDelay = utils.isFunction(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
    } else {
        resolvedDelay = utils.isFunction(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
    }
    return _tslib.__assign(_tslib.__assign({}, action), {
        type: actionTypes.raise,
        _event: resolvedEvent,
        delay: resolvedDelay
    });
}
/**
 * Sends an event. This returns an action that will be read by an interpreter to
 * send the event in the next step, after the current step is finished executing.
 *
 * @deprecated Use the `sendTo(...)` action creator instead.
 *
 * @param event The event to send.
 * @param options Options to pass into the send event:
 *  - `id` - The unique send event identifier (used with `cancel()`).
 *  - `delay` - The number of milliseconds to delay the sending of the event.
 *  - `to` - The target of this event (by default, the machine the event was sent from).
 */ function send(event, options) {
    return {
        to: options ? options.to : undefined,
        type: actionTypes.send,
        event: utils.isFunction(event) ? event : utils.toEventObject(event),
        delay: options ? options.delay : undefined,
        // TODO: don't auto-generate IDs here like that
        // there is too big chance of the ID collision
        id: options && options.id !== undefined ? options.id : utils.isFunction(event) ? event.name : utils.getEventType(event)
    };
}
function resolveSend(action, ctx, _event, delaysMap) {
    var meta = {
        _event: _event
    }; // TODO: helper function for resolving Expr
    var resolvedEvent = utils.toSCXMLEvent(utils.isFunction(action.event) ? action.event(ctx, _event.data, meta) : action.event);
    var resolvedDelay;
    if (utils.isString(action.delay)) {
        var configDelay = delaysMap && delaysMap[action.delay];
        resolvedDelay = utils.isFunction(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
    } else {
        resolvedDelay = utils.isFunction(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
    }
    var resolvedTarget = utils.isFunction(action.to) ? action.to(ctx, _event.data, meta) : action.to;
    return _tslib.__assign(_tslib.__assign({}, action), {
        to: resolvedTarget,
        _event: resolvedEvent,
        event: resolvedEvent.data,
        delay: resolvedDelay
    });
}
/**
 * Sends an event to this machine's parent.
 *
 * @param event The event to send to the parent machine.
 * @param options Options to pass into the send event.
 */ function sendParent(event, options) {
    return send(event, _tslib.__assign(_tslib.__assign({}, options), {
        to: types.SpecialTargets.Parent
    }));
}
/**
 * Sends an event to an actor.
 *
 * @param actor The `ActorRef` to send the event to.
 * @param event The event to send, or an expression that evaluates to the event to send
 * @param options Send action options
 * @returns An XState send action object
 */ function sendTo(actor, event, options) {
    return send(event, _tslib.__assign(_tslib.__assign({}, options), {
        to: actor
    }));
}
/**
 * Sends an update event to this machine's parent.
 */ function sendUpdate() {
    return sendParent(actionTypes.update);
}
/**
 * Sends an event back to the sender of the original event.
 *
 * @param event The event to send back to the sender
 * @param options Options to pass into the send event
 */ function respond(event, options) {
    return send(event, _tslib.__assign(_tslib.__assign({}, options), {
        to: function(_, __, _a) {
            var _event = _a._event;
            return _event.origin; // TODO: handle when _event.origin is undefined
        }
    }));
}
var defaultLogExpr = function(context, event) {
    return {
        context: context,
        event: event
    };
};
/**
 *
 * @param expr The expression function to evaluate which will be logged.
 *  Takes in 2 arguments:
 *  - `ctx` - the current state context
 *  - `event` - the event that caused this action to be executed.
 * @param label The label to give to the logged expression.
 */ function log(expr, label) {
    if (expr === void 0) {
        expr = defaultLogExpr;
    }
    return {
        type: actionTypes.log,
        label: label,
        expr: expr
    };
}
var resolveLog = function(action, ctx, _event) {
    return _tslib.__assign(_tslib.__assign({}, action), {
        value: utils.isString(action.expr) ? action.expr : action.expr(ctx, _event.data, {
            _event: _event
        })
    });
};
/**
 * Cancels an in-flight `send(...)` action. A canceled sent action will not
 * be executed, nor will its event be sent, unless it has already been sent
 * (e.g., if `cancel(...)` is called after the `send(...)` action's `delay`).
 *
 * @param sendId The `id` of the `send(...)` action to cancel.
 */ var cancel = function(sendId) {
    return {
        type: actionTypes.cancel,
        sendId: sendId
    };
};
/**
 * Starts an activity.
 *
 * @param activity The activity to start.
 */ function start(activity) {
    var activityDef = toActivityDefinition(activity);
    return {
        type: types.ActionTypes.Start,
        activity: activityDef,
        exec: undefined
    };
}
/**
 * Stops an activity.
 *
 * @param actorRef The activity to stop.
 */ function stop(actorRef) {
    var activity = utils.isFunction(actorRef) ? actorRef : toActivityDefinition(actorRef);
    return {
        type: types.ActionTypes.Stop,
        activity: activity,
        exec: undefined
    };
}
function resolveStop(action, context, _event) {
    var actorRefOrString = utils.isFunction(action.activity) ? action.activity(context, _event.data) : action.activity;
    var resolvedActorRef = typeof actorRefOrString === "string" ? {
        id: actorRefOrString
    } : actorRefOrString;
    var actionObject = {
        type: types.ActionTypes.Stop,
        activity: resolvedActorRef
    };
    return actionObject;
}
/**
 * Updates the current context of the machine.
 *
 * @param assignment An object that represents the partial context to update.
 */ var assign = function(assignment) {
    return {
        type: actionTypes.assign,
        assignment: assignment
    };
};
function isActionObject(action) {
    return typeof action === "object" && "type" in action;
}
/**
 * Returns an event type that represents an implicit event that
 * is sent after the specified `delay`.
 *
 * @param delayRef The delay in milliseconds
 * @param id The state node ID where this event is handled
 */ function after(delayRef, id) {
    var idSuffix = id ? "#".concat(id) : "";
    return "".concat(types.ActionTypes.After, "(").concat(delayRef, ")").concat(idSuffix);
}
/**
 * Returns an event that represents that a final state node
 * has been reached in the parent state node.
 *
 * @param id The final state node's parent state node `id`
 * @param data The data to pass into the event
 */ function done(id, data) {
    var type = "".concat(types.ActionTypes.DoneState, ".").concat(id);
    var eventObject = {
        type: type,
        data: data
    };
    eventObject.toString = function() {
        return type;
    };
    return eventObject;
}
/**
 * Returns an event that represents that an invoked service has terminated.
 *
 * An invoked service is terminated when it has reached a top-level final state node,
 * but not when it is canceled.
 *
 * @param id The final state node ID
 * @param data The data to pass into the event
 */ function doneInvoke(id, data) {
    var type = "".concat(types.ActionTypes.DoneInvoke, ".").concat(id);
    var eventObject = {
        type: type,
        data: data
    };
    eventObject.toString = function() {
        return type;
    };
    return eventObject;
}
function error(id, data) {
    var type = "".concat(types.ActionTypes.ErrorPlatform, ".").concat(id);
    var eventObject = {
        type: type,
        data: data
    };
    eventObject.toString = function() {
        return type;
    };
    return eventObject;
}
function pure(getActions) {
    return {
        type: types.ActionTypes.Pure,
        get: getActions
    };
}
/**
 * Forwards (sends) an event to a specified service.
 *
 * @param target The target service to forward the event to.
 * @param options Options to pass into the send action creator.
 */ function forwardTo(target, options) {
    if (!environment.IS_PRODUCTION && (!target || typeof target === "function")) {
        var originalTarget_1 = target;
        target = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            var resolvedTarget = typeof originalTarget_1 === "function" ? originalTarget_1.apply(void 0, _tslib.__spreadArray([], _tslib.__read(args), false)) : originalTarget_1;
            if (!resolvedTarget) {
                throw new Error("Attempted to forward event to undefined actor. This risks an infinite loop in the sender.");
            }
            return resolvedTarget;
        };
    }
    return send(function(_, event) {
        return event;
    }, _tslib.__assign(_tslib.__assign({}, options), {
        to: target
    }));
}
/**
 * Escalates an error by sending it as an event to this machine's parent.
 *
 * @param errorData The error data to send, or the expression function that
 * takes in the `context`, `event`, and `meta`, and returns the error data to send.
 * @param options Options to pass into the send action creator.
 */ function escalate(errorData, options) {
    return sendParent(function(context, event, meta) {
        return {
            type: actionTypes.error,
            data: utils.isFunction(errorData) ? errorData(context, event, meta) : errorData
        };
    }, _tslib.__assign(_tslib.__assign({}, options), {
        to: types.SpecialTargets.Parent
    }));
}
function choose(conds) {
    return {
        type: types.ActionTypes.Choose,
        conds: conds
    };
}
var pluckAssigns = function(actionBlocks) {
    var e_1, _a;
    var assignActions = [];
    try {
        for(var actionBlocks_1 = _tslib.__values(actionBlocks), actionBlocks_1_1 = actionBlocks_1.next(); !actionBlocks_1_1.done; actionBlocks_1_1 = actionBlocks_1.next()){
            var block = actionBlocks_1_1.value;
            var i = 0;
            while(i < block.actions.length){
                if (block.actions[i].type === actionTypes.assign) {
                    assignActions.push(block.actions[i]);
                    block.actions.splice(i, 1);
                    continue;
                }
                i++;
            }
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (actionBlocks_1_1 && !actionBlocks_1_1.done && (_a = actionBlocks_1.return)) _a.call(actionBlocks_1);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    return assignActions;
};
function resolveActions(machine, currentState, currentContext, _event, actionBlocks, predictableExec, preserveActionOrder) {
    if (preserveActionOrder === void 0) {
        preserveActionOrder = false;
    }
    var assignActions = preserveActionOrder ? [] : pluckAssigns(actionBlocks);
    var updatedContext = assignActions.length ? utils.updateContext(currentContext, _event, assignActions, currentState) : currentContext;
    var preservedContexts = preserveActionOrder ? [
        currentContext
    ] : undefined;
    var deferredToBlockEnd = [];
    function handleAction(blockType, actionObject) {
        var _a;
        switch(actionObject.type){
            case actionTypes.raise:
                {
                    var raisedAction = resolveRaise(actionObject, updatedContext, _event, machine.options.delays);
                    if (predictableExec && typeof raisedAction.delay === "number") {
                        predictableExec(raisedAction, updatedContext, _event);
                    }
                    return raisedAction;
                }
            case actionTypes.send:
                var sendAction = resolveSend(actionObject, updatedContext, _event, machine.options.delays); // TODO: fix ActionTypes.Init
                if (!environment.IS_PRODUCTION) {
                    var configuredDelay = actionObject.delay; // warn after resolving as we can create better contextual message here
                    utils.warn(!utils.isString(configuredDelay) || typeof sendAction.delay === "number", "No delay reference for delay expression '".concat(configuredDelay, "' was found on machine '").concat(machine.id, "'"));
                }
                if (predictableExec && sendAction.to !== types.SpecialTargets.Internal) {
                    if (blockType === "entry") {
                        deferredToBlockEnd.push(sendAction);
                    } else {
                        predictableExec(sendAction, updatedContext, _event);
                    }
                }
                return sendAction;
            case actionTypes.log:
                {
                    var resolved = resolveLog(actionObject, updatedContext, _event);
                    predictableExec === null || predictableExec === void 0 ? void 0 : predictableExec(resolved, updatedContext, _event);
                    return resolved;
                }
            case actionTypes.choose:
                {
                    var chooseAction = actionObject;
                    var matchedActions = (_a = chooseAction.conds.find(function(condition) {
                        var guard = utils.toGuard(condition.cond, machine.options.guards);
                        return !guard || utils.evaluateGuard(machine, guard, updatedContext, _event, !predictableExec ? currentState : undefined);
                    })) === null || _a === void 0 ? void 0 : _a.actions;
                    if (!matchedActions) {
                        return [];
                    }
                    var _b = _tslib.__read(resolveActions(machine, currentState, updatedContext, _event, [
                        {
                            type: blockType,
                            actions: toActionObjects(utils.toArray(matchedActions), machine.options.actions)
                        }
                    ], predictableExec, preserveActionOrder), 2), resolvedActionsFromChoose = _b[0], resolvedContextFromChoose = _b[1];
                    updatedContext = resolvedContextFromChoose;
                    preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
                    return resolvedActionsFromChoose;
                }
            case actionTypes.pure:
                {
                    var matchedActions = actionObject.get(updatedContext, _event.data);
                    if (!matchedActions) {
                        return [];
                    }
                    var _c = _tslib.__read(resolveActions(machine, currentState, updatedContext, _event, [
                        {
                            type: blockType,
                            actions: toActionObjects(utils.toArray(matchedActions), machine.options.actions)
                        }
                    ], predictableExec, preserveActionOrder), 2), resolvedActionsFromPure = _c[0], resolvedContext = _c[1];
                    updatedContext = resolvedContext;
                    preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
                    return resolvedActionsFromPure;
                }
            case actionTypes.stop:
                {
                    var resolved = resolveStop(actionObject, updatedContext, _event);
                    predictableExec === null || predictableExec === void 0 ? void 0 : predictableExec(resolved, currentContext, _event);
                    return resolved;
                }
            case actionTypes.assign:
                {
                    updatedContext = utils.updateContext(updatedContext, _event, [
                        actionObject
                    ], !predictableExec ? currentState : undefined);
                    preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
                    break;
                }
            default:
                var resolvedActionObject = toActionObject(actionObject, machine.options.actions);
                var exec_1 = resolvedActionObject.exec;
                if (predictableExec) {
                    predictableExec(resolvedActionObject, updatedContext, _event);
                } else if (exec_1 && preservedContexts) {
                    var contextIndex_1 = preservedContexts.length - 1;
                    var wrapped = _tslib.__assign(_tslib.__assign({}, resolvedActionObject), {
                        exec: function(_ctx) {
                            var args = [];
                            for(var _i = 1; _i < arguments.length; _i++){
                                args[_i - 1] = arguments[_i];
                            }
                            exec_1.apply(void 0, _tslib.__spreadArray([
                                preservedContexts[contextIndex_1]
                            ], _tslib.__read(args), false));
                        }
                    });
                    resolvedActionObject = wrapped;
                }
                return resolvedActionObject;
        }
    }
    function processBlock(block) {
        var e_2, _a;
        var resolvedActions = [];
        try {
            for(var _b = _tslib.__values(block.actions), _c = _b.next(); !_c.done; _c = _b.next()){
                var action = _c.value;
                var resolved = handleAction(block.type, action);
                if (resolved) {
                    resolvedActions = resolvedActions.concat(resolved);
                }
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
        deferredToBlockEnd.forEach(function(action) {
            predictableExec(action, updatedContext, _event);
        });
        deferredToBlockEnd.length = 0;
        return resolvedActions;
    }
    var resolvedActions = utils.flatten(actionBlocks.map(processBlock));
    return [
        resolvedActions,
        updatedContext
    ];
}
exports.actionTypes = actionTypes;
exports.after = after;
exports.assign = assign;
exports.cancel = cancel;
exports.choose = choose;
exports.done = done;
exports.doneInvoke = doneInvoke;
exports.error = error;
exports.escalate = escalate;
exports.forwardTo = forwardTo;
exports.getActionFunction = getActionFunction;
exports.initEvent = initEvent;
exports.isActionObject = isActionObject;
exports.log = log;
exports.pure = pure;
exports.raise = raise;
exports.resolveActions = resolveActions;
exports.resolveLog = resolveLog;
exports.resolveRaise = resolveRaise;
exports.resolveSend = resolveSend;
exports.resolveStop = resolveStop;
exports.respond = respond;
exports.send = send;
exports.sendParent = sendParent;
exports.sendTo = sendTo;
exports.sendUpdate = sendUpdate;
exports.start = start;
exports.stop = stop;
exports.toActionObject = toActionObject;
exports.toActionObjects = toActionObjects;
exports.toActivityDefinition = toActivityDefinition;


/***/ }),

/***/ 8402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var actions = __webpack_require__(9717);
var Actor = __webpack_require__(7248);
var utils = __webpack_require__(3574);
/**
 * Returns an actor behavior from a reducer and its initial state.
 *
 * @param transition The pure reducer that returns the next state given the current state and event.
 * @param initialState The initial state of the reducer.
 * @returns An actor behavior
 */ function fromReducer(transition, initialState) {
    return {
        transition: transition,
        initialState: initialState
    };
}
function fromPromise(promiseFn) {
    var initialState = {
        error: undefined,
        data: undefined,
        status: "pending"
    };
    return {
        transition: function(state, event, _a) {
            var parent = _a.parent, id = _a.id, observers = _a.observers;
            switch(event.type){
                case "fulfill":
                    parent === null || parent === void 0 ? void 0 : parent.send(actions.doneInvoke(id, event.data));
                    return {
                        error: undefined,
                        data: event.data,
                        status: "fulfilled"
                    };
                case "reject":
                    parent === null || parent === void 0 ? void 0 : parent.send(actions.error(id, event.error));
                    observers.forEach(function(observer) {
                        observer.error(event.error);
                    });
                    return {
                        error: event.error,
                        data: undefined,
                        status: "rejected"
                    };
                default:
                    return state;
            }
        },
        initialState: initialState,
        start: function(_a) {
            var self = _a.self;
            promiseFn().then(function(data) {
                self.send({
                    type: "fulfill",
                    data: data
                });
            }, function(reason) {
                self.send({
                    type: "reject",
                    error: reason
                });
            });
            return initialState;
        }
    };
}
function spawnBehavior(behavior, options) {
    if (options === void 0) {
        options = {};
    }
    var state = behavior.initialState;
    var observers = new Set();
    var mailbox = [];
    var flushing = false;
    var flush = function() {
        if (flushing) {
            return;
        }
        flushing = true;
        while(mailbox.length > 0){
            var event_1 = mailbox.shift();
            state = behavior.transition(state, event_1, actorCtx);
            observers.forEach(function(observer) {
                return observer.next(state);
            });
        }
        flushing = false;
    };
    var actor = Actor.toActorRef({
        id: options.id,
        send: function(event) {
            mailbox.push(event);
            flush();
        },
        getSnapshot: function() {
            return state;
        },
        subscribe: function(next, handleError, complete) {
            var observer = utils.toObserver(next, handleError, complete);
            observers.add(observer);
            observer.next(state);
            return {
                unsubscribe: function() {
                    observers.delete(observer);
                }
            };
        }
    });
    var actorCtx = {
        parent: options.parent,
        self: actor,
        id: options.id || "anonymous",
        observers: observers
    };
    state = behavior.start ? behavior.start(actorCtx) : state;
    return actor;
}
exports.fromPromise = fromPromise;
exports.fromReducer = fromReducer;
exports.spawnBehavior = spawnBehavior;


/***/ }),

/***/ 6903:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var STATE_DELIMITER = ".";
var EMPTY_ACTIVITY_MAP = {};
var DEFAULT_GUARD_TYPE = "xstate.guard";
var TARGETLESS_KEY = "";
exports.DEFAULT_GUARD_TYPE = DEFAULT_GUARD_TYPE;
exports.EMPTY_ACTIVITY_MAP = EMPTY_ACTIVITY_MAP;
exports.STATE_DELIMITER = STATE_DELIMITER;
exports.TARGETLESS_KEY = TARGETLESS_KEY;


/***/ }),

/***/ 5102:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var environment = __webpack_require__(6783);
function getGlobal() {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (false) {}
    if (typeof global !== "undefined") {
        return global;
    }
    if (!environment.IS_PRODUCTION) {
        console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
    }
}
function getDevTools() {
    var global1 = getGlobal();
    if (global1 && "__xstate__" in global1) {
        return global1.__xstate__;
    }
    return undefined;
}
function registerService(service) {
    if (!getGlobal()) {
        return;
    }
    var devTools = getDevTools();
    if (devTools) {
        devTools.register(service);
    }
}
exports.getGlobal = getGlobal;
exports.registerService = registerService;


/***/ }),

/***/ 6783:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var IS_PRODUCTION = "production" === "production";
exports.IS_PRODUCTION = IS_PRODUCTION;


/***/ }),

/***/ 9:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
var actions = __webpack_require__(9717);
var Actor = __webpack_require__(7248);
var interpreter = __webpack_require__(5500);
var Machine = __webpack_require__(2115);
var mapState = __webpack_require__(1363);
var match = __webpack_require__(3066);
var schema = __webpack_require__(4850);
var State = __webpack_require__(9716);
var StateNode = __webpack_require__(3418);
var behaviors = __webpack_require__(8402);
var types = __webpack_require__(6187);
var utils = __webpack_require__(3574);
var assign = actions.assign, send = actions.send, sendTo = actions.sendTo, sendParent = actions.sendParent, sendUpdate = actions.sendUpdate, forwardTo = actions.forwardTo, doneInvoke = actions.doneInvoke, raise = actions.raise;
__webpack_unused_export__ = actions;
__webpack_unused_export__ = Actor.toActorRef;
__webpack_unused_export__ = interpreter.Interpreter;
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return interpreter.InterpreterStatus;
    }
});
exports.kJ = interpreter.interpret;
__webpack_unused_export__ = interpreter.spawn;
__webpack_unused_export__ = Machine.Machine;
exports.C8 = Machine.createMachine;
__webpack_unused_export__ = mapState.mapState;
__webpack_unused_export__ = match.matchState;
__webpack_unused_export__ = schema.createSchema;
__webpack_unused_export__ = schema.t;
__webpack_unused_export__ = State.State;
__webpack_unused_export__ = StateNode.StateNode;
__webpack_unused_export__ = behaviors.spawnBehavior;
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return types.ActionTypes;
    }
});
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return types.SpecialTargets;
    }
});
__webpack_unused_export__ = utils.matchesState;
__webpack_unused_export__ = utils.toEventObject;
__webpack_unused_export__ = utils.toObserver;
__webpack_unused_export__ = utils.toSCXMLEvent;
exports.f0 = assign;
__webpack_unused_export__ = doneInvoke;
__webpack_unused_export__ = forwardTo;
__webpack_unused_export__ = raise;
__webpack_unused_export__ = send;
__webpack_unused_export__ = sendParent;
__webpack_unused_export__ = sendTo;
__webpack_unused_export__ = sendUpdate;


/***/ }),

/***/ 5500:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _tslib = __webpack_require__(4605);
var types = __webpack_require__(6187);
var State = __webpack_require__(9716);
var actionTypes = __webpack_require__(3486);
var actions = __webpack_require__(9717);
var environment = __webpack_require__(6783);
var utils = __webpack_require__(3574);
var scheduler = __webpack_require__(529);
var Actor = __webpack_require__(7248);
var registry = __webpack_require__(3052);
var devTools = __webpack_require__(5102);
var serviceScope = __webpack_require__(5350);
var behaviors = __webpack_require__(8402);
var DEFAULT_SPAWN_OPTIONS = {
    sync: false,
    autoForward: false
};
exports.InterpreterStatus = void 0;
(function(InterpreterStatus) {
    InterpreterStatus[InterpreterStatus["NotStarted"] = 0] = "NotStarted";
    InterpreterStatus[InterpreterStatus["Running"] = 1] = "Running";
    InterpreterStatus[InterpreterStatus["Stopped"] = 2] = "Stopped";
})(exports.InterpreterStatus || (exports.InterpreterStatus = {}));
var Interpreter = /*#__PURE__*/ /** @class */ function() {
    /**
   * Creates a new Interpreter instance (i.e., service) for the given machine with the provided options, if any.
   *
   * @param machine The machine to be interpreted
   * @param options Interpreter options
   */ function Interpreter(machine, options) {
        if (options === void 0) {
            options = Interpreter.defaultOptions;
        }
        var _this = this;
        this.machine = machine;
        this.delayedEventsMap = {};
        this.listeners = new Set();
        this.contextListeners = new Set();
        this.stopListeners = new Set();
        this.doneListeners = new Set();
        this.eventListeners = new Set();
        this.sendListeners = new Set();
        /**
     * Whether the service is started.
     */ this.initialized = false;
        this.status = exports.InterpreterStatus.NotStarted;
        this.children = new Map();
        this.forwardTo = new Set();
        this._outgoingQueue = [];
        /**
     * Alias for Interpreter.prototype.start
     */ this.init = this.start;
        /**
     * Sends an event to the running interpreter to trigger a transition.
     *
     * An array of events (batched) can be sent as well, which will send all
     * batched events to the running interpreter. The listeners will be
     * notified only **once** when all events are processed.
     *
     * @param event The event(s) to send
     */ this.send = function(event1, payload) {
            if (utils.isArray(event1)) {
                _this.batch(event1);
                return _this.state;
            }
            var _event = utils.toSCXMLEvent(utils.toEventObject(event1, payload));
            if (_this.status === exports.InterpreterStatus.Stopped) {
                // do nothing
                if (!environment.IS_PRODUCTION) {
                    utils.warn(false, 'Event "'.concat(_event.name, '" was sent to stopped service "').concat(_this.machine.id, '". This service has already reached its final state, and will not transition.\nEvent: ').concat(JSON.stringify(_event.data)));
                }
                return _this.state;
            }
            if (_this.status !== exports.InterpreterStatus.Running && !_this.options.deferEvents) {
                throw new Error('Event "'.concat(_event.name, '" was sent to uninitialized service "').concat(_this.machine.id // tslint:disable-next-line:max-line-length
                , '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: ').concat(JSON.stringify(_event.data)));
            }
            _this.scheduler.schedule(function() {
                // Forward copy of event to child actors
                _this.forward(_event);
                var nextState = _this._nextState(_event);
                _this.update(nextState, _event);
            });
            return _this._state; // TODO: deprecate (should return void)
        // tslint:disable-next-line:semicolon
        };
        this.sendTo = function(event1, to, immediate) {
            var isParent = _this.parent && (to === types.SpecialTargets.Parent || _this.parent.id === to);
            var target = isParent ? _this.parent : utils.isString(to) ? to === types.SpecialTargets.Internal ? _this : _this.children.get(to) || registry.registry.get(to) : utils.isActor(to) ? to : undefined;
            if (!target) {
                if (!isParent) {
                    throw new Error("Unable to send event to child '".concat(to, "' from service '").concat(_this.id, "'."));
                } // tslint:disable-next-line:no-console
                if (!environment.IS_PRODUCTION) {
                    utils.warn(false, "Service '".concat(_this.id, "' has no parent: unable to send event ").concat(event1.type));
                }
                return;
            }
            if ("machine" in target) {
                // perhaps those events should be rejected in the parent
                // but atm it doesn't have easy access to all of the information that is required to do it reliably
                if (_this.status !== exports.InterpreterStatus.Stopped || _this.parent !== target || // we need to send events to the parent from exit handlers of a machine that reached its final state
                _this.state.done) {
                    // Send SCXML events to machines
                    var scxmlEvent = _tslib.__assign(_tslib.__assign({}, event1), {
                        name: event1.name === actionTypes.error ? "".concat(actions.error(_this.id)) : event1.name,
                        origin: _this.sessionId
                    });
                    if (!immediate && _this.machine.config.predictableActionArguments) {
                        _this._outgoingQueue.push([
                            target,
                            scxmlEvent
                        ]);
                    } else {
                        target.send(scxmlEvent);
                    }
                }
            } else {
                // Send normal events to other targets
                if (!immediate && _this.machine.config.predictableActionArguments) {
                    _this._outgoingQueue.push([
                        target,
                        event1.data
                    ]);
                } else {
                    target.send(event1.data);
                }
            }
        };
        this._exec = function(action, context, _event, actionFunctionMap) {
            if (actionFunctionMap === void 0) {
                actionFunctionMap = _this.machine.options.actions;
            }
            var actionOrExec = action.exec || actions.getActionFunction(action.type, actionFunctionMap);
            var exec = utils.isFunction(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;
            if (exec) {
                try {
                    return exec(context, _event.data, !_this.machine.config.predictableActionArguments ? {
                        action: action,
                        state: _this.state,
                        _event: _event
                    } : {
                        action: action,
                        _event: _event
                    });
                } catch (err) {
                    if (_this.parent) {
                        _this.parent.send({
                            type: "xstate.error",
                            data: err
                        });
                    }
                    throw err;
                }
            }
            switch(action.type){
                case actionTypes.raise:
                    {
                        // if raise action reached the interpreter then it's a delayed one
                        var sendAction_1 = action;
                        _this.defer(sendAction_1);
                        break;
                    }
                case actionTypes.send:
                    var sendAction = action;
                    if (typeof sendAction.delay === "number") {
                        _this.defer(sendAction);
                        return;
                    } else {
                        if (sendAction.to) {
                            _this.sendTo(sendAction._event, sendAction.to, _event === actions.initEvent);
                        } else {
                            _this.send(sendAction._event);
                        }
                    }
                    break;
                case actionTypes.cancel:
                    _this.cancel(action.sendId);
                    break;
                case actionTypes.start:
                    {
                        if (_this.status !== exports.InterpreterStatus.Running) {
                            return;
                        }
                        var activity = action.activity; // If the activity will be stopped right after it's started
                        // (such as in transient states)
                        // don't bother starting the activity.
                        if (!_this.machine.config.predictableActionArguments && !_this.state.activities[activity.id || activity.type]) {
                            break;
                        } // Invoked services
                        if (activity.type === types.ActionTypes.Invoke) {
                            var invokeSource = utils.toInvokeSource(activity.src);
                            var serviceCreator = _this.machine.options.services ? _this.machine.options.services[invokeSource.type] : undefined;
                            var id = activity.id, data = activity.data;
                            if (!environment.IS_PRODUCTION) {
                                utils.warn(!("forward" in activity), "`forward` property is deprecated (found in invocation of '".concat(activity.src, "' in in machine '").concat(_this.machine.id, "'). ") + "Please use `autoForward` instead.");
                            }
                            var autoForward = "autoForward" in activity ? activity.autoForward : !!activity.forward;
                            if (!serviceCreator) {
                                // tslint:disable-next-line:no-console
                                if (!environment.IS_PRODUCTION) {
                                    utils.warn(false, "No service found for invocation '".concat(activity.src, "' in machine '").concat(_this.machine.id, "'."));
                                }
                                return;
                            }
                            var resolvedData = data ? utils.mapContext(data, context, _event) : undefined;
                            if (typeof serviceCreator === "string") {
                                // TODO: warn
                                return;
                            }
                            var source = utils.isFunction(serviceCreator) ? serviceCreator(context, _event.data, {
                                data: resolvedData,
                                src: invokeSource,
                                meta: activity.meta
                            }) : serviceCreator;
                            if (!source) {
                                // TODO: warn?
                                return;
                            }
                            var options = void 0;
                            if (utils.isMachine(source)) {
                                source = resolvedData ? source.withContext(resolvedData) : source;
                                options = {
                                    autoForward: autoForward
                                };
                            }
                            _this.spawn(source, id, options);
                        } else {
                            _this.spawnActivity(activity);
                        }
                        break;
                    }
                case actionTypes.stop:
                    {
                        _this.stopChild(action.activity.id);
                        break;
                    }
                case actionTypes.log:
                    var _a = action, label = _a.label, value = _a.value;
                    if (label) {
                        _this.logger(label, value);
                    } else {
                        _this.logger(value);
                    }
                    break;
                default:
                    if (!environment.IS_PRODUCTION) {
                        utils.warn(false, "No implementation found for action type '".concat(action.type, "'"));
                    }
                    break;
            }
        };
        var resolvedOptions = _tslib.__assign(_tslib.__assign({}, Interpreter.defaultOptions), options);
        var clock = resolvedOptions.clock, logger = resolvedOptions.logger, parent = resolvedOptions.parent, id = resolvedOptions.id;
        var resolvedId = id !== undefined ? id : machine.id;
        this.id = resolvedId;
        this.logger = logger;
        this.clock = clock;
        this.parent = parent;
        this.options = resolvedOptions;
        this.scheduler = new scheduler.Scheduler({
            deferEvents: this.options.deferEvents
        });
        this.sessionId = registry.registry.bookId();
    }
    Object.defineProperty(Interpreter.prototype, "initialState", {
        get: function() {
            var _this = this;
            if (this._initialState) {
                return this._initialState;
            }
            return serviceScope.provide(this, function() {
                _this._initialState = _this.machine.initialState;
                return _this._initialState;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Interpreter.prototype, "state", {
        /**
     * @deprecated Use `.getSnapshot()` instead.
     */ get: function() {
            if (!environment.IS_PRODUCTION) {
                utils.warn(this.status !== exports.InterpreterStatus.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first."));
            }
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    /**
   * Executes the actions of the given state, with that state's `context` and `event`.
   *
   * @param state The state whose actions will be executed
   * @param actionsConfig The action implementations to use
   */ Interpreter.prototype.execute = function(state, actionsConfig) {
        var e_1, _a;
        try {
            for(var _b = _tslib.__values(state.actions), _c = _b.next(); !_c.done; _c = _b.next()){
                var action = _c.value;
                this.exec(action, state, actionsConfig);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    };
    Interpreter.prototype.update = function(state, _event) {
        var e_2, _a, e_3, _b, e_4, _c, e_5, _d;
        var _this = this; // Attach session ID to state
        state._sessionid = this.sessionId; // Update state
        this._state = state; // Execute actions
        if ((!this.machine.config.predictableActionArguments || // this is currently required to execute initial actions as the `initialState` gets cached
        // we can't just recompute it (and execute actions while doing so) because we try to preserve identity of actors created within initial assigns
        _event === actions.initEvent) && this.options.execute) {
            this.execute(this.state);
        } else {
            var item = void 0;
            while(item = this._outgoingQueue.shift()){
                item[0].send(item[1]);
            }
        } // Update children
        this.children.forEach(function(child) {
            _this.state.children[child.id] = child;
        }); // Dev tools
        if (this.devTools) {
            this.devTools.send(_event.data, state);
        } // Execute listeners
        if (state.event) {
            try {
                for(var _e = _tslib.__values(this.eventListeners), _f = _e.next(); !_f.done; _f = _e.next()){
                    var listener = _f.value;
                    listener(state.event);
                }
            } catch (e_2_1) {
                e_2 = {
                    error: e_2_1
                };
            } finally{
                try {
                    if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                } finally{
                    if (e_2) throw e_2.error;
                }
            }
        }
        try {
            for(var _g = _tslib.__values(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()){
                var listener = _h.value;
                listener(state, state.event);
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
        try {
            for(var _j = _tslib.__values(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()){
                var contextListener = _k.value;
                contextListener(this.state.context, this.state.history ? this.state.history.context : undefined);
            }
        } catch (e_4_1) {
            e_4 = {
                error: e_4_1
            };
        } finally{
            try {
                if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
            } finally{
                if (e_4) throw e_4.error;
            }
        }
        if (this.state.done) {
            // get final child state node
            var finalChildStateNode = state.configuration.find(function(sn) {
                return sn.type === "final" && sn.parent === _this.machine;
            });
            var doneData = finalChildStateNode && finalChildStateNode.doneData ? utils.mapContext(finalChildStateNode.doneData, state.context, _event) : undefined;
            this._doneEvent = actions.doneInvoke(this.id, doneData);
            try {
                for(var _l = _tslib.__values(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()){
                    var listener = _m.value;
                    listener(this._doneEvent);
                }
            } catch (e_5_1) {
                e_5 = {
                    error: e_5_1
                };
            } finally{
                try {
                    if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
                } finally{
                    if (e_5) throw e_5.error;
                }
            }
            this._stop();
            this._stopChildren();
            registry.registry.free(this.sessionId);
        }
    };
    /*
   * Adds a listener that is notified whenever a state transition happens. The listener is called with
   * the next state and the event object that caused the state transition.
   *
   * @param listener The state listener
   */ Interpreter.prototype.onTransition = function(listener) {
        this.listeners.add(listener); // Send current state to listener
        if (this.status === exports.InterpreterStatus.Running) {
            listener(this.state, this.state.event);
        }
        return this;
    };
    Interpreter.prototype.subscribe = function(nextListenerOrObserver, _, completeListener) {
        var _this = this;
        var observer = utils.toObserver(nextListenerOrObserver, _, completeListener);
        this.listeners.add(observer.next); // Send current state to listener
        if (this.status !== exports.InterpreterStatus.NotStarted) {
            observer.next(this.state);
        }
        var completeOnce = function() {
            _this.doneListeners.delete(completeOnce);
            _this.stopListeners.delete(completeOnce);
            observer.complete();
        };
        if (this.status === exports.InterpreterStatus.Stopped) {
            observer.complete();
        } else {
            this.onDone(completeOnce);
            this.onStop(completeOnce);
        }
        return {
            unsubscribe: function() {
                _this.listeners.delete(observer.next);
                _this.doneListeners.delete(completeOnce);
                _this.stopListeners.delete(completeOnce);
            }
        };
    };
    /**
   * Adds an event listener that is notified whenever an event is sent to the running interpreter.
   * @param listener The event listener
   */ Interpreter.prototype.onEvent = function(listener) {
        this.eventListeners.add(listener);
        return this;
    };
    /**
   * Adds an event listener that is notified whenever a `send` event occurs.
   * @param listener The event listener
   */ Interpreter.prototype.onSend = function(listener) {
        this.sendListeners.add(listener);
        return this;
    };
    /**
   * Adds a context listener that is notified whenever the state context changes.
   * @param listener The context listener
   */ Interpreter.prototype.onChange = function(listener) {
        this.contextListeners.add(listener);
        return this;
    };
    /**
   * Adds a listener that is notified when the machine is stopped.
   * @param listener The listener
   */ Interpreter.prototype.onStop = function(listener) {
        this.stopListeners.add(listener);
        return this;
    };
    /**
   * Adds a state listener that is notified when the statechart has reached its final state.
   * @param listener The state listener
   */ Interpreter.prototype.onDone = function(listener) {
        if (this.status === exports.InterpreterStatus.Stopped && this._doneEvent) {
            listener(this._doneEvent);
        } else {
            this.doneListeners.add(listener);
        }
        return this;
    };
    /**
   * Removes a listener.
   * @param listener The listener to remove
   */ Interpreter.prototype.off = function(listener) {
        this.listeners.delete(listener);
        this.eventListeners.delete(listener);
        this.sendListeners.delete(listener);
        this.stopListeners.delete(listener);
        this.doneListeners.delete(listener);
        this.contextListeners.delete(listener);
        return this;
    };
    /**
   * Starts the interpreter from the given state, or the initial state.
   * @param initialState The state to start the statechart from
   */ Interpreter.prototype.start = function(initialState) {
        var _this = this;
        if (this.status === exports.InterpreterStatus.Running) {
            // Do not restart the service if it is already started
            return this;
        } // yes, it's a hack but we need the related cache to be populated for some things to work (like delayed transitions)
        // this is usually called by `machine.getInitialState` but if we rehydrate from a state we might bypass this call
        // we also don't want to call this method here as it resolves the full initial state which might involve calling assign actions
        // and that could potentially lead to some unwanted side-effects (even such as creating some rogue actors)
        this.machine._init();
        registry.registry.register(this.sessionId, this);
        this.initialized = true;
        this.status = exports.InterpreterStatus.Running;
        var resolvedState = initialState === undefined ? this.initialState : serviceScope.provide(this, function() {
            return State.isStateConfig(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(State.State.from(initialState, _this.machine.context));
        });
        if (this.options.devTools) {
            this.attachDev();
        }
        this.scheduler.initialize(function() {
            _this.update(resolvedState, actions.initEvent);
        });
        return this;
    };
    Interpreter.prototype._stopChildren = function() {
        // TODO: think about converting those to actions
        this.children.forEach(function(child) {
            if (utils.isFunction(child.stop)) {
                child.stop();
            }
        });
        this.children.clear();
    };
    Interpreter.prototype._stop = function() {
        var e_6, _a, e_7, _b, e_8, _c, e_9, _d, e_10, _e;
        try {
            for(var _f = _tslib.__values(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()){
                var listener = _g.value;
                this.listeners.delete(listener);
            }
        } catch (e_6_1) {
            e_6 = {
                error: e_6_1
            };
        } finally{
            try {
                if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
            } finally{
                if (e_6) throw e_6.error;
            }
        }
        try {
            for(var _h = _tslib.__values(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()){
                var listener = _j.value; // call listener, then remove
                listener();
                this.stopListeners.delete(listener);
            }
        } catch (e_7_1) {
            e_7 = {
                error: e_7_1
            };
        } finally{
            try {
                if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
            } finally{
                if (e_7) throw e_7.error;
            }
        }
        try {
            for(var _k = _tslib.__values(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()){
                var listener = _l.value;
                this.contextListeners.delete(listener);
            }
        } catch (e_8_1) {
            e_8 = {
                error: e_8_1
            };
        } finally{
            try {
                if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
            } finally{
                if (e_8) throw e_8.error;
            }
        }
        try {
            for(var _m = _tslib.__values(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()){
                var listener = _o.value;
                this.doneListeners.delete(listener);
            }
        } catch (e_9_1) {
            e_9 = {
                error: e_9_1
            };
        } finally{
            try {
                if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
            } finally{
                if (e_9) throw e_9.error;
            }
        }
        if (!this.initialized) {
            // Interpreter already stopped; do nothing
            return this;
        }
        this.initialized = false;
        this.status = exports.InterpreterStatus.Stopped;
        this._initialState = undefined;
        try {
            // we are going to stop within the current sync frame
            // so we can safely just cancel this here as nothing async should be fired anyway
            for(var _p = _tslib.__values(Object.keys(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()){
                var key = _q.value;
                this.clock.clearTimeout(this.delayedEventsMap[key]);
            }
        } catch (e_10_1) {
            e_10 = {
                error: e_10_1
            };
        } finally{
            try {
                if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
            } finally{
                if (e_10) throw e_10.error;
            }
        } // clear everything that might be enqueued
        this.scheduler.clear();
        this.scheduler = new scheduler.Scheduler({
            deferEvents: this.options.deferEvents
        });
    };
    /**
   * Stops the interpreter and unsubscribe all listeners.
   *
   * This will also notify the `onStop` listeners.
   */ Interpreter.prototype.stop = function() {
        // TODO: add warning for stopping non-root interpreters
        var _this = this; // grab the current scheduler as it will be replaced in _stop
        var scheduler = this.scheduler;
        this._stop(); // let what is currently processed to be finished
        scheduler.schedule(function() {
            // it feels weird to handle this here but we need to handle this even slightly "out of band"
            var _event = utils.toSCXMLEvent({
                type: "xstate.stop"
            });
            var nextState = serviceScope.provide(_this, function() {
                var exitActions = utils.flatten(_tslib.__spreadArray([], _tslib.__read(_this.state.configuration), false).sort(function(a, b) {
                    return b.order - a.order;
                }).map(function(stateNode) {
                    return actions.toActionObjects(stateNode.onExit, _this.machine.options.actions);
                }));
                var _a = _tslib.__read(actions.resolveActions(_this.machine, _this.state, _this.state.context, _event, [
                    {
                        type: "exit",
                        actions: exitActions
                    }
                ], _this.machine.config.predictableActionArguments ? _this._exec : undefined, _this.machine.config.predictableActionArguments || _this.machine.config.preserveActionOrder), 2), resolvedActions = _a[0], updatedContext = _a[1];
                var newState = new State.State({
                    value: _this.state.value,
                    context: updatedContext,
                    _event: _event,
                    _sessionid: _this.sessionId,
                    historyValue: undefined,
                    history: _this.state,
                    actions: resolvedActions.filter(function(action) {
                        return !utils.isRaisableAction(action);
                    }),
                    activities: {},
                    events: [],
                    configuration: [],
                    transitions: [],
                    children: {},
                    done: _this.state.done,
                    tags: _this.state.tags,
                    machine: _this.machine
                });
                newState.changed = true;
                return newState;
            });
            _this.update(nextState, _event);
            _this._stopChildren();
            registry.registry.free(_this.sessionId);
        });
        return this;
    };
    Interpreter.prototype.batch = function(events) {
        var _this = this;
        if (this.status === exports.InterpreterStatus.NotStarted && this.options.deferEvents) {
            // tslint:disable-next-line:no-console
            if (!environment.IS_PRODUCTION) {
                utils.warn(false, "".concat(events.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '" and are deferred. Make sure .start() is called for this service.\nEvent: ').concat(JSON.stringify(event)));
            }
        } else if (this.status !== exports.InterpreterStatus.Running) {
            throw new Error("".concat(events.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
        }
        if (!events.length) {
            return;
        }
        var exec = !!this.machine.config.predictableActionArguments && this._exec;
        this.scheduler.schedule(function() {
            var e_11, _a;
            var nextState = _this.state;
            var batchChanged = false;
            var batchedActions = [];
            var _loop_1 = function(event_1) {
                var _event = utils.toSCXMLEvent(event_1);
                _this.forward(_event);
                nextState = serviceScope.provide(_this, function() {
                    return _this.machine.transition(nextState, _event, undefined, exec || undefined);
                });
                batchedActions.push.apply(batchedActions, _tslib.__spreadArray([], _tslib.__read(_this.machine.config.predictableActionArguments ? nextState.actions : nextState.actions.map(function(a) {
                    return State.bindActionToState(a, nextState);
                })), false));
                batchChanged = batchChanged || !!nextState.changed;
            };
            try {
                for(var events_1 = _tslib.__values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()){
                    var event_1 = events_1_1.value;
                    _loop_1(event_1);
                }
            } catch (e_11_1) {
                e_11 = {
                    error: e_11_1
                };
            } finally{
                try {
                    if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
                } finally{
                    if (e_11) throw e_11.error;
                }
            }
            nextState.changed = batchChanged;
            nextState.actions = batchedActions;
            _this.update(nextState, utils.toSCXMLEvent(events[events.length - 1]));
        });
    };
    /**
   * Returns a send function bound to this interpreter instance.
   *
   * @param event The event to be sent by the sender.
   */ Interpreter.prototype.sender = function(event1) {
        return this.send.bind(this, event1);
    };
    Interpreter.prototype._nextState = function(event1, exec) {
        var _this = this;
        if (exec === void 0) {
            exec = !!this.machine.config.predictableActionArguments && this._exec;
        }
        var _event = utils.toSCXMLEvent(event1);
        if (_event.name.indexOf(actionTypes.errorPlatform) === 0 && !this.state.nextEvents.some(function(nextEvent) {
            return nextEvent.indexOf(actionTypes.errorPlatform) === 0;
        })) {
            throw _event.data.data;
        }
        var nextState = serviceScope.provide(this, function() {
            return _this.machine.transition(_this.state, _event, undefined, exec || undefined);
        });
        return nextState;
    };
    /**
   * Returns the next state given the interpreter's current state and the event.
   *
   * This is a pure method that does _not_ update the interpreter's state.
   *
   * @param event The event to determine the next state
   */ Interpreter.prototype.nextState = function(event1) {
        return this._nextState(event1, false);
    };
    Interpreter.prototype.forward = function(event1) {
        var e_12, _a;
        try {
            for(var _b = _tslib.__values(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()){
                var id = _c.value;
                var child = this.children.get(id);
                if (!child) {
                    throw new Error("Unable to forward event '".concat(event1, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(id, "'."));
                }
                child.send(event1);
            }
        } catch (e_12_1) {
            e_12 = {
                error: e_12_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_12) throw e_12.error;
            }
        }
    };
    Interpreter.prototype.defer = function(sendAction) {
        var _this = this;
        var timerId = this.clock.setTimeout(function() {
            if ("to" in sendAction && sendAction.to) {
                _this.sendTo(sendAction._event, sendAction.to, true);
            } else {
                _this.send(sendAction._event);
            }
        }, sendAction.delay);
        if (sendAction.id) {
            this.delayedEventsMap[sendAction.id] = timerId;
        }
    };
    Interpreter.prototype.cancel = function(sendId) {
        this.clock.clearTimeout(this.delayedEventsMap[sendId]);
        delete this.delayedEventsMap[sendId];
    };
    Interpreter.prototype.exec = function(action, state, actionFunctionMap) {
        if (actionFunctionMap === void 0) {
            actionFunctionMap = this.machine.options.actions;
        }
        this._exec(action, state.context, state._event, actionFunctionMap);
    };
    Interpreter.prototype.removeChild = function(childId) {
        var _a;
        this.children.delete(childId);
        this.forwardTo.delete(childId); // this.state might not exist at the time this is called,
        // such as when a child is added then removed while initializing the state
        (_a = this.state) === null || _a === void 0 ? true : delete _a.children[childId];
    };
    Interpreter.prototype.stopChild = function(childId) {
        var child = this.children.get(childId);
        if (!child) {
            return;
        }
        this.removeChild(childId);
        if (utils.isFunction(child.stop)) {
            child.stop();
        }
    };
    Interpreter.prototype.spawn = function(entity, name, options) {
        if (this.status !== exports.InterpreterStatus.Running) {
            return Actor.createDeferredActor(entity, name);
        }
        if (utils.isPromiseLike(entity)) {
            return this.spawnPromise(Promise.resolve(entity), name);
        } else if (utils.isFunction(entity)) {
            return this.spawnCallback(entity, name);
        } else if (Actor.isSpawnedActor(entity)) {
            return this.spawnActor(entity, name);
        } else if (utils.isObservable(entity)) {
            return this.spawnObservable(entity, name);
        } else if (utils.isMachine(entity)) {
            return this.spawnMachine(entity, _tslib.__assign(_tslib.__assign({}, options), {
                id: name
            }));
        } else if (utils.isBehavior(entity)) {
            return this.spawnBehavior(entity, name);
        } else {
            throw new Error('Unable to spawn entity "'.concat(name, '" of type "').concat(typeof entity, '".'));
        }
    };
    Interpreter.prototype.spawnMachine = function(machine, options) {
        var _this = this;
        if (options === void 0) {
            options = {};
        }
        var childService = new Interpreter(machine, _tslib.__assign(_tslib.__assign({}, this.options), {
            parent: this,
            id: options.id || machine.id
        }));
        var resolvedOptions = _tslib.__assign(_tslib.__assign({}, DEFAULT_SPAWN_OPTIONS), options);
        if (resolvedOptions.sync) {
            childService.onTransition(function(state) {
                _this.send(actionTypes.update, {
                    state: state,
                    id: childService.id
                });
            });
        }
        var actor = childService;
        this.children.set(childService.id, actor);
        if (resolvedOptions.autoForward) {
            this.forwardTo.add(childService.id);
        }
        childService.onDone(function(doneEvent) {
            _this.removeChild(childService.id);
            _this.send(utils.toSCXMLEvent(doneEvent, {
                origin: childService.id
            }));
        }).start();
        return actor;
    };
    Interpreter.prototype.spawnBehavior = function(behavior, id) {
        var actorRef = behaviors.spawnBehavior(behavior, {
            id: id,
            parent: this
        });
        this.children.set(id, actorRef);
        return actorRef;
    };
    Interpreter.prototype.spawnPromise = function(promise, id) {
        var _a;
        var _this = this;
        var canceled = false;
        var resolvedData;
        promise.then(function(response) {
            if (!canceled) {
                resolvedData = response;
                _this.removeChild(id);
                _this.send(utils.toSCXMLEvent(actions.doneInvoke(id, response), {
                    origin: id
                }));
            }
        }, function(errorData) {
            if (!canceled) {
                _this.removeChild(id);
                var errorEvent = actions.error(id, errorData);
                try {
                    // Send "error.platform.id" to this (parent).
                    _this.send(utils.toSCXMLEvent(errorEvent, {
                        origin: id
                    }));
                } catch (error) {
                    utils.reportUnhandledExceptionOnInvocation(errorData, error, id);
                    if (_this.devTools) {
                        _this.devTools.send(errorEvent, _this.state);
                    }
                    if (_this.machine.strict) {
                        // it would be better to always stop the state machine if unhandled
                        // exception/promise rejection happens but because we don't want to
                        // break existing code so enforce it on strict mode only especially so
                        // because documentation says that onError is optional
                        _this.stop();
                    }
                }
            }
        });
        var actor = (_a = {
            id: id,
            send: function() {
                return void 0;
            },
            subscribe: function(next, handleError, complete) {
                var observer = utils.toObserver(next, handleError, complete);
                var unsubscribed = false;
                promise.then(function(response) {
                    if (unsubscribed) {
                        return;
                    }
                    observer.next(response);
                    if (unsubscribed) {
                        return;
                    }
                    observer.complete();
                }, function(err) {
                    if (unsubscribed) {
                        return;
                    }
                    observer.error(err);
                });
                return {
                    unsubscribe: function() {
                        return unsubscribed = true;
                    }
                };
            },
            stop: function() {
                canceled = true;
            },
            toJSON: function() {
                return {
                    id: id
                };
            },
            getSnapshot: function() {
                return resolvedData;
            }
        }, _a[utils.symbolObservable] = function() {
            return this;
        }, _a);
        this.children.set(id, actor);
        return actor;
    };
    Interpreter.prototype.spawnCallback = function(callback, id) {
        var _a;
        var _this = this;
        var canceled = false;
        var receivers = new Set();
        var listeners = new Set();
        var emitted;
        var receive = function(e) {
            emitted = e;
            listeners.forEach(function(listener) {
                return listener(e);
            });
            if (canceled) {
                return;
            }
            _this.send(utils.toSCXMLEvent(e, {
                origin: id
            }));
        };
        var callbackStop;
        try {
            callbackStop = callback(receive, function(newListener) {
                receivers.add(newListener);
            });
        } catch (err) {
            this.send(actions.error(id, err));
        }
        if (utils.isPromiseLike(callbackStop)) {
            // it turned out to be an async function, can't reliably check this before calling `callback`
            // because transpiled async functions are not recognizable
            return this.spawnPromise(callbackStop, id);
        }
        var actor = (_a = {
            id: id,
            send: function(event1) {
                return receivers.forEach(function(receiver) {
                    return receiver(event1);
                });
            },
            subscribe: function(next) {
                var observer = utils.toObserver(next);
                listeners.add(observer.next);
                return {
                    unsubscribe: function() {
                        listeners.delete(observer.next);
                    }
                };
            },
            stop: function() {
                canceled = true;
                if (utils.isFunction(callbackStop)) {
                    callbackStop();
                }
            },
            toJSON: function() {
                return {
                    id: id
                };
            },
            getSnapshot: function() {
                return emitted;
            }
        }, _a[utils.symbolObservable] = function() {
            return this;
        }, _a);
        this.children.set(id, actor);
        return actor;
    };
    Interpreter.prototype.spawnObservable = function(source, id) {
        var _a;
        var _this = this;
        var emitted;
        var subscription = source.subscribe(function(value) {
            emitted = value;
            _this.send(utils.toSCXMLEvent(value, {
                origin: id
            }));
        }, function(err) {
            _this.removeChild(id);
            _this.send(utils.toSCXMLEvent(actions.error(id, err), {
                origin: id
            }));
        }, function() {
            _this.removeChild(id);
            _this.send(utils.toSCXMLEvent(actions.doneInvoke(id), {
                origin: id
            }));
        });
        var actor = (_a = {
            id: id,
            send: function() {
                return void 0;
            },
            subscribe: function(next, handleError, complete) {
                return source.subscribe(next, handleError, complete);
            },
            stop: function() {
                return subscription.unsubscribe();
            },
            getSnapshot: function() {
                return emitted;
            },
            toJSON: function() {
                return {
                    id: id
                };
            }
        }, _a[utils.symbolObservable] = function() {
            return this;
        }, _a);
        this.children.set(id, actor);
        return actor;
    };
    Interpreter.prototype.spawnActor = function(actor, name) {
        this.children.set(name, actor);
        return actor;
    };
    Interpreter.prototype.spawnActivity = function(activity) {
        var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : undefined;
        if (!implementation) {
            if (!environment.IS_PRODUCTION) {
                utils.warn(false, "No implementation found for activity '".concat(activity.type, "'"));
            } // tslint:disable-next-line:no-console
            return;
        } // Start implementation
        var dispose = implementation(this.state.context, activity);
        this.spawnEffect(activity.id, dispose);
    };
    Interpreter.prototype.spawnEffect = function(id, dispose) {
        var _a;
        this.children.set(id, (_a = {
            id: id,
            send: function() {
                return void 0;
            },
            subscribe: function() {
                return {
                    unsubscribe: function() {
                        return void 0;
                    }
                };
            },
            stop: dispose || undefined,
            getSnapshot: function() {
                return undefined;
            },
            toJSON: function() {
                return {
                    id: id
                };
            }
        }, _a[utils.symbolObservable] = function() {
            return this;
        }, _a));
    };
    Interpreter.prototype.attachDev = function() {
        var global = devTools.getGlobal();
        if (this.options.devTools && global) {
            if (global.__REDUX_DEVTOOLS_EXTENSION__) {
                var devToolsOptions = typeof this.options.devTools === "object" ? this.options.devTools : undefined;
                this.devTools = global.__REDUX_DEVTOOLS_EXTENSION__.connect(_tslib.__assign(_tslib.__assign({
                    name: this.id,
                    autoPause: true,
                    stateSanitizer: function(state) {
                        return {
                            value: state.value,
                            context: state.context,
                            actions: state.actions
                        };
                    }
                }, devToolsOptions), {
                    features: _tslib.__assign({
                        jump: false,
                        skip: false
                    }, devToolsOptions ? devToolsOptions.features : undefined)
                }), this.machine);
                this.devTools.init(this.state);
            } // add XState-specific dev tooling hook
            devTools.registerService(this);
        }
    };
    Interpreter.prototype.toJSON = function() {
        return {
            id: this.id
        };
    };
    Interpreter.prototype[utils.symbolObservable] = function() {
        return this;
    };
    Interpreter.prototype.getSnapshot = function() {
        if (this.status === exports.InterpreterStatus.NotStarted) {
            return this.initialState;
        }
        return this._state;
    };
    /**
   * The default interpreter options:
   *
   * - `clock` uses the global `setTimeout` and `clearTimeout` functions
   * - `logger` uses the global `console.log()` method
   */ Interpreter.defaultOptions = {
        execute: true,
        deferEvents: true,
        clock: {
            setTimeout: function(fn, ms) {
                return setTimeout(fn, ms);
            },
            clearTimeout: function(id) {
                return clearTimeout(id);
            }
        },
        logger: /*#__PURE__*/ console.log.bind(console),
        devTools: false
    };
    Interpreter.interpret = interpret;
    return Interpreter;
}();
var resolveSpawnOptions = function(nameOrOptions) {
    if (utils.isString(nameOrOptions)) {
        return _tslib.__assign(_tslib.__assign({}, DEFAULT_SPAWN_OPTIONS), {
            name: nameOrOptions
        });
    }
    return _tslib.__assign(_tslib.__assign(_tslib.__assign({}, DEFAULT_SPAWN_OPTIONS), {
        name: utils.uniqueId()
    }), nameOrOptions);
};
function spawn(entity, nameOrOptions) {
    var resolvedOptions = resolveSpawnOptions(nameOrOptions);
    return serviceScope.consume(function(service) {
        if (!environment.IS_PRODUCTION) {
            var isLazyEntity = utils.isMachine(entity) || utils.isFunction(entity);
            utils.warn(!!service || isLazyEntity, 'Attempted to spawn an Actor (ID: "'.concat(utils.isMachine(entity) ? entity.id : "undefined", '") outside of a service. This will have no effect.'));
        }
        if (service) {
            return service.spawn(entity, resolvedOptions.name, resolvedOptions);
        } else {
            return Actor.createDeferredActor(entity, resolvedOptions.name);
        }
    });
}
/**
 * Creates a new Interpreter instance for the given machine with the provided options, if any.
 *
 * @param machine The machine to interpret
 * @param options Interpreter options
 */ function interpret(machine, options) {
    var interpreter = new Interpreter(machine, options);
    return interpreter;
}
exports.Interpreter = Interpreter;
exports.interpret = interpret;
exports.spawn = spawn;


/***/ }),

/***/ 2134:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _tslib = __webpack_require__(4605);
__webpack_require__(6187);
var actionTypes = __webpack_require__(3486);
__webpack_require__(3574);
__webpack_require__(6783);
function toInvokeSource(src) {
    if (typeof src === "string") {
        var simpleSrc = {
            type: src
        };
        simpleSrc.toString = function() {
            return src;
        }; // v4 compat - TODO: remove in v5
        return simpleSrc;
    }
    return src;
}
function toInvokeDefinition(invokeConfig) {
    return _tslib.__assign(_tslib.__assign({
        type: actionTypes.invoke
    }, invokeConfig), {
        toJSON: function() {
            invokeConfig.onDone;
            invokeConfig.onError;
            var invokeDef = _tslib.__rest(invokeConfig, [
                "onDone",
                "onError"
            ]);
            return _tslib.__assign(_tslib.__assign({}, invokeDef), {
                type: actionTypes.invoke,
                src: toInvokeSource(invokeConfig.src)
            });
        }
    });
}
exports.toInvokeDefinition = toInvokeDefinition;
exports.toInvokeSource = toInvokeSource;


/***/ }),

/***/ 1363:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _tslib = __webpack_require__(4605);
var utils = __webpack_require__(3574);
function mapState(stateMap, stateId) {
    var e_1, _a;
    var foundStateId;
    try {
        for(var _b = _tslib.__values(Object.keys(stateMap)), _c = _b.next(); !_c.done; _c = _b.next()){
            var mappedStateId = _c.value;
            if (utils.matchesState(mappedStateId, stateId) && (!foundStateId || stateId.length > foundStateId.length)) {
                foundStateId = mappedStateId;
            }
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    return stateMap[foundStateId];
}
exports.mapState = mapState;


/***/ }),

/***/ 3066:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _tslib = __webpack_require__(4605);
var State = __webpack_require__(9716);
function matchState(state, patterns, defaultValue) {
    var e_1, _a;
    var resolvedState = State.State.from(state, state instanceof State.State ? state.context : undefined);
    try {
        for(var patterns_1 = _tslib.__values(patterns), patterns_1_1 = patterns_1.next(); !patterns_1_1.done; patterns_1_1 = patterns_1.next()){
            var _b = _tslib.__read(patterns_1_1.value, 2), stateValue = _b[0], getValue = _b[1];
            if (resolvedState.matches(stateValue)) {
                return getValue(resolvedState);
            }
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (patterns_1_1 && !patterns_1_1.done && (_a = patterns_1.return)) _a.call(patterns_1);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    return defaultValue(resolvedState);
}
exports.matchState = matchState;


/***/ }),

/***/ 3052:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var children = /*#__PURE__*/ new Map();
var sessionIdIndex = 0;
var registry = {
    bookId: function() {
        return "x:".concat(sessionIdIndex++);
    },
    register: function(id, actor) {
        children.set(id, actor);
        return id;
    },
    get: function(id) {
        return children.get(id);
    },
    free: function(id) {
        children.delete(id);
    }
};
exports.registry = registry;


/***/ }),

/***/ 529:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _tslib = __webpack_require__(4605);
var defaultOptions = {
    deferEvents: false
};
var Scheduler = /*#__PURE__*/ /** @class */ function() {
    function Scheduler(options) {
        this.processingEvent = false;
        this.queue = [];
        this.initialized = false;
        this.options = _tslib.__assign(_tslib.__assign({}, defaultOptions), options);
    }
    Scheduler.prototype.initialize = function(callback) {
        this.initialized = true;
        if (callback) {
            if (!this.options.deferEvents) {
                this.schedule(callback);
                return;
            }
            this.process(callback);
        }
        this.flushEvents();
    };
    Scheduler.prototype.schedule = function(task) {
        if (!this.initialized || this.processingEvent) {
            this.queue.push(task);
            return;
        }
        if (this.queue.length !== 0) {
            throw new Error("Event queue should be empty when it is not processing events");
        }
        this.process(task);
        this.flushEvents();
    };
    Scheduler.prototype.clear = function() {
        this.queue = [];
    };
    Scheduler.prototype.flushEvents = function() {
        var nextCallback = this.queue.shift();
        while(nextCallback){
            this.process(nextCallback);
            nextCallback = this.queue.shift();
        }
    };
    Scheduler.prototype.process = function(callback) {
        this.processingEvent = true;
        try {
            callback();
        } catch (e) {
            // there is no use to keep the future events
            // as the situation is not anymore the same
            this.clear();
            throw e;
        } finally{
            this.processingEvent = false;
        }
    };
    return Scheduler;
}();
exports.Scheduler = Scheduler;


/***/ }),

/***/ 4850:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function createSchema(schema) {
    return schema;
}
var t = createSchema;
exports.createSchema = createSchema;
exports.t = t;


/***/ }),

/***/ 5350:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
/**
 * Maintains a stack of the current service in scope.
 * This is used to provide the correct service to spawn().
 */ var serviceStack = [];
var provide = function(service, fn) {
    serviceStack.push(service);
    var result = fn(service);
    serviceStack.pop();
    return result;
};
var consume = function(fn) {
    return fn(serviceStack[serviceStack.length - 1]);
};
exports.consume = consume;
exports.provide = provide;


/***/ }),

/***/ 6350:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _tslib = __webpack_require__(4605);
var utils = __webpack_require__(3574);
var isLeafNode = function(stateNode) {
    return stateNode.type === "atomic" || stateNode.type === "final";
};
function getAllChildren(stateNode) {
    return Object.keys(stateNode.states).map(function(key) {
        return stateNode.states[key];
    });
}
function getChildren(stateNode) {
    return getAllChildren(stateNode).filter(function(sn) {
        return sn.type !== "history";
    });
}
function getAllStateNodes(stateNode) {
    var stateNodes = [
        stateNode
    ];
    if (isLeafNode(stateNode)) {
        return stateNodes;
    }
    return stateNodes.concat(utils.flatten(getChildren(stateNode).map(getAllStateNodes)));
}
function getConfiguration(prevStateNodes, stateNodes) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
    var prevConfiguration = new Set(prevStateNodes);
    var prevAdjList = getAdjList(prevConfiguration);
    var configuration = new Set(stateNodes);
    try {
        // add all ancestors
        for(var configuration_1 = _tslib.__values(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()){
            var s = configuration_1_1.value;
            var m = s.parent;
            while(m && !configuration.has(m)){
                configuration.add(m);
                m = m.parent;
            }
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (configuration_1_1 && !configuration_1_1.done && (_a = configuration_1.return)) _a.call(configuration_1);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    var adjList = getAdjList(configuration);
    try {
        // add descendants
        for(var configuration_2 = _tslib.__values(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()){
            var s = configuration_2_1.value; // if previously active, add existing child nodes
            if (s.type === "compound" && (!adjList.get(s) || !adjList.get(s).length)) {
                if (prevAdjList.get(s)) {
                    prevAdjList.get(s).forEach(function(sn) {
                        return configuration.add(sn);
                    });
                } else {
                    s.initialStateNodes.forEach(function(sn) {
                        return configuration.add(sn);
                    });
                }
            } else {
                if (s.type === "parallel") {
                    try {
                        for(var _e = (e_3 = void 0, _tslib.__values(getChildren(s))), _f = _e.next(); !_f.done; _f = _e.next()){
                            var child = _f.value;
                            if (!configuration.has(child)) {
                                configuration.add(child);
                                if (prevAdjList.get(child)) {
                                    prevAdjList.get(child).forEach(function(sn) {
                                        return configuration.add(sn);
                                    });
                                } else {
                                    child.initialStateNodes.forEach(function(sn) {
                                        return configuration.add(sn);
                                    });
                                }
                            }
                        }
                    } catch (e_3_1) {
                        e_3 = {
                            error: e_3_1
                        };
                    } finally{
                        try {
                            if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
                        } finally{
                            if (e_3) throw e_3.error;
                        }
                    }
                }
            }
        }
    } catch (e_2_1) {
        e_2 = {
            error: e_2_1
        };
    } finally{
        try {
            if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2.return)) _b.call(configuration_2);
        } finally{
            if (e_2) throw e_2.error;
        }
    }
    try {
        // add all ancestors
        for(var configuration_3 = _tslib.__values(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()){
            var s = configuration_3_1.value;
            var m = s.parent;
            while(m && !configuration.has(m)){
                configuration.add(m);
                m = m.parent;
            }
        }
    } catch (e_4_1) {
        e_4 = {
            error: e_4_1
        };
    } finally{
        try {
            if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3.return)) _d.call(configuration_3);
        } finally{
            if (e_4) throw e_4.error;
        }
    }
    return configuration;
}
function getValueFromAdj(baseNode, adjList) {
    var childStateNodes = adjList.get(baseNode);
    if (!childStateNodes) {
        return {}; // todo: fix?
    }
    if (baseNode.type === "compound") {
        var childStateNode = childStateNodes[0];
        if (childStateNode) {
            if (isLeafNode(childStateNode)) {
                return childStateNode.key;
            }
        } else {
            return {};
        }
    }
    var stateValue = {};
    childStateNodes.forEach(function(csn) {
        stateValue[csn.key] = getValueFromAdj(csn, adjList);
    });
    return stateValue;
}
function getAdjList(configuration) {
    var e_5, _a;
    var adjList = new Map();
    try {
        for(var configuration_4 = _tslib.__values(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()){
            var s = configuration_4_1.value;
            if (!adjList.has(s)) {
                adjList.set(s, []);
            }
            if (s.parent) {
                if (!adjList.has(s.parent)) {
                    adjList.set(s.parent, []);
                }
                adjList.get(s.parent).push(s);
            }
        }
    } catch (e_5_1) {
        e_5 = {
            error: e_5_1
        };
    } finally{
        try {
            if (configuration_4_1 && !configuration_4_1.done && (_a = configuration_4.return)) _a.call(configuration_4);
        } finally{
            if (e_5) throw e_5.error;
        }
    }
    return adjList;
}
function getValue(rootNode, configuration) {
    var config = getConfiguration([
        rootNode
    ], configuration);
    return getValueFromAdj(rootNode, getAdjList(config));
}
function has(iterable, item) {
    if (Array.isArray(iterable)) {
        return iterable.some(function(member) {
            return member === item;
        });
    }
    if (iterable instanceof Set) {
        return iterable.has(item);
    }
    return false; // TODO: fix
}
function nextEvents(configuration) {
    return _tslib.__spreadArray([], _tslib.__read(new Set(utils.flatten(_tslib.__spreadArray([], _tslib.__read(configuration.map(function(sn) {
        return sn.ownEvents;
    })), false)))), false);
}
function isInFinalState(configuration, stateNode) {
    if (stateNode.type === "compound") {
        return getChildren(stateNode).some(function(s) {
            return s.type === "final" && has(configuration, s);
        });
    }
    if (stateNode.type === "parallel") {
        return getChildren(stateNode).every(function(sn) {
            return isInFinalState(configuration, sn);
        });
    }
    return false;
}
function getMeta(configuration) {
    if (configuration === void 0) {
        configuration = [];
    }
    return configuration.reduce(function(acc, stateNode) {
        if (stateNode.meta !== undefined) {
            acc[stateNode.id] = stateNode.meta;
        }
        return acc;
    }, {});
}
function getTagsFromConfiguration(configuration) {
    return new Set(utils.flatten(configuration.map(function(sn) {
        return sn.tags;
    })));
}
exports.getAdjList = getAdjList;
exports.getAllChildren = getAllChildren;
exports.getAllStateNodes = getAllStateNodes;
exports.getChildren = getChildren;
exports.getConfiguration = getConfiguration;
exports.getMeta = getMeta;
exports.getTagsFromConfiguration = getTagsFromConfiguration;
exports.getValue = getValue;
exports.has = has;
exports.isInFinalState = isInFinalState;
exports.isLeafNode = isLeafNode;
exports.nextEvents = nextEvents;


/***/ }),

/***/ 6187:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ActionTypes = void 0;
(function(ActionTypes) {
    ActionTypes["Start"] = "xstate.start";
    ActionTypes["Stop"] = "xstate.stop";
    ActionTypes["Raise"] = "xstate.raise";
    ActionTypes["Send"] = "xstate.send";
    ActionTypes["Cancel"] = "xstate.cancel";
    ActionTypes["NullEvent"] = "";
    ActionTypes["Assign"] = "xstate.assign";
    ActionTypes["After"] = "xstate.after";
    ActionTypes["DoneState"] = "done.state";
    ActionTypes["DoneInvoke"] = "done.invoke";
    ActionTypes["Log"] = "xstate.log";
    ActionTypes["Init"] = "xstate.init";
    ActionTypes["Invoke"] = "xstate.invoke";
    ActionTypes["ErrorExecution"] = "error.execution";
    ActionTypes["ErrorCommunication"] = "error.communication";
    ActionTypes["ErrorPlatform"] = "error.platform";
    ActionTypes["ErrorCustom"] = "xstate.error";
    ActionTypes["Update"] = "xstate.update";
    ActionTypes["Pure"] = "xstate.pure";
    ActionTypes["Choose"] = "xstate.choose";
})(exports.ActionTypes || (exports.ActionTypes = {}));
exports.SpecialTargets = void 0;
(function(SpecialTargets) {
    SpecialTargets["Parent"] = "#_parent";
    SpecialTargets["Internal"] = "#_internal";
})(exports.SpecialTargets || (exports.SpecialTargets = {}));


/***/ }),

/***/ 3574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _tslib = __webpack_require__(4605);
var types = __webpack_require__(6187);
var actionTypes = __webpack_require__(3486);
var constants = __webpack_require__(6903);
var environment = __webpack_require__(6783);
var _a;
function keys(value) {
    return Object.keys(value);
}
function matchesState(parentStateId, childStateId, delimiter) {
    if (delimiter === void 0) {
        delimiter = constants.STATE_DELIMITER;
    }
    var parentStateValue = toStateValue(parentStateId, delimiter);
    var childStateValue = toStateValue(childStateId, delimiter);
    if (isString(childStateValue)) {
        if (isString(parentStateValue)) {
            return childStateValue === parentStateValue;
        } // Parent more specific than child
        return false;
    }
    if (isString(parentStateValue)) {
        return parentStateValue in childStateValue;
    }
    return Object.keys(parentStateValue).every(function(key) {
        if (!(key in childStateValue)) {
            return false;
        }
        return matchesState(parentStateValue[key], childStateValue[key]);
    });
}
function getEventType(event) {
    try {
        return isString(event) || typeof event === "number" ? "".concat(event) : event.type;
    } catch (e) {
        throw new Error("Events must be strings or objects with a string event.type property.");
    }
}
function getActionType(action) {
    try {
        return isString(action) || typeof action === "number" ? "".concat(action) : isFunction(action) ? action.name : action.type;
    } catch (e) {
        throw new Error("Actions must be strings or objects with a string action.type property.");
    }
}
function toStatePath(stateId, delimiter) {
    try {
        if (isArray(stateId)) {
            return stateId;
        }
        return stateId.toString().split(delimiter);
    } catch (e) {
        throw new Error("'".concat(stateId, "' is not a valid state path."));
    }
}
function isStateLike(state) {
    return typeof state === "object" && "value" in state && "context" in state && "event" in state && "_event" in state;
}
function toStateValue(stateValue, delimiter) {
    if (isStateLike(stateValue)) {
        return stateValue.value;
    }
    if (isArray(stateValue)) {
        return pathToStateValue(stateValue);
    }
    if (typeof stateValue !== "string") {
        return stateValue;
    }
    var statePath = toStatePath(stateValue, delimiter);
    return pathToStateValue(statePath);
}
function pathToStateValue(statePath) {
    if (statePath.length === 1) {
        return statePath[0];
    }
    var value = {};
    var marker = value;
    for(var i = 0; i < statePath.length - 1; i++){
        if (i === statePath.length - 2) {
            marker[statePath[i]] = statePath[i + 1];
        } else {
            marker[statePath[i]] = {};
            marker = marker[statePath[i]];
        }
    }
    return value;
}
function mapValues(collection, iteratee) {
    var result = {};
    var collectionKeys = Object.keys(collection);
    for(var i = 0; i < collectionKeys.length; i++){
        var key = collectionKeys[i];
        result[key] = iteratee(collection[key], key, collection, i);
    }
    return result;
}
function mapFilterValues(collection, iteratee, predicate) {
    var e_1, _a;
    var result = {};
    try {
        for(var _b = _tslib.__values(Object.keys(collection)), _c = _b.next(); !_c.done; _c = _b.next()){
            var key = _c.value;
            var item = collection[key];
            if (!predicate(item)) {
                continue;
            }
            result[key] = iteratee(item, key, collection);
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    return result;
}
/**
 * Retrieves a value at the given path.
 * @param props The deep path to the prop of the desired value
 */ var path = function(props) {
    return function(object) {
        var e_2, _a;
        var result = object;
        try {
            for(var props_1 = _tslib.__values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()){
                var prop = props_1_1.value;
                result = result[prop];
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
        return result;
    };
};
/**
 * Retrieves a value at the given path via the nested accessor prop.
 * @param props The deep path to the prop of the desired value
 */ function nestedPath(props, accessorProp) {
    return function(object) {
        var e_3, _a;
        var result = object;
        try {
            for(var props_2 = _tslib.__values(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()){
                var prop = props_2_1.value;
                result = result[accessorProp][prop];
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (props_2_1 && !props_2_1.done && (_a = props_2.return)) _a.call(props_2);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
        return result;
    };
}
function toStatePaths(stateValue) {
    if (!stateValue) {
        return [
            []
        ];
    }
    if (isString(stateValue)) {
        return [
            [
                stateValue
            ]
        ];
    }
    var result = flatten(Object.keys(stateValue).map(function(key) {
        var subStateValue = stateValue[key];
        if (typeof subStateValue !== "string" && (!subStateValue || !Object.keys(subStateValue).length)) {
            return [
                [
                    key
                ]
            ];
        }
        return toStatePaths(stateValue[key]).map(function(subPath) {
            return [
                key
            ].concat(subPath);
        });
    }));
    return result;
}
function pathsToStateValue(paths) {
    var e_4, _a;
    var result = {};
    if (paths && paths.length === 1 && paths[0].length === 1) {
        return paths[0][0];
    }
    try {
        for(var paths_1 = _tslib.__values(paths), paths_1_1 = paths_1.next(); !paths_1_1.done; paths_1_1 = paths_1.next()){
            var currentPath = paths_1_1.value;
            var marker = result; // tslint:disable-next-line:prefer-for-of
            for(var i = 0; i < currentPath.length; i++){
                var subPath = currentPath[i];
                if (i === currentPath.length - 2) {
                    marker[subPath] = currentPath[i + 1];
                    break;
                }
                marker[subPath] = marker[subPath] || {};
                marker = marker[subPath];
            }
        }
    } catch (e_4_1) {
        e_4 = {
            error: e_4_1
        };
    } finally{
        try {
            if (paths_1_1 && !paths_1_1.done && (_a = paths_1.return)) _a.call(paths_1);
        } finally{
            if (e_4) throw e_4.error;
        }
    }
    return result;
}
function flatten(array) {
    var _a;
    return (_a = []).concat.apply(_a, _tslib.__spreadArray([], _tslib.__read(array), false));
}
function toArrayStrict(value) {
    if (isArray(value)) {
        return value;
    }
    return [
        value
    ];
}
function toArray(value) {
    if (value === undefined) {
        return [];
    }
    return toArrayStrict(value);
}
function mapContext(mapper, context, _event) {
    var e_5, _a;
    if (isFunction(mapper)) {
        return mapper(context, _event.data);
    }
    var result = {};
    try {
        for(var _b = _tslib.__values(Object.keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()){
            var key = _c.value;
            var subMapper = mapper[key];
            if (isFunction(subMapper)) {
                result[key] = subMapper(context, _event.data);
            } else {
                result[key] = subMapper;
            }
        }
    } catch (e_5_1) {
        e_5 = {
            error: e_5_1
        };
    } finally{
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally{
            if (e_5) throw e_5.error;
        }
    }
    return result;
}
function isBuiltInEvent(eventType) {
    return /^(done|error)\./.test(eventType);
}
function isPromiseLike(value) {
    if (value instanceof Promise) {
        return true;
    } // Check if shape matches the Promise/A+ specification for a "thenable".
    if (value !== null && (isFunction(value) || typeof value === "object") && isFunction(value.then)) {
        return true;
    }
    return false;
}
function isBehavior(value) {
    return value !== null && typeof value === "object" && "transition" in value && typeof value.transition === "function";
}
function partition(items, predicate) {
    var e_6, _a;
    var _b = _tslib.__read([
        [],
        []
    ], 2), truthy = _b[0], falsy = _b[1];
    try {
        for(var items_1 = _tslib.__values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()){
            var item = items_1_1.value;
            if (predicate(item)) {
                truthy.push(item);
            } else {
                falsy.push(item);
            }
        }
    } catch (e_6_1) {
        e_6 = {
            error: e_6_1
        };
    } finally{
        try {
            if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
        } finally{
            if (e_6) throw e_6.error;
        }
    }
    return [
        truthy,
        falsy
    ];
}
function updateHistoryStates(hist, stateValue) {
    return mapValues(hist.states, function(subHist, key) {
        if (!subHist) {
            return undefined;
        }
        var subStateValue = (isString(stateValue) ? undefined : stateValue[key]) || (subHist ? subHist.current : undefined);
        if (!subStateValue) {
            return undefined;
        }
        return {
            current: subStateValue,
            states: updateHistoryStates(subHist, subStateValue)
        };
    });
}
function updateHistoryValue(hist, stateValue) {
    return {
        current: stateValue,
        states: updateHistoryStates(hist, stateValue)
    };
}
function updateContext(context, _event, assignActions, state) {
    if (!environment.IS_PRODUCTION) {
        exports.warn(!!context, "Attempting to update undefined context");
    }
    var updatedContext = context ? assignActions.reduce(function(acc, assignAction) {
        var e_7, _a;
        var assignment = assignAction.assignment;
        var meta = {
            state: state,
            action: assignAction,
            _event: _event
        };
        var partialUpdate = {};
        if (isFunction(assignment)) {
            partialUpdate = assignment(acc, _event.data, meta);
        } else {
            try {
                for(var _b = _tslib.__values(Object.keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()){
                    var key = _c.value;
                    var propAssignment = assignment[key];
                    partialUpdate[key] = isFunction(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
                }
            } catch (e_7_1) {
                e_7 = {
                    error: e_7_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_7) throw e_7.error;
                }
            }
        }
        return Object.assign({}, acc, partialUpdate);
    }, context) : context;
    return updatedContext;
} // tslint:disable-next-line:no-empty
exports.warn = function() {};
if (!environment.IS_PRODUCTION) {
    exports.warn = function(condition, message) {
        var error = condition instanceof Error ? condition : undefined;
        if (!error && condition) {
            return;
        }
        if (console !== undefined) {
            var args = [
                "Warning: ".concat(message)
            ];
            if (error) {
                args.push(error);
            } // tslint:disable-next-line:no-console
            console.warn.apply(console, args);
        }
    };
}
function isArray(value) {
    return Array.isArray(value);
} // tslint:disable-next-line:ban-types
function isFunction(value) {
    return typeof value === "function";
}
function isString(value) {
    return typeof value === "string";
}
function toGuard(condition, guardMap) {
    if (!condition) {
        return undefined;
    }
    if (isString(condition)) {
        return {
            type: constants.DEFAULT_GUARD_TYPE,
            name: condition,
            predicate: guardMap ? guardMap[condition] : undefined
        };
    }
    if (isFunction(condition)) {
        return {
            type: constants.DEFAULT_GUARD_TYPE,
            name: condition.name,
            predicate: condition
        };
    }
    return condition;
}
function isObservable(value) {
    try {
        return "subscribe" in value && isFunction(value.subscribe);
    } catch (e) {
        return false;
    }
}
var symbolObservable = /*#__PURE__*/ function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
}(); // TODO: to be removed in v5, left it out just to minimize the scope of the change and maintain compatibility with older versions of integration paackages
var interopSymbols = (_a = {}, _a[symbolObservable] = function() {
    return this;
}, _a[Symbol.observable] = function() {
    return this;
}, _a);
function isMachine(value) {
    return !!value && "__xstatenode" in value;
}
function isActor(value) {
    return !!value && typeof value.send === "function";
}
var uniqueId = /*#__PURE__*/ function() {
    var currentId = 0;
    return function() {
        currentId++;
        return currentId.toString(16);
    };
}();
function toEventObject(event, payload // id?: TEvent['type']
) {
    if (isString(event) || typeof event === "number") {
        return _tslib.__assign({
            type: event
        }, payload);
    }
    return event;
}
function toSCXMLEvent(event, scxmlEvent) {
    if (!isString(event) && "$$type" in event && event.$$type === "scxml") {
        return event;
    }
    var eventObject = toEventObject(event);
    return _tslib.__assign({
        name: eventObject.type,
        data: eventObject,
        $$type: "scxml",
        type: "external"
    }, scxmlEvent);
}
function toTransitionConfigArray(event, configLike) {
    var transitions = toArrayStrict(configLike).map(function(transitionLike) {
        if (typeof transitionLike === "undefined" || typeof transitionLike === "string" || isMachine(transitionLike)) {
            return {
                target: transitionLike,
                event: event
            };
        }
        return _tslib.__assign(_tslib.__assign({}, transitionLike), {
            event: event
        });
    });
    return transitions;
}
function normalizeTarget(target) {
    if (target === undefined || target === constants.TARGETLESS_KEY) {
        return undefined;
    }
    return toArray(target);
}
function reportUnhandledExceptionOnInvocation(originalError, currentError, id) {
    if (!environment.IS_PRODUCTION) {
        var originalStackTrace = originalError.stack ? " Stacktrace was '".concat(originalError.stack, "'") : "";
        if (originalError === currentError) {
            // tslint:disable-next-line:no-console
            console.error("Missing onError handler for invocation '".concat(id, "', error was '").concat(originalError, "'.").concat(originalStackTrace));
        } else {
            var stackTrace = currentError.stack ? " Stacktrace was '".concat(currentError.stack, "'") : ""; // tslint:disable-next-line:no-console
            console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(id, "'. ") + "Original error: '".concat(originalError, "'. ").concat(originalStackTrace, " Current error is '").concat(currentError, "'.").concat(stackTrace));
        }
    }
}
function evaluateGuard(machine, guard, context, _event, state) {
    var guards = machine.options.guards;
    var guardMeta = {
        state: state,
        cond: guard,
        _event: _event
    }; // TODO: do not hardcode!
    if (guard.type === constants.DEFAULT_GUARD_TYPE) {
        return ((guards === null || guards === void 0 ? void 0 : guards[guard.name]) || guard.predicate)(context, _event.data, guardMeta);
    }
    var condFn = guards === null || guards === void 0 ? void 0 : guards[guard.type];
    if (!condFn) {
        throw new Error("Guard '".concat(guard.type, "' is not implemented on machine '").concat(machine.id, "'."));
    }
    return condFn(context, _event.data, guardMeta);
}
function toInvokeSource(src) {
    if (typeof src === "string") {
        return {
            type: src
        };
    }
    return src;
}
function toObserver(nextHandler, errorHandler, completionHandler) {
    var noop = function() {};
    var isObserver = typeof nextHandler === "object";
    var self = isObserver ? nextHandler : null;
    return {
        next: ((isObserver ? nextHandler.next : nextHandler) || noop).bind(self),
        error: ((isObserver ? nextHandler.error : errorHandler) || noop).bind(self),
        complete: ((isObserver ? nextHandler.complete : completionHandler) || noop).bind(self)
    };
}
function createInvokeId(stateNodeId, index) {
    return "".concat(stateNodeId, ":invocation[").concat(index, "]");
}
function isRaisableAction(action) {
    return (action.type === actionTypes.raise || action.type === actionTypes.send && action.to === types.SpecialTargets.Internal) && typeof action.delay !== "number";
}
exports.createInvokeId = createInvokeId;
exports.evaluateGuard = evaluateGuard;
exports.flatten = flatten;
exports.getActionType = getActionType;
exports.getEventType = getEventType;
exports.interopSymbols = interopSymbols;
exports.isActor = isActor;
exports.isArray = isArray;
exports.isBehavior = isBehavior;
exports.isBuiltInEvent = isBuiltInEvent;
exports.isFunction = isFunction;
exports.isMachine = isMachine;
exports.isObservable = isObservable;
exports.isPromiseLike = isPromiseLike;
exports.isRaisableAction = isRaisableAction;
exports.isStateLike = isStateLike;
exports.isString = isString;
exports.keys = keys;
exports.mapContext = mapContext;
exports.mapFilterValues = mapFilterValues;
exports.mapValues = mapValues;
exports.matchesState = matchesState;
exports.nestedPath = nestedPath;
exports.normalizeTarget = normalizeTarget;
exports.partition = partition;
exports.path = path;
exports.pathToStateValue = pathToStateValue;
exports.pathsToStateValue = pathsToStateValue;
exports.reportUnhandledExceptionOnInvocation = reportUnhandledExceptionOnInvocation;
exports.symbolObservable = symbolObservable;
exports.toArray = toArray;
exports.toArrayStrict = toArrayStrict;
exports.toEventObject = toEventObject;
exports.toGuard = toGuard;
exports.toInvokeSource = toInvokeSource;
exports.toObserver = toObserver;
exports.toSCXMLEvent = toSCXMLEvent;
exports.toStatePath = toStatePath;
exports.toStatePaths = toStatePaths;
exports.toStateValue = toStateValue;
exports.toTransitionConfigArray = toTransitionConfigArray;
exports.uniqueId = uniqueId;
exports.updateContext = updateContext;
exports.updateHistoryStates = updateHistoryStates;
exports.updateHistoryValue = updateHistoryValue;


/***/ }),

/***/ 123:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
var _tslib = __webpack_require__(4605);
var defaultWaitForOptions = {
    timeout: 10000 // 10 seconds
};
/**
 * Subscribes to an actor ref and waits for its emitted value to satisfy
 * a predicate, and then resolves with that value.
 * Will throw if the desired state is not reached after a timeout
 * (defaults to 10 seconds).
 *
 * @example
 * ```js
 * const state = await waitFor(someService, state => {
 *   return state.hasTag('loaded');
 * });
 *
 * state.hasTag('loaded'); // true
 * ```
 *
 * @param actorRef The actor ref to subscribe to
 * @param predicate Determines if a value matches the condition to wait for
 * @param options
 * @returns A promise that eventually resolves to the emitted value
 * that matches the condition
 */ function waitFor(actorRef, predicate, options) {
    var resolvedOptions = _tslib.__assign(_tslib.__assign({}, defaultWaitForOptions), options);
    return new Promise(function(res, rej) {
        var done = false;
        if (false) {}
        var handle = resolvedOptions.timeout === Infinity ? undefined : setTimeout(function() {
            sub.unsubscribe();
            rej(new Error("Timeout of ".concat(resolvedOptions.timeout, " ms exceeded")));
        }, resolvedOptions.timeout);
        var dispose = function() {
            clearTimeout(handle);
            done = true;
            sub === null || sub === void 0 ? void 0 : sub.unsubscribe();
        };
        var sub = actorRef.subscribe({
            next: function(emitted) {
                if (predicate(emitted)) {
                    dispose();
                    res(emitted);
                }
            },
            error: function(err) {
                dispose();
                rej(err);
            },
            complete: function() {
                dispose();
                rej(new Error("Actor terminated without satisfying predicate"));
            }
        });
        if (done) {
            sub.unsubscribe();
        }
    });
}
exports.x = waitFor;


/***/ })

};
;