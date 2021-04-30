
(function(n, t, a, e) {
	var i = "aptrinsic";
	n[i] = n[i] || function() {
		(n[i].q = n[i].q || []).push(arguments)
	}, n[i].p = e;
	var r = t.createElement("script");
	r.async = !0, r.src = a + "?a=" + e;
	var c = t.getElementsByTagName("script")[0];
	c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-KNFBP3CQEW3C-2");





function validate() {
	// var r=Math.floor(Math.random()*4);
	var email = document.getElementById("username").value;
	var pwd = document.getElementById("pwd").value;

	var username = email.substring(0, 9);
	localStorage.setItem("Uname", username);

	
	if ( email == "srinivas.myakala18@gmail.com" || email=="user1@gmail.com" || email=="user2@gmail.com"|| email=="user3@gmail.com"|| email=="user4@gmail.com"|| email=="user5@gmail.com" || email=="user18@gmail.com" || email=="user12@gmail.com" ) {



		//passing user and account objects:            
		aptrinsic("identify", {
			//User Fields
			"id": email.substring(0, 8), // Required for logged in app users
			"email": email,
			"firstName": email.substring(0, 8),
			"lastName": "m",
			"signUpDate": Date.now(), //unix time in ms
			"role": "",
           // "city":"Hyderabad",
            "surveys":true,
          //  "countryCode":"RO"
          
                     "License" : "Standard"


		}, {
			//Account Fields
			"id": "SF100025", //Required
			"name": "Eastman Kodak",
            // "id": "IBM", //Required
			// "name": "International Business Machine",
           // "countryCode":"UA",
			"Program": "Platinum" ,// flat custom attributes
           // "role": "Customer success"
		});




		return true;

	}

    else{
        alert("user name should contain USER!!!");
        return false;
    }

}


/*----------Global context---------*/






/*----------------------------------------------------------------------------------------------*/



function showengagement() {
	aptrinsic('track', 'FORM_SUBMIT', {
		"submitted": true
	});
}

function modalopen() {
	aptrinsic('track', 'MODAL_ACTION', {
		"ModalOpen": true
	});
}

function logout() {
	window.aptrinsic('reset');
}


aptrinsic('set', 'globalContext', {
	"ver": ""
});
var vId = 1;
aptrinsic('set', 'globalContext', {
	"versionID": vId
});
//call custom event
aptrinsic('track', 'purchased', {
	"amount_purchase": 1
});

var aa="purchased_withoutquots";
aptrinsic('track', aa, {
	"amount": 1
});

function checkboxAction(element) {
	if (element.checked === false) {
		aptrinsic('track', 'checked_false', {
			"submitted": false
		});

	}
}

var engagementListener = {
	type: "",
	steps: 0,
	date: ""
};
aptrinsic('addListener', 'engagementViewedStep', function(eventData) {
	console.log(JSON.stringify(eventData));
	a = eventData.stepNumber;
	console.log(eventData.stepNumber);
	engagementListener.date = eventData.executionDate;
	engagementListener.type = eventData.engagementType;
	engagementListener.steps = eventData.stepNumber;
	console.log(engagementListener);
});

function checkForButton() {

    if ( document.getElementById("bookAcall")){
       aptrinsic('track','checkForButton',{"button-present":true});
        }
        
    else{
       aptrinsic('track','checkForButton',{"button-present":false});
        }
   

    
  }

  document.addEventListener("DOMContentLoaded", checkForButton);

  //aptrinsic('set', 'account', {"role":"devlop"});
aptrinsic("pageView", {"title" : "update user details","path" : "/pricing.html"});

