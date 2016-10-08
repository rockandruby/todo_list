/**
 * Created by user on 06.10.16.
 */
app.directive('tasksList', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'directives/tasks_list.html',
        controller: 'TasksController'
    };
});