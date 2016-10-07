/**
 * Created by user on 27.09.16.
 */
app.factory('project', ['$http', function ($http) {
    return {
        get_projects: function () {
            return $http.get('/projects')
        },
        add_project: function (project) {
            return $http.post('/projects', {project: project})
        },
        edit_project: function (project) {
            return $http.put('/projects/' + project.id, {project: project})
        },
        delete_project: function (project) {
            return $http.delete('/projects/' + project.id)
        }
    }
}]);