var GoogleContacts = require("google-contacts-crud");

module.exports = {
	getSomeAsyncData : async function (cid,cs){

			var CLIENT_ID=cid;
			var CLIENT_SECRET=cs; 
			 
			var googleContacts = new GoogleContacts(CLIENT_ID, CLIENT_SECRET);
			var credentials    = {
			  "access_token": "ya29.GlubBhCCgOcamKO_Hzybzi7tm6gU7tmtUltpeAoqie0GDoKUhizl_fAO0zhA3F2O2XJx7tvyIHzEbBrQHiB7sf3S7kiTq-P2KZcMpYgPefZe8kg2kWa2HCIrHzfd", 
			  "scope": "https://www.googleapis.com/auth/contacts", 
			  "token_type": "Bearer", 
			  "expires_in": 3600, 
			  "refresh_token": "1/vMkK-jTAAM9itsd2lfvL3VhssElNg1mdeU4R6CemQwY"
			}
			 			 			 
			googleContacts.setUserCredentials(credentials);

			 function getAsyncData(){
			    return new Promise(function(resolve, reject){
			        googleContacts.getContacts(function (error,contact) {
			        		if(error){
			                	reject(error);
			            	}
				            else{
				                resolve(contact);
				            }
					});
			    });
			}

	    var iresult = await getAsyncData();
	    var op = [];

	    for (i in iresult){
	    	var obj = {"name": iresult[i]["name"],"phoneNumber": iresult[i]["phoneNumber"],"email":iresult[i]["email"]};
	    	op.push(obj);
	    }
	    return op;
	}
}
