
//TODO: pass in channel topic
angular.module("JabberTalkee")

    .controller("navCtrl", ["$scope", "channelService", function ($scope, channelService) {
        $scope.channelList = [];
        $scope.createChannel = function (channel) {
            if (!channel){
                alert("Please provide a channel topic");
                return;
            }
            channelService.createChannel(channel)
                .then(
                    function (response) {
                        return response
                    }
                );
        };
        channelService.getRequest()
            .then(
                function (response) {
                    $scope.channelList = response;
                    console.log($scope.channelList);
                    return response
                }
            )

    }])
;