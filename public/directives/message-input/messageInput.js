angular.module("JabberTalkee")
    .controller("messageCtrl", ["$scope", "$routeParams", "messageService", "findUserService", function ($scope, $routeParams, messageService, findUserService) {
        $scope.loggedInUser = {};

        $scope.sendMessage = function (message) {
            findUserService.findUser()
                .then(
                    function (response) {
                        console.log(response);
                        $scope.loggedInUser = response;
                    }
                );
            // console.log($routeParams);
            message.username = $scope.loggedInUser.username;
            message.channel_id = $routeParams.id;
            // console.log(message)
            messageService.sendMessage(message)
                .then(
                    function (response) {
                        $scope.message = {};
                        return response;
                    }
                )
        }

    }]);