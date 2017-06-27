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
        this.getOneChannel = function (id) {
            return $http.get("/account/channel/" + id)
                .then(
                    function (response) {
                        return response.data
                    }
                )
        };
        this.createChannel = function (channel) {
            return $http.post("/account/channel", channel)
                .then(
                    function (response) {
                        // console.log(response);
                        return response
                    },
                    function (response) {
                        alert("Error " + response.status + ": " + response.statusText)
                    }
                )
        };
        this.updateChannel = function (id, body) {
            if (body.addedUser) {
                var config = {
                    params: {
                        usersInChannel: body.addedUser
                    }
                };
                return $http.get("account/find", config)
                    .then(
                        function (response) {
                            console.log(response.data[0]._id);
                            body.usersInChannel = response.data[0]._id;
                            console.log(body);
                            return $http.put("/account/channel/" + id, body)
                                .then(
                                    function (response) {
                                        return response.data
                                    },
                                    function (response) {
                                        alert("Error " + response.status + ": " + response.statusText)
                                    }
                                )
                        }
                    );
                // console.log(body);
            }
            return $http.put("/account/channel/" + id, body)
                .then(
                    function (response) {
                        return response.data
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