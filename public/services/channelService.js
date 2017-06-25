angular.module("JabberTalkee")

.service("channelService", ["$http", function ($http) {
    this.getRequest = function () {
        return $http.get("/account/channel")
            .then(
                function (response) {
                    // console.log(response.data);
                    return response.data
                },
                function (response) {
                    alert("Error " + response.status + ": " + response.statusText)
                }
            )
    };
    this.getOneChannel = function () {
        return $http.get("/account/channel/" + req.params.id)
            .then(
                function (response) {
                    return response
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
    this.updateChannel = function () {
        return $http.put("/account/channel/" + req.params.id)
            .then(
                function (response) {
                    return response
                },
                function (response) {
                    alert("Error " + response.status + ": " + response.statusText)
                }
            )
    };
    this.deleteChannel = function () {
        return $http.delete("/account/channel/" + req.params.id)
            .then(
                function (response) {
                    return response
                },
                function (response) {
                    alert("Error " + response.status + ": " + response.statusText)
                }
            )
    }
}]);