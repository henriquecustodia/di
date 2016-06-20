(function (w) {
    'use strict';

    var _inject = {};

    function scream(message) {
        throw new Error(message);
    }

    function isFunction(fn) {
        return typeof fn === 'function';
    }

    function isArray(arr) {
        return Array.isArray(arr);
    }

    function isUndefined(value) {
        return value === undefined;
    }

    function isNull(value) {
        return value === null;
    }

    function isUndefinedOrNull(value) {
        return isUndefined(value) || isNull(value);
    }

    function injector(dependencies) {
        var _dependencies = [];

        dependencies.forEach(function (dependency) {
            _dependencies.push(_get(dependency));
        });

        return _dependencies;
    }

    function _set(name, value, dependencies, conf) {
        if (_inject[name]) {
            scream('Already exists this inject: ' + name);
        }

        if (isUndefinedOrNull(value)) {
            scream('The second parameter has to be defined.');
        }

        if (!isUndefinedOrNull(dependencies) && !isArray(dependencies)) {
            scream('The third parameter has to be an Array');
        }

        conf = conf || {};

        _inject[name] = {
            get: value,
            dependencies: dependencies,
            useService: isFunction(value) && !!conf.useService,
            useFactory: isFunction(value) && !!!conf.useService
        }
    }

    function _get(name) {
        var toInject = _inject[name];

        if (!toInject) {
            scream('The inject "' + name + '" was not found.')
        }

        var _dependencies = toInject.dependencies ? injector(toInject.dependencies) : [];

        if (toInject.useService) {
            var context = {};
            toInject.get.apply(context, _dependencies);
            return context;
        }

        if (toInject.useFactory) {
            return toInject.get.apply(null, _dependencies);
        }

        return toInject.get;
    }

    function inject(name, fn, dependencies, conf) {
        if (!arguments.length) {
            return;
        }

        if (arguments.length === 1) {
            return _get(name);
        }

        _set(name, fn, dependencies);
    };

    function factory(name, fn, dependencies){
        _set(name, fn, dependencies, { useFactory: true });
    }

    function service(name, fn, dependencies){
        _set(name, fn, dependencies, { useService: true });
    }

    inject.factory = factory;
    inject.service = service;
    w.inject = inject;

})(window);
