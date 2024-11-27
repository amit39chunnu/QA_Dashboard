({  
    call :function(component,event,helper){
        console.log('Testing');
        component.find("myRec").getNewRecord(
            "Account", 
             null,     
             false,    
            $A.getCallback(function() {
                var rec = component.get("v.acc");
              
                if( (rec === null)) {
                    console.log('RecordNot Created');
                }else{
                	console.log("Record template initialized: " + rec.sobjectType);
                }
            })
        );
    },
	show: function(component, event, helper) {
		var acc=component.get("v.acc");
        console.log(acc.Name);
        console.log(acc.Phone);
        console.log(acc.Industry);
        var action=$A.get("e.force:showToast");
        action.setParams({'title':'MyMessage','message':'This is saved'});
        action.fire();
	}
})