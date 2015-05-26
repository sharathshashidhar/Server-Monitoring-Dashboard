var app = angular.module("app", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://<your-firebase-url>.firebaseio.com/");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  syncObject.$bindTo($scope, "data");

  console.log("Artifacts loaded successfully")
});
