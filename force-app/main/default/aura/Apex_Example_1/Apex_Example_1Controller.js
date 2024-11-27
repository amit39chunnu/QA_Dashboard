({
	invoke : function(component, event, helper) {
        // component : component from where controller is called
        // C: Serverside controller 
        // call : name of the method in server side controller 
        var abc=component.get("c.call"); 
        // Once the resultset returned from the server -side to javascript  we need create callback
         //abc.setCallback(scope,action);
         abc.setCallback(this,function(response){
             // get the state of the response 
             var state=response.getState();
             if(state === 'SUCCESS'){
                 console.log('Operation Success');
                 // Get the return value from the apex class 
                 console.log(response.getReturnValue()); // getReturnValue(); This will give the value returned from the method
             }else{
                 console.log('Error');
             }
         });
        
        //Every apex class will be running like asynchronous method 
        //we need to add apex object to a queue 
        $A.enqueueAction(abc);
	}
})