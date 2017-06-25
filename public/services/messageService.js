angular.module("JabberTalkee")
    .service("messageService", ["$http", function ($http) {
        this.sendMessage = function (message) {
            return $http.post("/account/message", message)
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
        this.getMessages = function (channel) {
            config = {
                params: {
                    channel_id: channel
                }
            };
            console.log(config)
            return $http.get("/account/message", config)
                .then(
                    function (response) {
                        console.log(response);
                        return response
                    },
                    function (response) {
                        alert("Error " + response.status + ": " + response.statusText)
                    }
                )
        }
    }]);