(function (inject) {

    inject('emotion', ':)');

    inject.factory('factory', function () {
        return 'Hello';
    });

    inject.service('service', function (factory, emotion) {
        this.getName = function () {
            return 'John';
        };

        this.getPhrase = function () {
            return [factory, this.getName(), emotion].join(' ');
        };

    }, ['factory', 'emotion']);


    inject('printService', function (service) {
        return service.getPhrase();
    }, ['service']);

    var message = inject('printService');

    console.log(message);

})(window.inject);