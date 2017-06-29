angular.module("JabberTalkee")

    .controller("channelCtrl", ["$scope", "$interval", "$routeParams", "$localStorage", "channelService", "findUserService", "messageService",
        function ($scope, $interval, $routeParams, $localStorage, channelService, findUserService, messageService) {
            $scope.channelMessages = [];
            $scope.channel = {};
            $scope.loggedInUser = {};
            findUserService.findUser()
                .then(
                    function (response) {
                        // console.log(response);
                        $scope.loggedInUser = response
                    }
                );
            $scope.updateChannel = function (channel) {
                channelService.updateChannel($routeParams.id, channel)
                    .then(
                        function (response) {
                            if (response) {
                                $scope.channel = response;
                                $scope.channel.usersInChannel = [];
                            }

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
            var getMessages = function () {
                if ($localStorage.token) {
                    messageService.getMessages($routeParams.id)
                        .then(
                            function (response) {
                                $scope.channelMessages = response.data
                            }
                        );
                    var elem = document.getElementById('data');
                    elem.scrollTop = elem.scrollHeight;
                } else {
                    return
                }
            };
            $interval(getMessages, 500);
        }])
;