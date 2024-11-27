({
	createContact: function(component, event, helper) {
        alert('testing');
        // Invoke the method "saveRecord" from the apex class 
        var saveAction = component.get("c.saveRecord");
        /* pass the parameters of the "saveRecord" method 
           Contact con ,Id accId
           Read value of attribute newContact and pass it as con 
           Read value of attribute recordId and pass it as accId 
           in the form of key value using setParams
        */
        console.log(component.get("v.newContact"));
        console.log(component.get("v.recordId"));
        saveAction.setParams({
            con: component.get("v.newContact"),
            accId: component.get("v.recordId")  
             
        });
        /* invoke thet callback 
         * Check the status of the response 
         * if status is "success " then print toastNessage as Success"
         * else Print toast message as Failed
         */
        saveAction.setCallback(this, function(response) {
            var state = response.getState();
            console.log('state'+state);
            if(state === "SUCCESS") {
                console.log(response.getReturnValue());
                // $A.get(e.force:showToast)
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Contact",
                    "message": "Contact Creation is Success."
                });
                //Close the quickAction window 
                //$A.get("e.force:closeQucikAction")
                $A.get("e.force:closeQuickAction").fire();
                resultsToast.fire();
                $A.get("e.force:refreshView").fire();
            }
            else {
               var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Contact",
                    "message": "Contact Creation is Failed."
                });
            } 
        });
        $A.enqueueAction(saveAction);
    },
    
    handleCancel: function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    }
})