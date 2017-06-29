angular.module("JabberTalkee")

    .service("findUserService", ["$http", function ($http) {
        this.findUser = function () {
            return $http.get("account/find/user")
                .then(
                    function (response) {
                        // console.log(response);
                        return response.data
                    },
                    function (response) {
                        alert("Error " + response.status + ": " + response.statusText)
                    }
                )
        };
    }]);