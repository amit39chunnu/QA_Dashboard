({
	show : function(component, event, helper) {
			var name=component.find("name").get("v.value");
        	var myname=component.find("myname").get("v.value");
        	console.log(name);
        	console.log(myname);
	},
    call :function(component,event,helper){
        component.find("age").set("v.value",'Satish Myla');
        component.find("name").set("v.value",'Satish Myla');
    }
})