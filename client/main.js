import angular from 'angular';
import angularMeteor from 'angular-meteor';
import registerTeam from '../imports/components/accounts/registerTeam';
import '../imports/startup/accounts-config.js';

angular.module('best-notebook-judging', [
  angularMeteor,
  registerTeam.name,
  'accounts.ui'
]);
