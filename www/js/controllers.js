angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('LoginCtrl', function($scope) {

})
.controller('EmployeeDetailCtrl', function($scope) {

})
.controller('AppPersonalCtrl', function($scope) {

})
.controller('CheckINAppCtrl', function($scope) {
  $scope.checkin = [{
    add: "Vashi (West)",
    branchid: 1023,
    name: "123 Center one shopping Center"
  }, {
    add: "Sion (East)",
    branchid: 1024,
    name: "123 Center one shopping Center"
  }, {
    add: "Sion (East)",
    branchid: 1024,
    name: "GuruKrupa"
  }, {
    add: "Sion (West)",
    branchid: 1024,
    name: "123 Center one shopping Center"
  }];
})
.controller('AppBusinessCtrl', function($scope) {

})
.controller('AppSummaryCtrl', function($scope) {

})
.controller('DistributionCtrl', function($scope) {

})
.controller('AllOfferCtrl', function($scope) {

})
.controller('CreateOfferCtrl', function($scope) {

})
.controller('NewCriteriaCtrl', function($scope) {

})
.controller('AppBranchCtrl', function($scope) {

})
.controller('VerificationCtrl', function($scope) {

})
.controller('TargetAudienceCtrl', function($scope) {

})
.controller('LoyaltyProgrammeCtrl', function($scope) {

})
.controller('NewLoyaltyProgrammeCtrl', function($scope) {

})
.controller('SummaryCtrl', function($scope) {

})
.controller('LoyaltyCardCtrl', function($scope) {

})
.controller('BranchEmployeeCtrl', function($scope) {
  $scope.employees = [{
    name: "Mahesh Mauraya",
    empid: 45661,
    position: "Manager",
    image: "img/burgerking.jpg"
  }, {
    name: "Ruchira Thakrey",
    empid: 45662,
    position: "Asst. Manager",
    image: "img/burgerking.jpg"
  }, {
    name: "Pratik Verma",
    empid: 45663,
    position: "Coordinator",
    image: "img/burgerking.jpg"
  }, {
    name: "4",
    empid: 45664,
    position: "4",
    image: "img/burgerking.jpg"
  }];
})
.controller('BranchEmployeeDetailCtrl', function($scope) {
  $scope.employees = [{
    name: "Mahesh Mauraya",
    empid: 45661,
    position: "Manager",
    image: "img/burgerking.jpg",
    status:"active"
  }, {
    name: "Ruchira Thakrey",
    empid: 45662,
    position: "Asst. Manager",
    image: "img/burgerking.jpg",
    status:"inactive"
  }, {
    name: "Pratik Verma",
    empid: 45663,
    position: "Coordinator",
    image: "img/burgerking.jpg",
    status:"active"
  }, {
    name: "4",
    empid: 45664,
    position: "4",
    image: "img/burgerking.jpg",
    status:"inactive"
  }];
})
.controller('AddEmployeeCtrl', function($scope) {

  $scope.employees = [{
    name: "Mahesh Mauraya",
    empid: 45661,
    position: "Manager",
    image: "img/burgerking.jpg"
  }, {
    name: "Ruchira Thakrey",
    empid: 45662,
    position: "Asst. Manager",
    image: "img/burgerking.jpg"
  }, {
    name: "Pratik Verma",
    empid: 45663,
    position: "Coordinator",
    image: "img/burgerking.jpg"
  }, {
    name: "4",
    empid: 45664,
    position: "4",
    image: "img/burgerking.jpg"
  }];

})
.controller('AddNewEmployeeCtrl', function($scope) {

})
.controller('CheckInCtrl', function($scope) {
  $scope.checkin = [{
    add: "Vashi (West)",
    branchid: 1023,
    name: "123 Center one shopping Center"
  }, {
    add: "Sion (East)",
    branchid: 1024,
    name: "123 Center one shopping Center"
  }, {
    add: "Sion (East)",
    branchid: 1024,
    name: "GuruKrupa"
  }, {
    add: "Sion (West)",
    branchid: 1024,
    name: "123 Center one shopping Center"
  }];
})
.controller('SocialSignupCtrl', function($scope) {


})
.controller('RecentCheckinCtrl', function($scope) {
  $scope.checkin = [{
    add: "Vashi (West)",
    branchid: 1023,
    name: "123 Center one shopping Center"
  }, {
    add: "Sion (East)",
    branchid: 1024,
    name: "123 Center one shopping Center"
  }, {
    add: "Sion (East)",
    branchid: 1024,
    name: "GuruKrupa"
  }, {
    add: "Sion (West)",
    branchid: 1024,
    name: "123 Center one shopping Center"
  }];

})
.controller('WelcomeBackLoginCtrl', function($scope) {

})
.controller('SignupCtrl', function($scope) {

})
.controller('AddressCtrl', function($scope) {

})
.controller('SecurityQuestionCtrl', function($scope) {

})
.controller('BusinessRegistrationCtrl', function($scope) {

})
.controller('BusinessAddressCtrl', function($scope) {

})
.controller('BranchRegistrationCtrl', function($scope) {

})
.controller('PreviewBuisnessDetailCtrl', function($scope) {

})
.controller('PreviewBranchDetailCtrl', function($scope) {

})
.controller('ReviewBranchDetailCtrl', function($scope) {

})
.controller('BranchAddressCtrl', function($scope) {

})
.controller('SuccessCtrl', function($scope) {

})
.controller('CheckinDurationCtrl', function($scope) {

})
.controller('SubscriberBusinessCtrl', function($scope) {

})
.controller('RequestedCardPointsCtrl', function($scope) {

})
.controller('SubscriberRequestedCtrl', function($scope) {

})
.controller('PreviewPersonalDetailCtrl', function($scope) {
$scope.previewDetail = {};
$scope.previewDetail.persoanlInfo = false;
console.log("here");
$scope.persoanlInfo = function () {
  $scope.previewDetail.persoanlInfo = !$scope.previewDetail.persoanlInfo;
console.log($scope.previewDetail.persoanlInfo);
};
//$scope.persoanlInfo();
})
.controller('PersonalDetailCtrl', function($scope,ionicDatePicker) {
  $scope.userDetail = {};
  var ipObj1 = {
    callback: function (val) {  //Mandatory
      console.log('Return value from the datepicker popup is : ' + val, new Date(val));
      $scope.userDetail.dob = new Date(val);
    },
    disabledDates: [            //Optional
      new Date(2016, 2, 16),
      new Date(2015, 3, 16),
      new Date(2015, 4, 16),
      new Date(2015, 5, 16),
      new Date('Wednesday, August 12, 2015'),
      new Date("08-16-2016"),
      new Date(1439676000000)
    ],
    from: new Date(2012, 1, 1), //Optional
    to: new Date(2016, 10, 30), //Optional
    inputDate: new Date(),      //Optional
    mondayFirst: true,          //Optional
    disableWeekdays: [0],       //Optional
    closeOnSelect: false,       //Optional
    templateType: 'popup'       //Optional
  };

  $scope.openDatePicker = function(){
    ionicDatePicker.openDatePicker(ipObj1);
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
