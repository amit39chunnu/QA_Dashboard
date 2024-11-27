({
	invoke: function(component, event, helper) {
		 
		var res=event.getParam("empName");
        component.set("v.Name",res);
	}
})