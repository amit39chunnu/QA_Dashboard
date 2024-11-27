({
	submit: function(component, event, helper) {
		var name=component.find("name").get("v.value");
        var city=component.find("city").get("v.value");
        var action=$A.get("e.c:Second_Event"); 
        action.setParams({"empName":name,"city":city});
        action.fire();
	}
})