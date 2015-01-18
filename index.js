function ufcs() {
  for (var i = 0; i < arguments.length; i++) {
    var fn = arguments[i];
    if (typeof fn === "function") {
      var name = fn.name || fn.alias;
      if (!name) { throw "Anonymous functions cannot be uniformed."; }
      if (Object.prototype[name]) {
        throw "To uniform an existing function may hurt your feelings.";
      }
      Object.prototype[name] = function () {
        var args = Array.prototype.slice.call(arguments, 0);
        if (args.length < fn.length) {
          args = [this.valueOf()].concat(args);
        }
        return fn.apply(fn, args);
      }
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

module.export = ufcs;
