angular.module("JabberTalkee")

    .controller("channelCtrl", ["$scope", "$routeParams", "messageService", function ($scope, $routeParams, messageService) {
        $scope.channelMessages = [];
        messageService.getMessages($routeParams.id)
            .then(
                function (response) {
                    $scope.channelMessages = response.data
                }
            )
    }])
;