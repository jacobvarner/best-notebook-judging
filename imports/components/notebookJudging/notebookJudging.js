import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './notebookJudging.html';

class NotebookJudgingCtrl {
  constructor() {

  }
}

export default angular.module('notebookJudging', [
  angularMeteor
])
  .component('notebookJudging', {
    templateUrl: 'imports/components/notebookJudging/notebookJudging.html',
    controller: NotebookJudgingCtrl
  });
