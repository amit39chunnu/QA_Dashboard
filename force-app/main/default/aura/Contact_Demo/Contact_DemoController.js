({
	show : function(component, event, helper) {
		component.find("myRec").getNewRecord(
        	"Contact",
            null,
            false,
            $A.getCallback(function(){
                var rec=component.get("v.newContact");
                if(rec === null){
                    console.log('Record created');
                }else{
                    console.log('Record Failed');
                }
            })
        );
        
	},
    callMe: function(component,event,helper){
        component.find("myRec").saveRecord(function(saveResult){
            if(saveResult.state === "SUCCESS" || saveResult.state === "DRAFT"){
                console.log('Success');
                 console.log('Success');
                 console.log('Success');
            }else{
                 console.log('Failed');
                console.log('Failed');
                console.log('Failed');
            }
        }); 
    }
})