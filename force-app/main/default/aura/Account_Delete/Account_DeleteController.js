({
    handleDeleteRecord: function(component, event, helper) {
        component.find("recordHandler").deleteRecord($A.getCallback(function(deleteResult) {
          
            if (deleteResult.state === "SUCCESS" || deleteResult.state === "DRAFT") {
                // record is deleted
                console.log("Record is deleted.");
            } else{
                console.log('Record Deletion failed');
            }
        }));
    },

    /**
     * Control the component behavior here when record is changed (via any component)
     */
    handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "REMOVED") {
            
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Deleted",
                "message": "The record was deleted."
            });
            resultsToast.fire();

        } 
    }
})