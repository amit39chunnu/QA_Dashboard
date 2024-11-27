({
	add : function(component, event, helper) {
		var aval=component.find("aval").get("v.value");
        var bval=component.find("bval").get("v.value");
        var cval=parseInt(aval)+parseInt(bval);
        
        component.find("cval").set("v.value",cval);
	},
    sub :function(component){
        var aval=component.find("aval").get("v.value");
        var bval=component.find("bval").get("v.value");
        var cval=parseInt(aval)-parseInt(bval);
        
        component.find("cval").set("v.value",cval);
    },
    cancel:function(component){
        component.find("aval").set("v.value",0);
        component.find("bval").set("v.value",0);
        component.find("cval").set("v.value",0);
    }
})