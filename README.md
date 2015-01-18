# UFCS.js
DLang's [Uniform Function Call Syntax (UFCS)][1] port to JavaScript

> It's mutates the `Object.prototype`, be careful when you are using it.

## Install

```
npm install ufcs
```

## Overview

A free function can be called with a syntax that looks as if the function were a member function of its first parameter type.

### Uniform Wrapper

Just wrap the function and `ufcs` will handle rest.

```js
var uniform = require('ufcs');

uniform(add);
function add(x, y) {
  return x + y;
}

var result = add(2, 3); //=> 5
var result = (2).add(3); //=> 5
```

### Chaining

Since it mutates `Object.prototype` you can use it with every type. So, you can chain the function.

```js
var result = add(2, 3).add(4).add(5); //=> 2 + 3 + 4 + 5 = 14
```

## Examples

```js
uniform(add);
function add(x, y) { return x + y; }

uniform(remove);
function remove(x, y) { return x - y; }

uniform(multiply);
function multiply(x, y) { return x * y; }

uniform(divide);
function divide(x, y) { return x / y; }

(2).add(3).multiply(6).divide(2).remove(3).add(5).divide(5); //=> 3.4,  It's ((((2 + 3) * 6) / 2) - 3 + 5) / 5
```

### Multiple Uniform

```js
function add(x, y) { return x + y; }
function remove(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }

uniform(add, remove, multiply, divide);

(2).add(3).multiply(6).divide(2).remove(3).add(5).divide(5); //=> 3.4,  It's ((((2 + 3) * 6) / 2) - 3 + 5) / 5
```

Alternative syntax:

```js
uniform(
  function add(x, y) { return x + y; },
  function remove(x, y) { return x - y; },
  function multiply(x, y) { return x * y; },
  function divide(x, y) { return x / y; }
);
```

### Object Uniform

Normally, it's not allowed to uniform an anonymous function, but in this case, you can. **Please do not use `this` in this functions.**

```js
var Maths = {
  add: function (x, y) { return x + y; },
  remove: function (x, y) { return x - y; },
  multiply: function (x, y) { return x * y; },
  divide: function (x, y) { return x / y; }
};
uniform(Maths); // Uniform all the methods.

add(1, 2).divide(3); //=> 1
(1).add(2).divide(3); //=> 1
```

## License
MIT.

[1]: http://dlang.org/function.html#pseudo-member
