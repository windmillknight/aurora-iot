// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.find', {
    url: '/find',
    views: {
      'menuContent': {
        templateUrl: 'templates/find.html'
      }
    }
  })


.state('app.colorPicker',{
  url:'/colorPicker',
  views:{
    'menuContent':{
      templateUrl:'templates/colorPicker.html'
    }
  }
})

.state('app.shoes',{
  url:'/shoes',
  views:{
    'menuContent':{
      templateUrl:'templates/shoes.html'
    }
  }
})

  .state('app.share',{
    url:'/share',
    views:{
      'menuContent':{
        templateUrl:'templates/share.html'
      }
    }
  })

  .state('app.sample', {
      url: '/sample',
      views: {
        'menuContent': {
          templateUrl: 'templates/sample.html'
        }
      }
    })

.state('app.my',{
  url:'/my',
  views:{
    'menuContent':{
      templateUrl:'templates/my.html'
    }
  }
})

.state('app.home',{
  url:'/home',
  views:{
    'menuContent':{
      templateUrl:'templates/home.html'
    }
  }
})

 .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })

.state('app.signup',{
  url:'/signup',
  views:{
    'menuContent':{
      templateUrl:'templates/signup.html'
    }
  }
})

.state('app.pattern',{
  url:'/pattern',
  views:{
    'menuContent':{
      templateUrl:'templates/pattern.html'
    }
  }
})

.state('app.collection',{
  url:'/collection',
  views:{
    'menuContent':{
      templateUrl:'templates/collection.html'
    }
  }
})

.state('app.device',{
  url:'/device',
  views:{
    'menuContent':{
      templateUrl:'templates/device.html'
    }
  }
})

.state('app.setting',{
  url:'/setting',
  views:{
    'menuContent':{
      templateUrl:'templates/setting.html'
    }
  }
})

    .state('app.testdatas', {
      url: '/testdatas',
      views: {
        'menuContent': {
          templateUrl: 'templates/testdatas.html',
          controller: 'TestdatasCtrl'
        }
      }
    })

  .state('app.testdata', {
    url: '/testdatas/:testdataId',
    views: {
      'menuContent': {
        templateUrl: 'templates/testdata.html',
        controller: 'TestdataCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
})

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
});
