({
	invoke: function(component, event, helper) {
		var action=component.getEvent("first");
        action.setParams({"empName":"Satish Myla Event"});
        action.fire();
	}
})