({
	initfun : function(component, event, helper) {
			component.set("v.aval",10);
        	component.set("v.bval",20);
        	component.set("v.cval",30);
	},
    invoke : function(component,event,helper){
        var source=event.getSource();
        var label=source.get("v.label");
        var aval=component.get("v.aval");
        var bval=component.get("v.bval");
        var cval=0;
        if(label=='add'){
           cval=aval+bval;  
           component.set("v.cval",cval);
        }else{
            if(label=='mul'){
                cval=aval*bval;
                component.set("v.cval",cval);
            }else{
                component.set("v.aval",0);
                component.set("v.bval",0);
                component.set("v.cval",0);
            }
        }
    }
})