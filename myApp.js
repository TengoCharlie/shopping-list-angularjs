var app = angular.module("myShoppingList", []);
app.controller('myCtrl', ($scope) => {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.errorText = "";
    $scope.addItem = function () {
        if (!$scope.addMe) { return; }
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        }
        else {
            $scope.errorText = "This item is already in your cart";
        }
    }

    $scope.removeItem = function (x) {
        $scope.errorText = "";
        $scope.products.splice(x, 1);
    }
});