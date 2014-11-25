(function() {
  'use strict';

  angular.module('eg.dependency', [
    'ngSanitize',
    'ngAnimate'
  ]);

  // define one controller EgCtrl on module eg.dependency:
  angular.module('eg.dependency').controller('EgCtrl', EgCtrl);
  EgCtrl.$inject = ['$interval', '$log'];

  // define one directive animateOnChange on module eg.dependency:
  angular.module('eg.dependency').directive('animateOnChange', animateOnChange);
  animateOnChange.$inject = ['$animate', '$timeout'];

  //////////////////////////////////

  // Controller:
  function EgCtrl($interval, $log) {
    var vm = this,
      interval;

    vm.counter = 0;
    vm.interval = 2000; // 2s
    vm.paused = true;

    vm.pauseCounter = pause;
    vm.resumeCounter = resume;

    activate();

    //////// functions here:

    function activate() {
      interval = resume();
    }

    function increment() {
      vm.counter += 1;
    }

    function pause() {
      $interval.cancel(interval);
      interval = undefined;
      vm.paused = true;
      $log.debug('counter paused!');
    }

    function resume() {
      if (typeof interval === 'undefined') {
        interval = $interval(increment, vm.interval);
        vm.paused = false;
        $log.debug('counter resumed!', interval);
      }
      return interval;
    }
  }

  // Directive:
  function animateOnChange($animate, $timeout) {
    return function(scope, elem, attr) {
      scope.$watch(attr.animateOnChange, dothis);

      //////////
      function dothis(newvalue, oldvalue) {
        if (newvalue !== oldvalue) {
          (function(el) {
            $animate.addClass(el, 'changed').then(function() {
              $timeout(function() {
                $animate.removeClass(el, 'changed');
              }, 500); // just for demo!!
            });
          })(elem);
        }
      }

    }; // end return :~
  }
})();
