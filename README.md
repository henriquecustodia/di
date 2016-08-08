# di.js
A simple (but useful) javascript framework for dependency injection

## Quick start

```javascript
di('emotion', ':)');

di.factory('factory', function (emotion) {
    return 'Hello ' + emotion;
}, ['emotion']);

console.log(di('factory'));
//output: Hello :)
```

## API

`di` ->  name: **String**, value: **any**, dependencies: **Array** *(optional)*
>  Creates a dependency using whatever value.

`di.service` -> name: **String**, value: **Function**, dependencies: **Array** *(optional)* 
> Creates a dependency using class style.

`di.factory` -> name: **String**, value: **Function**, dependencies: **Array** *(optional)*     
> Creates a dependency using functional style.

Enjoy!


