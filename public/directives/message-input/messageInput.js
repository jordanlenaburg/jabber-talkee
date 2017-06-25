angular.module("JabberTalkee")

    .controller("messageCtrl", ["$scope", "$routeParams", "messageService", function ($scope, $routeParams, messageService) {
        $scope.sendMessage = function (message) {
            message.channel_id =
            messageService.sendMessage(message)
        }

    }]);