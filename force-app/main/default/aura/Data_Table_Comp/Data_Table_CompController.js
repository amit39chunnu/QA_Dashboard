({
	show : function(component, event, helper) {
        var cols=[{label:'LastName',fieldName:'FirstName',type:'String',sortable:true,actions: headerActions},
                  {label:'FirstName',fieldName:'FirstName',type:'String',sortable:true,actions: headerActions},
                  {label:'Phone',fieldName:'Phone',type:'String',sortable:true,actions: headerActions}
                 ];
        var action=component.get("c.getAll");
        component.set("v.columns",cols);
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state ==='SUCCESS'){
                component.set("v.contacts",response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	}
})