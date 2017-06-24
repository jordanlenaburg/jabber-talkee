angular.module("JabberTalkee")

    .controller("navCtrl", ["$scope", "channelService", function ($scope, channelService) {
        $scope.channelList = [];
        $scope.createChannel = function (channelName) {
            var body = {
                topic: channelName
            };
            channelService.createChannel(body)
                .then(
                    function (response) {
                        $scope.channelList = response;
                        return response
                    }
                )
        };
        channelService.getRequest()
            .then(
                function (response) {
                    return response
                }
            )

    }]);