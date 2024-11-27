({
	call: function(component, event, helper) {
        var aval=component.find("aval").get("v.value");
        var bval=component.find("bval").get("v.value");
		var selected=event.getParam("value");
        console.log(selected);
        var cval=0;
        if(selected ==='Add'){
            cval=aval+bval;
        }else{
            cval=aval-bval;
        }
        component.find("cval").set("v.value",cval);
	}
})