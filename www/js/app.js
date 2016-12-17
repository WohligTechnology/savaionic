// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var firstapp=angular.module('starter', ['ionic', 'starter.controllers','ionic-datepicker','ion-floating-menu'])
.config(function($ionicConfigProvider){
  $ionicConfigProvider.form.checkbox('square');
  $ionicConfigProvider.form.toggle('small');
  $ionicConfigProvider.tabs.position('top')

})
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
.config(function (ionicDatePickerProvider) {
    var datePickerObj = {
      inputDate: new Date(),
      setLabel: 'Set',
      todayLabel: 'Today',
      closeLabel: 'Close',
      mondayFirst: false,
      weeksList: ["S", "M", "T", "W", "T", "F", "S"],
      monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
      templateType: 'popup',
      from: new Date(2012, 8, 1),
      to: new Date(2018, 8, 1),
      showTodayButton: true,
      dateFormat: 'dd MMMM yyyy',
      closeOnSelect: false,
      disableWeekdays: [6],
    };
    ionicDatePickerProvider.configDatePicker(datePickerObj);
  })


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'PlaylistsCtrl'

      }
    }
  })
  .state('app.business-list', {
    url: '/business-list',
    views: {
      'menuContent': {
        templateUrl: 'templates/business-list.html',
        controller: 'BusinessListCtrl'

      }
    }
  })
  .state('app.employee-detail', {
    url: '/employee-detail',
    views: {
      'menuContent': {
        templateUrl: 'templates/employee-detail.html',
        controller: 'EmployeeDetailCtrl'
      }
    }
  })
    .state('app.distribution', {
    url: '/distribution',
    views: {
      'menuContent': {
        templateUrl: 'templates/distribution.html',
        controller: 'DistributionCtrl'

      }
    }
  })
    .state('app.checkin', {
    url: '/checkin',
    views: {
      'menuContent': {
        templateUrl: 'templates/checkin.html',
        controller: 'CheckINAppCtrl'

      }
    }
  })
   .state('app.new-criteria', {
    url: '/new-criteria',
    views: {
      'menuContent': {
        templateUrl: 'templates/new-criteria.html',
        controller: 'NewCriteriaCtrl'

      }
    }
  })
     .state('app.all-offer', {
    url: '/all-offer',
    views: {
      'menuContent': {
        templateUrl: 'templates/all-offer.html',
        controller: 'AllOfferCtrl'

      }
    }
  })
   .state('app.create-offer', {
    url: '/create-offer',
    views: {
      'menuContent': {
        templateUrl: 'templates/create-offer.html',
        controller: 'CreateOfferCtrl'

      }
    }
  })
    .state('app.app-summary', {
    url: '/app-summary',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-summary.html',
        controller: 'AppSummaryCtrl'

      }
    }
  })
    .state('app.app-loyalty', {
    url: '/app-loyalty',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-loyalty.html',
        controller: 'AppLoyaltyCtrl'

      }
    }
  })
     .state('target-audience', {
    url: '/target-audience',
        templateUrl: 'templates/target-audience.html',
        controller: 'TargetAudienceCtrl'

  })
  .state('app.app-personal', {
    url: '/app-personal',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-personal.html',
        controller: 'AppPersonalCtrl'
      }
    }
  })
  .state('app.app-business', {
    url: '/app-business',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-business.html',
        controller: 'AppBusinessCtrl'
      }
    }
  })
  .state('app.app-branch', {
    url: '/app-branch',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-branch.html',
        controller: 'AppBranchCtrl'
      }
    }
  })
    .state('app.review-branchdetail', {
    url: '/review-branchdetail',
     views: {
      'menuContent': {
        templateUrl: 'templates/review-branchdetail.html',
        controller: 'ReviewBranchDetailCtrl'
     }}
  })
  .state('social-signup', {
    url: '/social-signup',
        templateUrl: 'templates/social-signup.html',
        controller: 'SocialSignupCtrl'
  })
  .state('personaldetail', {
    url: '/personaldetail',
        templateUrl: 'templates/personaldetail.html',
        controller: 'PersonalDetailCtrl'
  })
  .state('loyalty-programme', {
    url: '/loyalty-programme',
        templateUrl: 'templates/loyalty-programme.html',
        controller: 'LoyaltyProgrammeCtrl'
  })
    .state('app.loyalty-programme', {
    url: '/loyalty-programme',
    views: {
      'menuContent': {
        templateUrl: 'templates/loyalty-programme.html',
        controller: 'LoyaltyProgrammeCtrl'
      }
    }
  })
    .state('app.create-card', {
    url: '/create-card',
    views: {
      'menuContent': {
        templateUrl: 'templates/create-card.html',
        controller: 'CreateCardCtrl'
      }
    }
  })
  .state('branch-employee', {
    url: '/branch-employee',
        templateUrl: 'templates/branch-employee.html',
        controller: 'BranchEmployeeCtrl'
  })
  .state('branch-employeedetail', {
    url: '/branch-employeedetail',
        templateUrl: 'templates/branch-employeedetail.html',
        controller: 'BranchEmployeeDetailCtrl'
  })
  .state('recent-checkin', {
    url: '/recent-checkin',
        templateUrl: 'templates/recent-checkin.html',
        controller: 'RecentCheckinCtrl'
  })
  .state('checkin-duration', {
    url: '/checkin-duration',
        templateUrl: 'templates/checkin-duration.html',
        controller: 'CheckinDurationCtrl'
  })
  .state('summary', {
    url: '/summary',
        templateUrl: 'templates/summary.html',
        controller: 'SummaryCtrl'
  })
  .state('subscriber-requested', {
    url: '/subscriber-requested',
        templateUrl: 'templates/subscriber-requested.html',
        controller: 'SubscriberRequestedCtrl'
  })
  .state('subscriber-business', {
    url: '/subscriber-business',
        templateUrl: 'templates/subscriber-business.html',
        controller: 'SubscriberBusinessCtrl'
  })
  .state('requested-cardpoints', {
    url: '/requested-cardpoints',
        templateUrl: 'templates/requested-cardpoints.html',
        controller: 'RequestedCardPointsCtrl'
  })
  .state('newloyalty-programme', {
    url: '/newloyalty-programme',
        templateUrl: 'templates/newloyalty-programme.html',
        controller: 'NewLoyaltyProgrammeCtrl'
  })
  .state('mobile-verification', {
    url: '/mobile-verification',
        templateUrl: 'templates/mobile-verification.html',
        controller: 'VerificationCtrl'
  })
  .state('sign-up', {
    url: '/sign-up',
        templateUrl: 'templates/sign-up.html',
        controller: 'SignupCtrl'
  })
  .state('check-in', {
    url: '/check-in',
        templateUrl: 'templates/check-in.html',
        controller: 'CheckInCtrl'
  })
  .state('preview-personaldetail', {
    url: '/preview-personaldetail',
        templateUrl: 'templates/preview-personaldetail.html',
        controller: 'PreviewPersonalDetailCtrl'
  })
  .state('preview-businessdetail', {
    url: '/preview-businessdetail',
        templateUrl: 'templates/preview-businessdetail.html',
        controller: 'PreviewBuisnessDetailCtrl'
  })
  .state('preview-branchdetail', {
    url: '/preview-branchdetail',
        templateUrl: 'templates/preview-branchdetail.html',
        controller: 'PreviewBranchDetailCtrl'
  })

  .state('business-address', {
    url: '/business-address',
        templateUrl: 'templates/business-address.html',
        controller: 'BusinessAddressCtrl'
  })
  .state('branch-address', {
    url: '/branch-address',
        templateUrl: 'templates/branch-address.html',
        controller: 'BranchAddressCtrl'
  })
  .state('success', {
    url: '/success',
        templateUrl: 'templates/success.html',
        controller: 'SuccessCtrl'
  })
  .state('welcome-backlogin', {
    url: '/welcome-backlogin',
        templateUrl: 'templates/welcome-backlogin.html',
        controller: 'WelcomeBackLoginCtrl'
  })
  .state('business-registration', {
    url: '/business-registration',
        templateUrl: 'templates/business-registration.html',
        controller: 'BusinessRegistrationCtrl'
  })
  .state('branch-registration', {
    url: '/branch-registration',
        templateUrl: 'templates/branch-registration.html',
        controller: 'BranchRegistrationCtrl'
  })

  .state('login', {
      url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'

    })
  .state('personal-address', {
      url: '/personal-address',
        templateUrl: 'templates/personal-address.html',
        controller: 'AddressCtrl'
    })

    .state('loyalty-card', {
        url: '/loyalty-card',
        templateUrl: 'templates/loyalty-card.html',
        controller: 'LoyaltyCardCtrl'

    })
    .state('app.add-employee', {
        url: '/add-employee',
        views: {
          'menuContent': {
        templateUrl: 'templates/add-employee.html',
        controller: 'AddEmployeeCtrl'
}}
    })
    .state('add-newemployee', {
        url: '/add-newemployee',
        templateUrl: 'templates/add-newemployee.html',
        controller: 'AddNewEmployeeCtrl'

    })
    .state('security-question', {
      url: '/security-question',
          templateUrl: 'templates/security-question.html',
          controller: 'SecurityQuestionCtrl'
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })


  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });



 $urlRouterProvider.otherwise('/login');




  // if none of the above states are matched, use this as the fallback

});
firstapp.directive('onlyDigits', function() {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, element, attr, ctrl) {
            var digits;

            function inputValue(val) {
                if (val) {
                    if (attr.type == "text") {
                        digits = val.replace(/[^0-9]/g, '');
                    } else {
                        digits = val.replace(/[^0-9]/g, '');
                    }


                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    return parseInt(digits, 10);
                }
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    };
});
