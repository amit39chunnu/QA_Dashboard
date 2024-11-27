({
	show : function(component, event, helper) {
		var createRecordEvent = $A.get("e.force:createRecord");
    	createRecordEvent.setParams({
        		"entityApiName": "Contact"
    	});
    	createRecordEvent.fire();
	},
    call : function(component,event,helper){
    	   var editRecordEvent = $A.get("e.force:editRecord");
    	   editRecordEvent.setParams({
                "recordId":"0037F00000gzguiQAA"
   			});
    	editRecordEvent.fire();
    },
    gotoList : function (component, event, helper) {
    	var navEvent = $A.get("e.force:navigateToList");
            	navEvent.setParams({
                	"listViewId":"00B7F00000CcIniUAF",
                	"listViewName": null,
                	"scope": "Contact"
            	});
            	navEvent.fire();
	},
    gotoRelatedList : function (component, event, helper) {
    	var relatedListEvent = $A.get("e.force:navigateToRelatedList");
    	relatedListEvent.setParams({
        	"relatedListId": "Cases",
        	"parentRecordId":"0017F00000iBvgjQAC"
    	});
    	relatedListEvent.fire();
	},
    navHome : function (component, event, helper) {
    	var homeEvent = $A.get("e.force:navigateToObjectHome");
    	homeEvent.setParams({
        	"scope": "Account"
    });
    homeEvent.fire();
},
    createRecord : function (component, event, helper) {
    var navEvt = $A.get("e.force:navigateToSObject");
    navEvt.setParams({
      "recordId": "0017F00000iBvgjQAC",
      "slideDevName": "related"
    });
    navEvt.fire();
},
    gotoURL : function (component, event, helper) {
    var urlEvent = $A.get("e.force:navigateToURL");
    urlEvent.setParams({
      "url": "/006/o"
    });
    urlEvent.fire();
}
    
})