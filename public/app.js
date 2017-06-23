var app = angular.module("JabberTalkee", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){

    $routeProvider
        .when("/chat", {
            templateUrl: "",
            controller: "chatCtrl"
        })
        .when("/channel", {
            templateUrl: "",
            // controller: "channelCtrl"
        })
        .otherwise({
            redirectTo: ""
        })



}]);





app.controller("channelCtrl", function(){



})