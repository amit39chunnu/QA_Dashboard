({
	invoke: function(component, event, helper) {
		var action=component.get("c.getContacts");
        action.setParams({recordId :component.get("v.recordId")});
        action.setCallback(this,function(response){
            var state =response.getState();
            if(state === 'SUCCESS'){
                var myList=action.getReturnValue();
                component.set("v.myContact",myList);
                console.log(myList);
            }
        })
        $A.enqueueAction(action);
	}
})