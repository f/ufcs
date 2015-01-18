# Uniform.js (UFSC)

DLang's [Uniform Function Call Syntax (UFSC)][1] port to JavaScript

## Install

```
npm install ufsc
```

```js
var universal = require('ufsc');

ufsc(add);
function add(x, y) {
  return x + y;
}

var result = add(2, 3); //=> 5
var result = (2).add(3); //=> 5
```

[1]: http://dlang.org/function.html#pseudo-member
