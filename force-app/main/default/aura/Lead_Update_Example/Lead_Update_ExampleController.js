({
	show : function(component, event, helper) {
        // function(saveResult){} : This will contain the logic what you want to implements 
        // saveResult : This will contain the state ,which will specify the success or failure
        // 				 SUCCESS,DRAFT,INCOMPLETE,ERROR 
        // Database.SaveResult :
        // $A.getCallback(param1) : 
        // Param1: function(saveResult){}
        // saveRecord(param1) : This will take $A.getCallback(param) as parametes 
        // 	
         component.find("myRecord").saveRecord($A.getCallback(function(saveResult) {

            var state=saveResult.state;
            if(state === 'SUCCESS'){
                console.log('Record Updated Successfully');
            }else{
                  console.log('Record Updated failed');
            }
        }));
       
	}
})