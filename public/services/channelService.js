angular.module("JabberTalkee")

.service("channelService", ["$http", function ($http) {
    this.getRequest = function () {
        return $http.get("/account/channel")
            .then(
                function (response) {
                    console.log(response.data);
                    return response.data
                },
                function (response) {
                    alert("Error " + response.status + ": " + response.statusText)
                }
            )
    }
}]);