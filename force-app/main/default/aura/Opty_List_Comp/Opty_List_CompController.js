({
	invoke : function(component, event, helper) {
		var action=component.get("c.getOpty");
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state ==='SUCCESS'){
                component.set("v.myList",response.getReturnValue());
            }else{
                console.log('Failed');
            }
            
        });
        $A.enqueueAction(action);
	}
})