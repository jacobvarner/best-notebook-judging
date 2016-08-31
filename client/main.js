import angular from 'angular';
import angularMeteor from 'angular-meteor';
import notebookJudging from '../imports/components/notebookJudging/notebookJudging';

angular.module('best-notebook-judging', [
  angularMeteor,
  notebookJudging.name
]);
