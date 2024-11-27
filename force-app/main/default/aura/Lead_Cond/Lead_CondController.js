({
	invoke : function(component, event, helper) {
        component.find("myId").getNewRecord("Lead",null,false,$A.getCallback(function(){
            	var rec=component.get("v.newLead");
            	if(rec == null){
                    console.log('Error');
                }else{
                    console.log('success');
                }
        }));
	},
    save : function(component,event,helper){
        	component.find("myId").saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                console.log('Record Created');
            }else{
                console.log('Record Failed');
            }
            }));
    }
})