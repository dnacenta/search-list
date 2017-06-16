var app = angular.module('slist', []);

app.controller('DataController', function ($scope) {

	$scope.selectedIndex = null;
	$scope.selectedPlace = null;

	$scope.selectPlace = function(place, index) {
		$scope.selectedPlace = place;
		$scope.selectedIndex = index;
	};

	$scope.places = [
		{
			"country": "France",
			"capital": "Paris",
			"population": "67,000,000",
			"currency": "Euro"
		},
		{
			"country": "Germany",
			"capital": "Berlin",
			"population": "81,000,000",
			"currency": "Euro"
		},
		{
			"country": "Spain",
			"capital": "Madrid",
			"population": "47,000,000",
			"currency": "Euro"
		},
		{
			"country": "Greece",
			"capital": "Athens",
			"population": "10,000,000",
			"currency": "Euro"
		},
		{
			"country": "Norway",
			"capital": "Oslo",
			"population": "5,000,000",
			"currency": "Norwegian krone"
		},
	]
});
