function ufcs() {
  for (var i = 0; i < arguments.length; i++) {
    var fn = arguments[i];
    if (typeof fn === "function") {
      var name = fn.name || fn.alias;
      if (!name) { throw "Anonymous functions cannot be uniformed."; }
      if (Object.prototype[name]) {
        throw new Error("To uniform an existing function may hurt your feelings.");
      }
      var uniformer = function (fn) {
        return function () {
          var args = Array.prototype.slice.call(arguments, 0);
          if (args.length < fn.length) {
            args = [this.valueOf()].concat(args);
          }
          return fn.apply(fn, args);
        };
      };
      Object.prototype[name] = uniformer(fn);
    } else if (typeof fn === "object") {
      for (var method in fn) {
        var impl = fn[method];
        if (typeof impl === "function" && fn.hasOwnProperty(method)) {
          impl.alias = method;
          ufcs(impl);
        }
      }
    }
  }
};
