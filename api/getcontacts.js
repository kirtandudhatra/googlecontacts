var GoogleContacts = require("google-contacts-crud");

module.exports = {

	getContacts : function(cid,cs){
 
		var CLIENT_ID=cid;
		var CLIENT_SECRET=cs; 
		 
		var googleContacts = new GoogleContacts(CLIENT_ID, CLIENT_SECRET);
		var credentials    = {
		    "access_token": "ya29.GluaBgpHX4MfHwIXwP8Ju6apnfiE4aAxMQ1ta3675CEqVOgfYZyTOzPuYtsERhn5gOWlQTsFYnYfcwG6Ga7JzN1nCDvLHXL3J-wSF4oKhel54LSDTDvuwOUQZvwF", 
			  "scope": "https://www.googleapis.com/auth/contacts", 
			  "token_type": "Bearer", 
			  "expires_in": 3600, 
			  "refresh_token": "1/FeP-RZ6mnVD6Of4Z-Q3k7i2JH6sH5yXu_qseDTgMkbo"
		};
		 
		 
		 
		googleContacts.setUserCredentials(credentials);

		googleContacts.getContacts(function (error,contact) {
			console.log(contact);
		});

	}
}
