var app = angular.module("JabberTalkee", ["ngRoute", "Auth","ngToast"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html"
            // controller: ""
        })
        .when("/chat", {
            templateUrl: "",
            controller: "chatCtrl"
        })
        .when("/account/channel/:id", {
            templateUrl: "/components/channel/channel.html",
            controller: "channelCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        })
}]);





