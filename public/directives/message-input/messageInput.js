angular.module("JabberTalkee")

    .controller("messageCtrl", ["$scope", "$routeParams", "messageService", function ($scope, $routeParams, messageService) {

        $scope.sendMessage = function (message) {
            // console.log($routeParams);
            message.channel_id = $routeParams.id;
            // console.log(message)
            messageService.sendMessage(message)
                .then(
                    function (response) {
                        return messageService.
                    }
                )
        }

    }]);