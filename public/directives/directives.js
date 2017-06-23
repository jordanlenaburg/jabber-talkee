var app = angular.module("mainApp");

app.directive("navbar", function () {

    return {
        templateUrl: "components/navbar/navbar.html",
        restrict: "E"
    }
})

app.directive("footer", function () {

    return {
        templateUrl: "components/navbar/footer.html",
        restrict: "E"
    }
})
