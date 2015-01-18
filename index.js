module.exports = function (fn) {
  var name = fn.name;
  // If there's no name of a function, it's not possible to uniform it.
  if (!name) { throw "Anonymous functions cannot be uniformed."; }
  
  // Overloading existing functions may cause problems.
  if (Object.prototype[name]) {
    throw "To uniform an existing function may hurt your feelings.";
  }
  
  // Register function to the Object.
  Object.prototype[name] = function () {
    var args = Array.prototype.slice.call(arguments, 0);
    // Add current value to the arguments list.
    return fn.apply(fn, [this.valueOf()].concat(args));
  }
};
