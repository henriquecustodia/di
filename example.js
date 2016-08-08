(function (di) {

    di('emotion', ':)');

    di.factory('factory', function () {
        return 'Hello';
    });

    di.service('service', function (factory, emotion) {
        this.getName = function () {
            return 'John';
        };

        this.getPhrase = function () {
            return [factory, this.getName(), emotion].join(' ');
        };

    }, ['factory', 'emotion']);


    di('printService', function (service) {
        return service.getPhrase();
    }, ['service']);

    var message = di('printService');

    console.log(message);

})(window.di);