angular.module("Auth")
    //TODO: add get request of channels after user logs in
    .controller("LoginCtrl", ["$scope", "UserService", function ($scope, UserService) {

        $scope.login = function (user) {
            UserService.login(user).then(function (response) {
                return response
            }, function (response) {
                alert(response.data.message);
            });
        }
    }]);