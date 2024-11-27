({
	show : function(component, event, helper) {
		component.find("rec").getNewRecord(
        	'Contact',
            null,
            false,
            $A.getCallback(function(){
                var myRec=component.get("v.newAccount");
                if(myRec === null){
                    console.log('Record Creation Fail');
                    console.log('Record Creation Fail');
                }else{
                    console.log('Record Created');
                }
            })
        );
	},
    callMe :function(component,event,helper){
        component.find("rec").saveRecord(function(saveResult){
            if(saveResult.state === 'SUCCESS' || saveResult.state === 'DRAFT'){
                console.log('Insertion Successfull');
            }else{
                console.log('Insertion Failed');
            }
        });
    }
})