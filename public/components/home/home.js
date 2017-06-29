angular.module("JabberTalkee")

    .controller("homeCtrl", ["$scope", "$localStorage", function ($scope, $localStorage) {

        if ($localStorage.token) {
            $scope.loginMessage = "Log out";
            $scope.loginLink = "logout"
        } else if (!$localStorage.token) {
            $scope.loginMessage = "Log in";
            $scope.loginLink = "login"
        }

    }]);