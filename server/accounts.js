Accounts.onCreateUser(function(options, user){
	if(user.services.facebok){
		var facebook = user.services.facebook;
		user["profile"] = {
			name: facebook.name
		};
	}else{
		user["profile"] = options.profile;	
	}
	return user;
});