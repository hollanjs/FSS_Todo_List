Tasks = new Mongo.Collection('tasks');
Updates = new Mongo.Collection('updates');

if (Meteor.isClient) {

  var app = angular.module("todos",['angular-meteor']);

  app.controller("TodosListCtrl", ['$scope','$meteor',
    function($scope, $meteor){

      ///////////  "Complete Car Artwork" udpates and functions  //////////

      $scope.caCompleteArtwork = $meteor.collection(function() {
        return Tasks.find({ setlineup : true , completecarartwork : false },
                          { sort: { timing: 1 } })
      });

      $scope.updatecaCompleteArtwork = function(task) {
        id = task._id;
        item = task.sku + " - " + task.project;
        item += "     |    Car artwork completed   ";
        Tasks.update(
          { _id : id },
          { $set :
            { completecarartwork : true },
          }
        );
        Updates.insert(
          {
            update : item,
            time : new Date()
          }
        );
      }

      ///////////  "Car Artwork to Licensing" udpates and functions  //////////

      $scope.caToLicensing = $meteor.collection(function() {
        return Tasks.find({ completecarartwork : true , carartworktolicensing : false },
                          { sort: { timing: 1 } })
      });

      $scope.updatecaToLicensing = function(task) {
        id = task._id;
        item = task.sku + " - " + task.project;
        item += "     |     Car artwork sent to licensing";
        Tasks.update(
          { _id : id },
          { $set :
            { carartworktolicensing : true },
          }
        );
        Updates.insert(
          {
            update : item,
            time : new Date()
          }
        );
      }


      ///////////  "Complete Car Artwork" udpates and functions  //////////

      $scope.caApproved = $meteor.collection(function() {
        return Tasks.find({ carartworktolicensing : true , carartworkapproved : false },
                          { sort: { timing: 1 } })
      });

      $scope.updatecaApproved = function(task) {
        id = task._id;
        item = task.sku + " - " + task.project;
        item += "     |     Car Artwork Approved by Licensor";
        Tasks.update(
          { _id : id },

          { $set :
            { carartworkapproved : true },
          }
        );
        Updates.insert(
          {
            update : item,
            time : new Date()
          }
        );
      }


      ///////////  "Complete Car Artwork" udpates and functions  //////////

      $scope.caUpload = $meteor.collection(function() {
        return Tasks.find({ carartworkapproved : true , carartworkupload : false },
                          { sort: { timing: 1 } })
      });

      $scope.updatecaUpload = function(task) {
        id = task._id;
        item = task.sku + " - " + task.project;
        item += "     |     Car artwork uploaded to Dropbox";
        Tasks.update(
          { _id : id },

          { $set :
            { carartworkupload : true },
          }
        );
        Updates.insert(
          {
            update : item,
            time : new Date()
          }
        );
      }


      ///////////  "Complete Car Artwork" udpates and functions  //////////

      $scope.dsPhoto = $meteor.collection(function() {
        return Tasks.find({ decosamplereceived : true , decosamplephoto : false },
                          { sort: { timing: 1 } })
      });

      $scope.updatedsPhoto = function(task) {
        id = task._id;
        item = task.sku + " - " + task.project;
        item += "     |     Deco sample photographed";
        Tasks.update(
          { _id : id },

          { $set :
            { decosamplephoto : true },
          }
        );
        Updates.insert(
          {
            update : item,
            time : new Date()
          }
        );
      }


      ///////////  "Complete Car Artwork" udpates and functions  //////////

      $scope.dsToLicensing = $meteor.collection(function() {
        return Tasks.find({ decosamplereceived : true , decosampletolicensing : false },
                          { sort: { timing: 1 } })
      });

      $scope.updatedsToLicensing = function(task) {
        id = task._id;
        item = task.sku + " - " + task.project;
        item += "     |     Deco sample sent to licensing";
        Tasks.update(
          { _id : id },

          { $set :
            { decosampletolicensing : true },
          }
        );
        Updates.insert(
          {
            update : item,
            time : new Date()
          }
        );
      }


      ///////////  "Complete Car Artwork" udpates and functions  //////////

      $scope.dsApproved = $meteor.collection(function() {
        return Tasks.find({ decosampletolicensing : true , decosampleapproved : false },
                          { sort: { timing: 1 } })
      });

      $scope.updatedsApproved = function(task) {
        id = task._id;
        item = task.sku + " - " + task.project;
        item += "     |     Deco sample approved by licensor";
        Tasks.update(
          { _id : id },

          { $set :
            { decosampleapproved : true },
          }
        );
        Updates.insert(
          {
            update : item,
            time : new Date()
          }
        );
      }


      ///////////  "Complete Car Artwork" udpates and functions  //////////

      $scope.paCompleteArtwork = $meteor.collection(function() {
        return Tasks.find({ completepackagingartwork : false }, { sort: { timing: 1 } })
      });

      $scope.updatepaCompleteArtwork = function(task) {
        id = task._id;
        item = task.sku + " - " + task.project;
        item += "     |     Packaging artwork completed";
        Tasks.update(
          { _id : id },

          { $set :
            { completepackagingartwork : true },
          }
        );
        Updates.insert(
          {
            update : item,
            time : new Date()
          }
        );
      }


      ///////////  "Complete Car Artwork" udpates and functions  //////////

      $scope.paToLicensing = $meteor.collection(function() {
        return Tasks.find({ completepackagingartwork : true , packagingartworktolicensing : false },
                          { sort: { timing: 1 } })
      });

      $scope.updatepaToLicensing = function(task) {
        id = task._id;
        item = task.sku + " - " + task.project;
        item += "     |     Packaging artwork sent to licensor";
        Tasks.update(
          { _id : id },

          { $set :
            { packagingartworktolicensing : true },
          }
        );
        Updates.insert(
          {
            update : item,
            time : new Date()
          }
        );
      }


      ///////////  "Complete Car Artwork" udpates and functions  //////////

      $scope.paApproved = $meteor.collection(function() {
        return Tasks.find({ packagingartworktolicensing : true , packagingartworkapproved : false },
                          { sort: { timing: 1 } })
      });

      $scope.updatepaApproved = function(task) {
        id = task._id;
        item = task.sku + " - " + task.project;
        item += "     |     Packaging artwork approved by licensing";
        Tasks.update(
          { _id : id },

          { $set :
            { packagingartworkapproved : true },
          }
        );
        Updates.insert(
          {
            update : item,
            time : new Date()
          }
        );
      }


      ///////////  "Complete Car Artwork" udpates and functions  //////////

      $scope.paUpload = $meteor.collection(function() {
        return Tasks.find({ packagingartworkapproved : true , packagingartworkupload : false },
                          { sort: { timing: 1 } })
      });

      $scope.updatepaUpload = function(task) {
        id = task._id;
        item = task.sku + " - " + task.project;
        item += "     |     Packaging artwork uploaded to Dropbox";
        Tasks.update(
          { _id : id },
          { $set :
            { packagingartworkupload : true },
          }
        );
        Updates.insert(
          {
            update : item,
            time : new Date()
          }
        );
      }


      ///////////  updates  //////////
      $scope.updates = $meteor.collection(function () {
        return Updates.find( {} , { sort : { time : -1 } } );
      });

    }
  ]);



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    return Meteor.methods({

      removeAll: function() {
        console.log('removing all tasks....');
        Tasks.remove({});
        console.log('successfully removed all tasks');
        console.log('removing all udpates....');
        Updates.remove({});
        console.log('successfully removed all updates');
      } //to call this, type 'Meteor.call('removeAll')' into the command line

    });
  });
}

