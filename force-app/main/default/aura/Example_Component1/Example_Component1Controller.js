({
	NavigatetoC2 : function(component, event, helper) {
       var evt = $A.get("e.force:navigateToComponent");
	     evt.setParams({
			componentDef : "c:Example_Component2",
			componentAttributes: {
			}
		});
evt.fire();
	}
})