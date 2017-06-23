angular.module("JabberTalkee")

    .directive("navbar", function () {

        return {
            templateUrl: "components/navbar/navbar.html",
            restrict: "E",
            // controller: "channelCtrl"
        }
    })

    .directive("footer", function () {

        return {
            templateUrl: "components/navbar/footer.html",
            restrict: "E"
        }
    });
