({
	callMe : function(component, event, helper) {
		var name=component.get("v.objName");
        var fldName=component.get("v.fieldName");
        var action =component.get("c.getData");
        action.setParams({
            objName : name ,
            fieldName :fldName
        });
        action.setCallback(this,function(response){
            var state =response.getState();
            if(state === 'SUCCESS'){
                var myList=response.getReturnValue(); // getReturnValue() This will return list of names
                component.set("v.options",myList);
                console.log(myList);
            }else{
                console.log('Error');
            }
        });
        $A.enqueueAction(action);
	}
})