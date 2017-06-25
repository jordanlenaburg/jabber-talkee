angular.module("JabberTalkee")
//TODO make it so messages returns all messages from channel, not just from user
    .controller("messageCtrl", ["$scope", "$routeParams", "messageService", function ($scope, $routeParams, messageService) {

        $scope.sendMessage = function (message) {
            // console.log($routeParams);
            message.channel_id = $routeParams.id;
            // console.log(message)
            messageService.sendMessage(message)
                .then(
                    function (response) {
                        return messageService.getMessages(message.channel_id);
                    }
                )
                .then (
                    function (response) {
                        console.log(response);
                        return response;
                    }
                )
        }

    }]);