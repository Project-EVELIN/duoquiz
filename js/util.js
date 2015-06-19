define([], function() {

  var util = {};

  util.inherit = function(childObj, parentObj) {
    childObj.prototype = Object.create(parentObj.prototype);
  };

  /*
		Shuffles an given array
	*/
  util.shuffleArray = function(array) {
    if (!Array.isArray(array)) {
      throw new Error('expected Array as argument in shuffleArray()');
    }

    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  /*
		Flattens the given nested Array with any depth of nesting.
	*/
  util.flatten = function(array) {
    return array.reduce(function(prev, cur) {
      var more = [].concat(cur)
        .some(Array.isArray);
      return prev.concat(more ? util.flatten(cur) : cur);
    }, []);
  };

  /*
		Creates an array of numbers
			- start, included [optional]
			- stop, not included
			- step, size of each step [optional]
	*/
  util.range = function(start, stop, step) {
    var _start, _stop, _step, i;
    if (arguments.length < 0 || arguments.length > 3) {
      throw new Error('wrong number of arguments for range()');
    }

    if (arguments.length === 1) {
      _start = 0;
      _stop = start;
    } else {
      _start = start;
      _stop = stop;
    }

    _step = step || 1;

    var array = [];
    for (i = _start; i < _stop; i += _step) {
      array.push(i);
    }

    return array;
  };

  /*
		impl. from: http://james.padolsey.com/javascript/shuffling-the-dom/
	*/
  util.shuffleElements = function(elements) {
    allElems = (function() {
      var ret = [],
        l = elems.length;
      while (l--) {
        ret[ret.length] = elems[l];
      }
      return ret;
    })();

    var shuffled = (function() {
        var l = allElems.length,
          ret = [];
        while (l--) {
          var random = Math.floor(Math.random() * allElems.length),
            randEl = allElems[random].cloneNode(true);
          allElems.splice(random, 1);
          ret[ret.length] = randEl;
        }
        return ret;
      })(),
      l = elems.length;

    while (l--) {
      elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
      elems[l].parentNode.removeChild(elems[l]);
    }
  };

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  util.getRandomArbitrary = function(min, max) {
    return Math.random() * (max - min) + min;
  };

  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  util.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  util.isFunction = function(object) {
    return !!(object && object.constructor && object.call && object.apply);
  };


  util.padLeft = function(nr, n, str) {
    return Array(n - String(nr).length + 1).join(str || '0') + nr;
  };

  util.isInteger = function isInteger(nVal) {
    return typeof nVal === "number" && isFinite(nVal) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor(nVal) === nVal;
  };

  return util;
});