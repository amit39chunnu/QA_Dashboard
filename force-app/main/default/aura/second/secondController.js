({
	invoke : function(component, event, helper) {
		var result=event.getParams('Description');
        component.set("v.testing",result.Description);
	}
})