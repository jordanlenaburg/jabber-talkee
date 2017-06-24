angular.module("JabberTalkee")

    .directive("navbar", function () {

        return {
            templateUrl: "components/navbar/navbar.html",
            restrict: "E",
            controller: "navCtrl"
        }
    })

    .directive("footer", function () {

        return {
            templateUrl: "components/navbar/footer.html",
            restrict: "E"
        }
    });
