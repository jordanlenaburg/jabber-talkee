angular.module("JabberTalkee")

    .directive("messageInput", function () {

        return {
            templateUrl: "directives/message-input/message-input.html",
            restrict: "E",
            controller: "messageCtrl"
        }
    })
    .directive("navbar", function () {

        return {
            templateUrl: "directives/navbar/navbar.html",
            restrict: "E",
            controller: "navCtrl"
        }
    })

    .directive("footer", function () {

        return {
            templateUrl: "directives/navbar/footer.html",
            restrict: "E"
        }
    });
