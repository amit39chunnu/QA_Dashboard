({
	show : function(component, event, helper) {
		var ev=component.getEvent("myEvent");
        ev.setParams({"empName":"Satish Myla Call"});
        ev.fire();
	},
    create: function(component,event,helper){
        var abc=component.getEvent("myEvent");
        abc.setParams({"empName":"Kiran Kumar Call"});
        abc.fire();
    }
    
})