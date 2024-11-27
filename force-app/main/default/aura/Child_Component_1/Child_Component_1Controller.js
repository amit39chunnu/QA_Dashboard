({
	show : function(component, event, helper) {
			var fname=component.find("fname").get("v.value");
        	var lname=component.find("lname").get("v.value");
        	var name=fname+'-'+lname;
        	var abc =$A.get("e.c:First_Event");
        	abc.setParams({"empName":name});
        	abc.fire();
        
	}
})