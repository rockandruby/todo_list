/**
 * Created by user on 01.10.16.
 */
app.service('authInterceptor',['$q', '$location', 'Flash',  function($q, $location, Flash) {
    var service = this;

    service.responseError = function(response) {
        status_callback(response.status)();
        return $q.reject(response);
    };

    function status_callback(code){
        var codes = {
            401: function(){
                $location.path('sign_in');
                Flash.create('danger', 'Sign in before continue!');
            },
            403: function (){
                Flash.create('danger', 'You can\'t perform that action!');
            },
            422: function (){
                Flash.create('danger', 'No empty fields allowed!');
            }

        };

        return codes[code]
    }
}]);
