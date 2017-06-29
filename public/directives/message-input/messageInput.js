angular.module("JabberTalkee")
    .controller("messageCtrl", ["$scope", "$routeParams", "messageService", "findUserService", function ($scope, $routeParams, messageService, findUserService) {
        $scope.loggedInUser;
        findUserService.findUser()
            .then(
                function (response) {
                    // console.log(response);
                    $scope.loggedInUser = response
                }
            );
        $scope.sendMessage = function (message, user) {
            // console.log($routeParams);
            message.username = user.username;
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