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

## License
MIT.

[1]: http://dlang.org/function.html#pseudo-member
