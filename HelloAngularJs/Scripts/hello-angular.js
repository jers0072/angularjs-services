/// <reference path="jquery-1.9.1.js" />
/// <reference path="hello-angular.js" />
/// <reference path="angular.js" />

// Create ngTwitter Module (roughly Module = namespace in C#)
var ngTwitter = angular.module("ngTwitter", ['ngResource']);

// Declaring a Service
ngTwitter.factory("TwitterService", function ($resource)
{
    return {
        timeline: $resource("/Home/GetTweets")
    }
});

ngTwitter.controller("TimelineController", function ($scope, TwitterService)
{
    $scope.tweets = TwitterService.timeline.query({}, isArray = true);

    $scope.newTweets = {
        0: "No new Tweets",
        other: "{} new Tweets"
    }

    $scope.sendStatus = function ()
    {
        var statusText = $scope.statusText;
        var newTimeLine = new TwitterService.timeline(
            {
                ImageUrl: "",
                ScreenName: "",
                MediaUrl: "",
                Tweet: statusText
            });
        newTimeLine.$save(newTimeLine);
    }
});

//// Create ngTwitter Module (roughly Module = namespace in C#)
//var ngTwittTweet { geer = angular.module("ngTwitter", []);

//// Declaring a Service
//ngTwitter.factory("TwitterService", function ($http)
//{
//    return {
//        timeline: function ()
//        {
//            return $http.get("/Home/GetTweets")
//        }
//    }
//});

//ngTwitter.controller("TimelineController", function ($scope, TwitterService)
//{
//    var resultPromise = TwitterService.timeline();
//    resultPromise.success(function (data)
//    {
//        $scope.tweets = data;
//    });

//    $scope.newTweets = {
//        0: "No new Tweets",
//        other: "{} new Tweets"
//    }
//});