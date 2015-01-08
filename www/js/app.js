angular.module('ionicApp', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('intro', {
                url: '/',
                abstract: true,
                templateUrl: 'templates/slides.html',
                controller: 'SlidesCtrl'
            })

            .state('slide1', {
                url: '/',
                views: {
                    'slide1-tab': {
                        templateUrl: "templates/slide1.html",
                        controller: 'Slide1Ctrl'
                    }
                }
            })

            .state('slide2', {
                url: '/',
                views: {
                    'slide2-tab': {
                        templateUrl: "templates/slide2.html",
                        controller: 'Slide2Ctrl'
                    }
                }
            })

            .state('slide3', {
                url: '/',
                views: {
                    'slide3-tab': {
                        templateUrl: "templates/slide3.html",
                        controller: 'Slide3Ctrl'
                    }
                }
            })

            .state('slide4', {
                url: '/',
                views: {
                    'slide4-tab': {
                        templateUrl: "templates/slide4.html",
                        controller: 'Slide4Ctrl'
                    }
                }
            });

        $urlRouterProvider.otherwise("/");
    })

    .controller('SlidesCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

        // Called each time the slide changes
        $scope.slideChanged = function(index) {
            $scope.slideIndex = index;
        };

        $scope.changeSlide = function(index){
            $ionicSlideBoxDelegate.slide(index);
        }

    })

    .controller('Slide1Ctrl', function($scope) {
        $scope.value = "Slide1";
    })

    .controller('Slide2Ctrl', function($scope) {
        $scope.value = "Slide2";
    })


    .controller('Slide3Ctrl', function($scope) {
        $scope.value = "Slide3";
    })

    .controller('Slide4Ctrl', function($scope) {
        $scope.value = "Slide4";
    });