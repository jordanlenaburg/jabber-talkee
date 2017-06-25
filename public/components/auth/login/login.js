angular.module("Auth")

    .controller("LoginCtrl", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

        $scope.login = function (user) {
            UserService.login(user).then(function (response) {
                $location.path("/channel");
            }, function (response) {
                alert(response.data.message);
            });
        }
    }]);