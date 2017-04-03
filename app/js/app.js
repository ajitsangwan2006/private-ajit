'use strict';


// Declare app level module which depends on filters, and services
angular.module('phonecatApp',[]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/customers',
                {template: 'scripts/customer/customer.html',   controller: CustomerController, controllerAs: '_ctrl'});
    $routeProvider.when('/billing',
                {template: 'partials/billing.html',   controller: BillingCtrl});
    $routeProvider.otherwise({redirectTo: '/customers'});
  }]);
