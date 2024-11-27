({
	show : function(component, event, helper) {
		var abc=component.get("v.like");
        component.set("v.like",!abc);
	},
    call :function(component,event,helper){
        var abc=component.get("v.answer");
        component.set("v.answer",!abc);
    }
})