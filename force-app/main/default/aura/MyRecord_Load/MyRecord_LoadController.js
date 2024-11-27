({
    handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "LOADED") {
         	var resultsToast = $A.get("e.force:showToast");
            	resultsToast.setParams({
                "title": "Saved",
                "message": "The record is Loaded."
            });
            resultsToast.fire();
            console.log("Record is loaded successfully.");
        } else if(eventParams.changeType === "CHANGED") {
            
           
        } else if(eventParams.changeType === "REMOVED") {
            
           
        } else if(eventParams.changeType === "ERROR") {
            
            
        }
    }
})