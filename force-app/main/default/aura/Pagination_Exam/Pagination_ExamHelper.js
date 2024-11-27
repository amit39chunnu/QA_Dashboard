({
	 /*
     * Initially this Method will be called and will fetch the records from the Salesforce Org 
     * Then we will hold all the records into the attribute of Lightning Component
     */
	doFetchContact : function(component) {
        // Invoke the method from the apex class 
        // component.get("c.methodName");
		var action = component.get('c.showContacts');
        // create a callback
        // action.setCallback(this,function(respone){})
        action.setCallback(this, function(response){
            // check the status of the method 
            // if the status is success then fetch list of records returned by the
            // method
            var state = response.getState();
            if(state === 'SUCCESS'){
                // fetch the result from the showContacts
                var result=response.getReturnValue();
                
                // Assign the records fetched from the apex class to attribute contactData
                component.set("v.ContactData",result);
                // Find the size of the result and assign to attribute totalRecods
                component.set("v.totalRecords",result.length);
                // find the size of the page (How many records should be displayed per page)
                component.set("v.startPage",0);
                component.set("v.endPage",pageSize-1);
                var pageSize=component.get("v.pageSize");
                // List of records which you want to display on the current page 
                // are stored in paginationList
                var PaginationList = [];
                // i=0;i<5;i++
                //Take the first 5 records from the result fetched and add it to
                //the pagination list
                for(var i=0; i< pageSize; i++){
                    if(result.length> i)
                        PaginationList.push(response.getReturnValue()[i]);    
                }
                component.set('v.PaginationList', PaginationList);
                component.set('v.isSending',false);
            }else{
                alert('ERROR');
            }
        });
        $A.enqueueAction(action);
	},
    /*
     * Method will be called when use clicks on next button and performs the 
     * calculation to show the next set of records
     */
    next : function(component, event){
        var sObjectList = component.get("v.ContactData");
        var end = component.get("v.endPage");
        var start = component.get("v.startPage");
        var pageSize = component.get("v.pageSize");
        var Paginationlist = [];
        var counter = 0;// end 4 
        for(var i=end+1; i<end+pageSize+1; i++){
            if(sObjectList.length > i){
                Paginationlist.push(sObjectList[i]);
            }
            counter ++ ;
        }
        start = start + counter;
        end = end + counter;
        component.set("v.startPage",start);
        component.set("v.endPage",end);
        component.set('v.PaginationList', Paginationlist);
    },
    /*
     * Method will be called when use clicks on previous button and performs the 
     * calculation to show the previous set of records
     */
    previous : function(component, event){
        var sObjectList = component.get("v.ContactData");
        var end = component.get("v.endPage");
        var start = component.get("v.startPage");
        var pageSize = component.get("v.pageSize");
        var Paginationlist = [];
        var counter = 0;
        for(var i= start-pageSize; i < start ; i++){
            if(i > -1){
                Paginationlist.push(sObjectList[i]);
                counter ++;
            }else{
                start++;
            }
        }
        start = start - counter;
        end = end - counter;
        component.set("v.startPage",start);
        component.set("v.endPage",end);
        component.set('v.PaginationList', Paginationlist);
    },
})