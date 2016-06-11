'use strict';

angular
  .module('portfolioApp', [])
  .controller('MainCtrl', function ($scope, $http) {
    
    $scope.name = 'skoold';

    $scope.sendMail = function()
    {

        var mailOptions = {
          from: $scope.formName + '<' + $scope.formEmail + '>', 
          to: 'amandajofisher@hotmail.com', 
          subject: 'Message from your Skoold.com', 
          text: $scope.formMessage,
          html: '<b>' + $scope.formMessage + '</b>' 
       };

       console.log(mailOptions);

       $http.post('/send', mailOptions).success(function() {
          console.log("Message Sent.");

          $scope.formName = '';
          $scope.formEmail = '';
          $scope.formMessage = '';
          $scope.formSource = '';
       });


    }

  });


