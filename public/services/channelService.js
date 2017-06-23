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
    };
    this.createChannel = function () {
        return $http.post("/account/channel")
            .then(
                function (response) {
                    console.log(response);
                    return response
                },
                function (response) {
                    alert("Error " + response.status + ": " + response.statusText)
                }
            )
    };
    this.setTopic = function () {
        return $http.put("/account/channel/" + req.params.id)

    }
}]);