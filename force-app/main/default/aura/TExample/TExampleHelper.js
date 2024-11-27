({
	helpMe : function(component,event) {
		var but1=event.getSource();
        var value1=but1.get("v.label");
        component.set('v.message','Iam '+value1);  
	}
})