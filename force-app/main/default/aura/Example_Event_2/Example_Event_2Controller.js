({
	call : function(component, event, helper) {
		var result=event.getParam("testWord");
        component.set("v.empName",result);
	}
})