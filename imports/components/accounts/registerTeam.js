import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

import template from './registerTeam.html';

class RegisterTeamCtrl {
  constructor($scope) {
    $scope.viewModel(this);
  }
}

export default angular.module('registerTeam', [
  angularMeteor
]).component('registerTeam', {
    templateUrl: 'imports/components/accounts/registerTeam.html',
    controller: ['$scope', RegisterTeamCtrl]
  });
