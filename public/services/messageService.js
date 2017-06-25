angular.module("JabberTalkee")
    //todo: send channel id along with message
    .service("messageService", ["$http", function ($http) {
        this.sendMessage = function (message) {
            // message.channel_id = req.params._id;
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
    }]);