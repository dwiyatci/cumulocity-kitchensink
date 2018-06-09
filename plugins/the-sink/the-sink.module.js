/**
 * Created by glenn on 12.01.18.
 */

(function () {
  'use strict';

  angular
    .module('c8y.kitchensink.theSink', [])
    .config(configure);

  /* @ngInject */
  function configure(
    c8yNavigatorProvider,
    c8yViewsProvider
  ) {
    c8yNavigatorProvider.addNavigation({
      path: 'kitchensink',
      name: 'Kitchen sink',
      icon: 'ship',
      priority: 10000
    });

    c8yViewsProvider.when('/kitchensink', {
      template: '<c8y-the-sink></c8y-the-sink>'
    });
  }
}());
