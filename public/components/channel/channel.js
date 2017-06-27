angular.module("JabberTalkee")

    .controller("channelCtrl", ["$scope", "$routeParams", "channelService", "messageService", function ($scope, $routeParams, channelService, messageService) {
        $scope.channelMessages = [];
        $scope.channel = {};
        $scope.updateChannel = function (channel) {
            channelService.updateChannel($routeParams.id, channel)
                .then(
                    function (response) {
                        $scope.channel = response;
                    }
                )
        };
        channelService.getOneChannel($routeParams.id)
            .then(
                function (response) {
                    $scope.channel = response;
                    // console.log(response)
                }
            );
        messageService.getMessages($routeParams.id)
            .then(
                function (response) {
                    $scope.channelMessages = response.data
                }
            )
    }])
;