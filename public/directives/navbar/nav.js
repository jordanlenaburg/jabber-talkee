angular.module("JabberTalkee")

    .controller("navCtrl", ["$scope", "$routeParams", "$interval", "$localStorage", "channelService", "ngToast",
        function ($scope, $routeParams, $interval, $localStorage, channelService, ngToast) {
        $scope.channelList = [];
        $scope.setChannel = function (channel_id) {
          $scope.channel_id = channel_id;
          // console.log(channel_id)
        };
        $scope.createChannel = function (channel) {
            if (!channel.topic){
                ngToast.create({
                    className: 'warning',
                    content: "Please provide a channel topic!"
                });
                return;
            }
            if (!channel.public){
                ngToast.create({
                    className: 'warning',
                    content: "Is this channel public or private"
                });
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
        var getChannels = function () {
            if ($localStorage.token) {
                channelService.getRequest()
                    .then(
                        function (response) {
                            $scope.channelList = response;
                            // console.log($scope.channelList);
                            return response
                        }
                    );
            } else {
                $scope.channelList = [];
                return
            }
        };
        $interval(getChannels, 500);

    }])
;