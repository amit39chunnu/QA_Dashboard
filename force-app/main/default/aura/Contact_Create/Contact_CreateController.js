({
	 doInit: function(component, event, helper) {
        // Prepare a new record from template
        component.find("contactRecordCreator").getNewRecord(
            "Contact", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.newContact");
                var error = component.get("v.newContactError");
                if(error || (rec === null)) {
                    console.log('Contact Is null');
                    return;
                }
               
            })
        );
    },

    handleSaveContact: function(component, event, helper) {
            component.set("v.simpleNewContact.AccountId", component.get("v.recordId"));
            component.find("contactRecordCreator").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                   console.log('Success');
                    // Create the instant of a toast
					var resultsToast = $A.get("e.force:showToast");
               		// the pass the parameters like key value pair in the map
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved."
                    });
                    // fire the toast
                    resultsToast.fire();
                } else{
                    console.log('Failed');
                }
                   
            });
       
    }
})