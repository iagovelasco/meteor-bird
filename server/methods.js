Meteor.methods({
	followUser: function(friendId){
		Frindships.follow(friendId);
	},
	unfollowUser: function(friendId){
		Frindships.unfollow(friendId);
	},
	profileUpdate: function(name, about){
		Meteor.users.update
		(
			{_id: Meteor.userId()},
			{$set: {
				"profile.name": name,
				"profile.about": about
			}}
		);
		Posts.update
		(
			{userId: Meteor.userId()},
			{$set: {name: name} },
			{multi: true}
		);
	},
	publishPost: function(message, name) {
		Posts.publish(message, name);
	}
});