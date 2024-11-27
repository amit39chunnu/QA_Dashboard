({
	show : function(component, event, helper) {
		var result=event.getParams('empName');
        component.set("v.res",result.empName);
	}
})