({
	NavigatetoC1 : function(component, event, helper) {
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef : "c:Comp_Example"
           
        });
        evt.fire();
    }
})