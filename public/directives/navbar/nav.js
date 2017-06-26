angular.module("JabberTalkee")

    .controller("navCtrl", ["$scope", "$routeParams", "channelService", function ($scope, $routeParams, channelService) {
        $scope.channelList = [];
        $scope.setChannel = function (channel_id) {
          $scope.channel_id = channel_id;
          // console.log(channel_id)
        };
        $scope.createChannel = function (channel) {
            if (!channel.topic){
                alert("Please provide a channel topic");
                return;
            }
            if (!channel.public){
                alert("Is this channel public or private?");
                return;
            }
            channelService.createChannel(channel)
                .then(
                    function (response) {
                        channel = {};
                        return channelService.getRequest()
                    }
                )
                .then(
                    function (response) {
                        $scope.channelList = response;
                        return response
                    }
                );
        };
        channelService.getRequest()
            .then(
                function (response) {
                    $scope.channelList = response;
                    // console.log($scope.channelList);
                    return response
                }
            )
    }])
;