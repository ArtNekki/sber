(function(ELEMENT) {
  ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
  ELEMENT.closest = ELEMENT.closest || function closest(selector) {
      if (!this) return null;
      if (this.matches(selector)) return this;
      if (!this.parentElement) {return null}
      else return this.parentElement.closest(selector)
    };
}(Element.prototype));

(function() {
  if (!Array.prototype.forEach) {

    Array.prototype.forEach = function (callback, thisArg) {
  
      var T, k;
  
      if (this == null) {
        throw new TypeError(' this is null or not defined');
      }
  
      var O = Object(this);
  
      var len = O.length >>> 0;
  
      if (typeof callback !== 'function') {
          throw new TypeError(callback + ' is not a function');
      }
  
      if (arguments.length > 1) {
        T = thisArg;
      }
  
      k = 0;
  
      while (k < len) {
  
        var kValue;
  
        if (k in O) {

          kValue = O[k];
          callback.call(T, kValue, k, O);
        }
        k++;
      }
    };
  }
})();
