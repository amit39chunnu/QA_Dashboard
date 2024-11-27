({
	call : function(component, event, helper) {
		var acc=component.get("v.newAcc");
        var action=component.get("c.create");
        action.setParams({"acc":acc});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS'){
                console.log(response.getReturnValue());
            }else{
                console.log(response.getReturnValue());
            }
            
        });
        $A.enqueueAction(action);
	}
})