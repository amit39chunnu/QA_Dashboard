({
	invoke : function(component, event, helper) {
		var leads=component.get("v.leads");
        var action=component.get("c.create");
        action.setParams({"myLead":leads});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS'){
                var res=response.getReturnValue();
                component.set('v.result',res);
                console.log(res);
            }else{
                console.log(res);
            }
        })
        $A.enqueueAction(action);
	}
})