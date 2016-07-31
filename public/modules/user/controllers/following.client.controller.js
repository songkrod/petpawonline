angular.module('user').controller('UserFollowingController', [
	'$scope',
	function ($scope) {
		$scope.title = 'Following';
		$scope.image = '/images/profile.jpg';
		$scope.friends = [
			{"name":"Hector Pall", "image":"1.jpg", "status":"วีไอพี สี่แยกเอ็นเตอร์เทน บัสไฮเปอร์ ธุรกรรมฟลุทอะ ล็อบบี้เหมยสามแยก"},
			{"name":"Lyonell Smith", "image":"3.jpg", "status":"โอเปร่า คอลัมน์ พูลเดชานุภาพแจ๊ส แอปเปิ้ล"}
		];
	}
]);