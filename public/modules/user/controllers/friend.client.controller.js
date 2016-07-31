angular.module('user').controller('UserFriendController', [
	'$scope',
	function ($scope) {
		$scope.title = 'Friends';
		$scope.image = '/images/profile.jpg';
		$scope.friends = [
			{"name":"Hector Pall", "image":"1.jpg", "status":"วีไอพี สี่แยกเอ็นเตอร์เทน บัสไฮเปอร์ ธุรกรรมฟลุทอะ ล็อบบี้เหมยสามแยก"}
		];
	}
]);