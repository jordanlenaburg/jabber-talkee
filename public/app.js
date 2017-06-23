var app = angular.module("JabberTalkee", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){

    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            // controller: ""
        })
        .when("/chat", {
            templateUrl: "",
            controller: "chatCtrl"
        })
        .when("/channel", {
            templateUrl: "",
            controller: "channelCtrl"
        })
        // .otherwise({
        //     redirectTo: "/home"
        // })



}]);





