angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,  $location, $ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  //--------------------------------------------
   $scope.login = function(user) {
			
		if(typeof(user)=='undefined'){
			$scope.showAlert('请填写用户名和密码');	
			return false;
		}

		if(user.username=='lrd@qq.com' && user.password=='lrd'){
			$location.path('/app/home');
		}else{
			$scope.showAlert('用户名或密码错误');	
		}
		
	};
  //--------------------------------------------
  $scope.logout = function() {   $location.path('/app/login');   };
  //--------------------------------------------
   // An alert dialog
	 $scope.showAlert = function(msg) {
	   var alertPopup = $ionicPopup.alert({
		 title: '警告消息',
		 template: msg
	   });
	 };
  //--------------------------------------------
})




.controller('TestdatasCtrl', function($scope) {
  $scope.testdatas = [
    { title: '约神1', id: 1 },
    { title: '约神2', id: 2 },
    { title: '约神3', id: 3 },
    { title: '约神4', id: 4 },
    { title: '约神5', id: 5 },
    { title: '约神6', id: 6 }
  ];
})

.controller('TestdataCtrl', function($scope, $stateParams) {
});