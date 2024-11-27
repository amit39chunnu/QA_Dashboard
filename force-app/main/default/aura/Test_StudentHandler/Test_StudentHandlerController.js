({
	show : function(component, event, helper) {
		var name=event.getParam("empName");
        component.set("v.stdName",name);
	}
})