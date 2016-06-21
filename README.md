# injectJS
A javascript framework for dependency injection

## Quick start

```javascript
inject('emotion', ':)');

inject.factory('factory', function (emotion) {
    return 'Hello ' + emotion;
}, ['emotion']);

console.log(inject('factory'));
//output: Hello :)
```

## API

`inject` ->  **name**: String, **value**: any, **dependencies**: Array *(optional)*
>  Creates an injector using whatever value.

`inject.service` -> **name**: String, **value**: Function, **dependencies**: Array *(optional)* 
> Creates an injector using class style.

`inject.factory` -> **name**: String, **value**: Function, **dependencies**: Array *(optional)*     
> Creates an injector using functional style.


