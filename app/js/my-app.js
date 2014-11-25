
// always inside a IIFE (pattern: automatic called function)
// to create a new closure and protect the global scope.
(function() {
  'use strict';

  angular.module('my-app', [
    // external modules here:
    'ngSanitize',
    'ngAnimate',

    // the local modules here:
    'eg.dependency'
  ]);

})();
