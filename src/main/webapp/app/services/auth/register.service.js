(function () {
    'use strict';

    angular
        .module('ivcalculatorApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
