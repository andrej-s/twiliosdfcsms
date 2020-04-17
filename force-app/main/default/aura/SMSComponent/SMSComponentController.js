({
	initiateSend : function(cmp, event, helper) {
        let button = event.getSource();
    		button.set('v.disabled',true);
        try{
        var action = cmp.get("c.sendSMS");
        action.setParams({ caseId : cmp.get("v.recordId"), bodyString : cmp.find("smsBody").get("v.value") });
		
        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log(response.getError());
            if (state === "SUCCESS") {
                // Alert the user with the value returned 
                // from the server
                console.log("From server: " + response.getReturnValue());
                if(response.getReturnValue()) {
                    var x = document.getElementById("successSMS");
    				x.style.display = "block";
                }
                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
            }
            else if (state === "INCOMPLETE") {
                // do something
				console.log('incomplete');
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    alert("Unknown error");
                }
            }
        });

        $A.enqueueAction(action);
        } catch (e) {
            alert('Error sending SMS:' + e );
        } 
		
        console.log('enqueued');
	}
})