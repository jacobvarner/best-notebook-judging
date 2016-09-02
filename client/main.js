import angular from 'angular';
import angularMeteor from 'angular-meteor';
import '../imports/startup/accounts-config.js';

angular.module('best-notebook-judging', [
  angularMeteor,
  'accounts.ui'
]);
