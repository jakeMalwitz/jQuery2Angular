var myApp = angular.module("myApp", []);

myApp.controller("taskController", ["$scope", function($scope){

  $scope.total = 0;
  $scope.emContent = [];
  $scope.employee = {};

  $scope.getEmployee = function(){
    console.log($scope.employee.emID);
    if($scope.employee.emID !== undefined && $scope.employee.emYS !== NaN){
    $scope.emContent.push($scope.employee);
    $scope.total += $scope.employee.emYS;
    $scope.employee = {};
} else {
  alert("Please enter blank fields");
}
};

  $scope.delete = function(id){
    for (var i = 0; i < $scope.emContent.length; i++){
      if($scope.emContent[i].emID == id){
        $scope.total -= $scope.emContent[i].emYS;
        $scope.emContent.splice(i, 1);
      }
    };
  };

}]);
