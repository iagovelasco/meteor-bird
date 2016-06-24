Template.followButton.helpers({
	canFollow: function(){
		var userId = Meteor.userId();
		return userId && Session.get("currentUSerId") != userId;
	},
	isFollowing: function() {
		return Session.get("isFollowing");
	}
});